// Shared production pronunciation player (MIT). Only recording URL is localized.
globalThis.__MasshiroKanjiAliveIndex = [["最初", "さいしょ", "sho-haji(me)_06_a"]];
/** Native recording lookup and playback shared by both dictionary surfaces. */
(() => {
  const normalizeReading = (value) =>
    value.normalize("NFC").replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
  const key = (headword, reading) => `${headword.normalize("NFC")}\t${normalizeReading(reading)}`;
  const index = new Map(
    (globalThis.__MasshiroKanjiAliveIndex || []).map(([term, reading, stem]) => [key(term, reading), stem])
  );
  function lookup({ headword, reading } = {}) {
    if (typeof headword !== "string" || typeof reading !== "string") return null;
    const stem = index.get(key(headword, reading));
    return stem
      ? "/public/reader/web-extractor/demo/saisho.mp3"
      : null;
  }
  function createPlayer({
    environment = globalThis,
    requireData = () => globalThis.__MasshiroPlatform?.requireData("websiteContent"),
  } = {}) {
    let generation = 0;
    let release = () => {};
    function cancel() {
      generation++;
      release();
      release = () => {};
    }
    async function speak(pair, report, current) {
      const synth = environment.speechSynthesis;
      if (!synth || !environment.SpeechSynthesisUtterance)
        throw new Error("AI voice is unavailable in this browser.");
      const japanese = /[\u3040-\u30ff\u3400-\u9fff]/.test(pair.headword || pair.reading || "");
      const language = japanese ? "ja" : "en";
      const findVoice = () =>
        synth.getVoices().find((voice) => voice.lang.toLowerCase().split(/[-_]/)[0] === language);
      let voice = findVoice();
      if (!voice) {
        await new Promise((resolve) => {
          const finish = () => {
            clearTimeout(timer);
            synth.removeEventListener?.("voiceschanged", changed);
            release = () => {};
            resolve();
          };
          const changed = () => {
            if (findVoice()) finish();
          };
          const timer = setTimeout(finish, 2000);
          release = finish;
          synth.addEventListener?.("voiceschanged", changed);
        });
        if (!current()) return;
        voice = findVoice();
      }
      if (!voice)
        throw new Error(`No ${japanese ? "Japanese" : "English"} AI voice is available on this device.`);
      if (!current()) return;
      report("AI voice (native recording unavailable).", false);
      await new Promise((resolve, reject) => {
        const utterance = new environment.SpeechSynthesisUtterance(
          japanese ? pair.reading || pair.headword : pair.headword
        );
        utterance.voice = voice;
        utterance.lang = voice.lang;
        let done = false;
        const finish = (error) => {
          if (done) return;
          done = true;
          clearTimeout(timer);
          utterance.onend = utterance.onerror = null;
          synth.cancel();
          release = () => {};
          if (error) reject(error);
          else resolve();
        };
        const timer = setTimeout(() => finish(new Error("AI voice timed out.")), 30000);
        release = () => finish();
        utterance.onend = () => finish();
        utterance.onerror = () => finish(new Error("AI voice playback failed."));
        try {
          synth.speak(utterance);
        } catch {
          finish(new Error("AI voice playback failed."));
        }
      });
    }
    async function play(pair, report = () => {}, isCurrent = () => true) {
      cancel();
      const request = generation;
      const current = () => request === generation && isCurrent();
      if (!current()) return;
      const url = lookup(pair);
      const watch = setInterval(() => {
        if (!current() && request === generation) cancel();
      }, 50);
      let permitted = false;
      try {
        await requireData();
        permitted = true;
        if (!current()) return;
        if (!url) {
          await speak(pair, report, current);
          return;
        }
        await new Promise((resolve, reject) => {
          const audio = new environment.Audio();
          let done = false;
          let timeout;
          const finish = (error) => {
            if (done) return;
            done = true;
            clearTimeout(timeout);
            audio.onended = audio.onerror = audio.onplaying = null;
            audio.pause();
            audio.removeAttribute("src");
            audio.load();
            release = () => {};
            if (error) reject(error);
            else resolve();
          };
          release = () => finish();
          audio.crossOrigin = "anonymous";
          audio.onended = () => finish();
          audio.onerror = () => finish(new Error("Native recording unavailable."));
          timeout = setTimeout(() => finish(new Error("Native recording timed out.")), 5000);
          audio.onplaying = () => {
            audio.onplaying = null;
            clearTimeout(timeout);
            timeout = setTimeout(() => finish(new Error("Native recording timed out.")), 30000);
          };
          audio.src = url;
          try {
            Promise.resolve(audio.play()).catch(finish);
          } catch (error) {
            finish(error);
          }
        });
      } catch (error) {
        if (current()) {
          if (!permitted || !url) report(error.message, true);
          else {
            try {
              await speak(pair, report, current);
            } catch (speechError) {
              if (current()) report(speechError.message, true);
            }
          }
        }
      } finally {
        clearInterval(watch);
      }
    }
    return { play, cancel };
  }
  globalThis.__MasshiroPronunciation = { lookup, createPlayer };
})();
