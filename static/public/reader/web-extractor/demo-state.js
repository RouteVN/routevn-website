import { pitchRecords } from './demo-pitch-data.js';
import { dictionary } from './demo-jmdict.js';
export const sentence = 'それ、最初から真っ白だったんですか？';
export const tokens = [
 {surface:'それ', id:'1006970', reading:'それ'}, {surface:'、'},
 {surface:'最初', id:'1293990', reading:'さいしょ'},
 {surface:'から', id:'1002980', reading:'から'},
 {surface:'真っ白', id:'1580620', reading:'まっしろ'},
 {surface:'だった', id:'2819970', reading:'だった'},
 {surface:'んです', id:'2087820', reading:'んです'},
 {surface:'か', id:'2028970', reading:'か'}, {surface:'？'},
];
export const sceneIndices = tokens.map((_, i) => i);
const introduction = '僕、真っ白といいます。';
const introTokens = [{surface:'僕',id:'1521400',reading:'ぼく'},{surface:'、'},{surface:'真っ白',id:'1580620',reading:'まっしろ'},{surface:'と',id:'1008490',reading:'と'},{surface:'いいます',lemma:'言う',id:'1587040',reading:'いう'},{surface:'。'}];
export const history = [
 {speaker:'真っ白',sentence:introduction,indices:introTokens.map((t,i)=>tokens.length+i)},
 {speaker:'真っ白',sentence,indices:sceneIndices},
];
tokens.push(...introTokens.map(t=>({...t,context:introduction})));
const greeting = 'ここ、空いてますか？';
const greetingTokens = [{surface:'ここ',id:'1288810',reading:'ここ'},{surface:'、'},{surface:'空いてます',lemma:'空く',id:'1586270',reading:'あく'},{surface:'か',id:'2028970',reading:'か'},{surface:'？'}];
history.unshift({speaker:'???',sentence:greeting,indices:greetingTokens.map((t,i)=>tokens.length+i)});
tokens.push(...greetingTokens.map(t=>({...t,context:greeting})));

export function lookup(index) {
 const token=tokens[index];
 return token?.id ? { ...dictionary[token.id], word:token.lemma || token.surface, reading:token.reading, surface:token.surface, sentence:token.context || sentence, pitch:pitchRecords.filter(r=>r[0]===(token.lemma || token.surface)&&r[2].reading===token.reading), inflected:Boolean(token.lemma) } : null;
}
export const initialState = () => ({ selected:null, popup:false, card:null, answer:false });
export function transition(state,action,index) {
 switch(action) {
  case 'lookup': return lookup(index) ? {...state,selected:index,popup:true} : state;
  case 'close': return {...state,popup:false};
  case 'preview': return state.selected === null ? state : {...state,card:state.selected,answer:false};
  case 'answer': return state.card === null ? state : {...state,answer:!state.answer};
  case 'reset': return initialState();
  default:return state;
 }
}
