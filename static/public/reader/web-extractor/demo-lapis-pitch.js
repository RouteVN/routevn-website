// Pitch markup adapted from donkuri/lapis (GPL-3.0). See demo/lapis-LICENSE.
import './demo-pitch-renderer.js';

export function cardPitch(entry) {
 const count = globalThis.__MasshiroPitch.morae(entry.reading).length;
 const inflecting = entry.senses.some(sense => sense.posCodes.some(code => /^(v|adj-i)/.test(code)));
 return [...new Set(entry.pitch.flatMap(row => row[2].pitches.map(pattern => pattern.position)))]
  .filter(position => Number.isInteger(position) && position >= 0 && position <= count)
  .map(position => ({position, category: position === 0 ? 'heiban' : inflecting ? 'kifuku' : position === 1 ? 'atamadaka' : position === count ? 'odaka' : 'nakadaka'}));
}

export function renderCardPitch(document, entry) {
 const patterns = cardPitch(entry);
 const targets = document.querySelectorAll('.vocab, .sentence b');
 targets.forEach(target => target.classList.remove('heiban', 'kifuku', 'atamadaka', 'odaka', 'nakadaka'));
 document.querySelector('.pitch').textContent = entry.reading;
 document.querySelector('#pitch-tags').replaceChildren();
 if (!patterns.length) return;
 targets.forEach(target => target.classList.add(patterns[0].category));
 constructPitch(document, entry.reading, patterns.map(pattern => pattern.position),
  (_, position) => patterns.find(pattern => pattern.position === position).category);
}

    function groupMoras(kana) {
        let currentChar = "", nextChar = "";
        const groupedMoras = [];
        const smallKana = new Set("ァィゥェォャュョヮぁぃぅぇぉゃゅょゎ\u3099\u309A°");

        for (let i = 0; i < kana.length; i++) {
            currentChar = kana[i];
            nextChar = i < kana.length - 1 && kana[i + 1];
            if (smallKana.has(nextChar)) {
                groupedMoras.push(currentChar + nextChar);
                i += 1;
            } else {
                groupedMoras.push(currentChar);
            }
        }
        return groupedMoras;
    }

    function constructPitch(document, kana, pitchPatterns, getPitchType) {
        const morae = groupMoras(kana);
        const pitch = document.querySelector(".pitch");
        const pitchTags = document.querySelector("#pitch-tags");

        const createPitchSpan = (pitchClass, pitchChar) => {
            const pitchSpan = document.createElement("span");
            const charSpan = document.createElement("span");
            const lineSpan = document.createElement("span");

            pitchSpan.classList.add(pitchClass);
            charSpan.classList.add("pitch-char");
            charSpan.innerText = pitchChar;
            lineSpan.classList.add("pitch-line");

            pitchSpan.appendChild(charSpan);
            pitchSpan.appendChild(lineSpan);

            return pitchSpan;
        };

        pitch.innerHTML = "";
        pitchTags.innerHTML = "";
        const pitchList = document.createElement("ul");
        const pitchTagList = document.createElement("ul");

        for (let pitchPattern of pitchPatterns) {
            const pitchTag = document.createElement("li");
            const pitchItem = document.createElement("li");
            pitchItem.classList.add("pitch-item");

            const isCompound = Array.isArray(pitchPattern);
            if(isCompound) {
                // Filters duplicates
                const tag = pitchPattern.map(({position}) => position).join(",");
                if([...pitchTagList.children].some(pitchTag => pitchTag.innerText === tag)) continue;
                pitchTag.innerText = tag;
            } else {
                pitchItem.classList.add(getPitchType(kana, pitchPattern));
                pitchTag.innerText = pitchPattern;
                pitchPattern = [{position: pitchPattern, moraCount: morae.length}];
            }

            let offset = 0;
            for (const {position, moraCount} of pitchPattern) {
                for (let i = 0; i < moraCount; i++) {
                    let moraPitch = "";
                    if (position <= 0) {
                        moraPitch = i === 0 ? "pitch-low" : "pitch-high";
                    } else if (position === 1) {
                        moraPitch = i === 0 ? "pitch-to-drop" : "pitch-low";
                    } else {
                        moraPitch = i === position - 1 ? "pitch-to-drop" :
                            i === 0 || i >= position ? "pitch-low" : "pitch-high";
                    }
                    if (offset + i >= morae.length) continue;
                    pitchItem.appendChild(createPitchSpan(moraPitch, morae[offset + i]));
                }
                offset += moraCount;
            }
            pitchTagList.appendChild(pitchTag);
            pitchList.appendChild(pitchItem);
        }

        pitch.appendChild(pitchList);
        pitchTags.appendChild(pitchTagList);
    }
