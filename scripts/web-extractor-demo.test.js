import test from 'node:test';
import assert from 'node:assert/strict';
import {tokens,sceneIndices,history,sentence,lookup,initialState,transition} from '../static/public/reader/web-extractor/demo-state.js';
import {dictionary} from '../static/public/reader/web-extractor/demo-jmdict.js';
test('every lexical span has a real JMdict entry and reconstructs the approved line',()=>{
 assert.equal(sceneIndices.map(i=>tokens[i].surface).join(''),sentence);
 tokens.forEach((token,i)=>{if(token.id){const entry=lookup(i);assert.ok(entry.readings.includes(entry.reading));assert.ok(entry.forms.includes(entry.word)||entry.readings.includes(entry.word));assert.ok(entry.senses.every(s=>s.glosses.length));}else assert.equal(lookup(i),null);});
 assert.deepEqual(dictionary['1293990'].senses[0].glosses,['beginning','outset','first','onset']);
 assert.deepEqual(dictionary['2819970'].senses[0].glosses,['was','were']);
});
test('a new lookup does not change the word saved to the card',()=>{
 let state=transition(initialState(),'lookup',2);state=transition(state,'preview');state=transition(state,'answer');
 state=transition(state,'lookup',4);assert.equal(lookup(state.card).word,'最初');assert.equal(lookup(state.selected).word,'真っ白');assert.equal(state.answer,true);
 state=transition(state,'preview');assert.equal(lookup(state.card).word,'真っ白');assert.equal(state.answer,false);
 assert.deepEqual(transition(state,'reset'),initialState());
});
test('punctuation, unavailable selections and premature card actions are ignored',()=>{
 const state=initialState();assert.deepEqual(transition(state,'lookup',1),state);assert.deepEqual(transition(state,'lookup',99),state);assert.deepEqual(transition(state,'preview'),state);assert.deepEqual(transition(state,'answer'),state);
});

test('history keeps its original context and pitch records match exact readings',()=>{
 assert.equal(history.length,3);
 assert.equal(history[0].sentence,'ここ、空いてますか？');
 history.forEach(line=>assert.equal(line.indices.map(i=>tokens[i].surface).join(''),line.sentence));
 const greetingVerb=tokens.findIndex(t=>t.surface==='空いてます');
 assert.equal(lookup(greetingVerb).word,'空く');
 assert.equal(lookup(greetingVerb).sentence,history[0].sentence);
 const verb=tokens.findIndex(t=>t.surface==='いいます');
 assert.equal(lookup(verb).word,'言う');assert.equal(lookup(verb).sentence,'僕、真っ白といいます。');
 assert.equal(lookup(2).pitch[0][2].pitches[0].position,0);
 assert.equal(lookup(4).pitch[0][2].pitches[0].position,3);
 assert.equal(lookup(5).pitch.length,0);
 tokens.forEach((t,i)=>{const e=lookup(i);if(e)e.pitch.forEach(r=>{assert.equal(r[0],e.word);assert.equal(r[2].reading,e.reading);});});
});

import {cardPitch} from '../static/public/reader/web-extractor/demo-lapis-pitch.js';
test('card pitch uses verified positions and Lapis categories',()=>{
 assert.deepEqual(cardPitch(lookup(2)),[{position:0,category:'heiban'}]);
 assert.deepEqual(cardPitch(lookup(4)),[{position:3,category:'nakadaka'}]);
 assert.deepEqual(cardPitch(lookup(tokens.findIndex(t=>t.surface==='僕'))),[{position:1,category:'atamadaka'}]);
 assert.deepEqual(cardPitch(lookup(5)),[]);
 const verb={...lookup(2),reading:'かえる',senses:[{posCodes:['v5r']}],pitch:[['帰る','pitch',{pitches:[{position:1}]}]]};
 assert.deepEqual(cardPitch(verb),[{position:1,category:'kifuku'}]);
});
