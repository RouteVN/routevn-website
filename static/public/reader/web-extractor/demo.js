import { renderCardPitch } from './demo-lapis-pitch.js';
import { formatMainDefinitionHtml } from './demo-anki-definition.js';
import { tokens, sceneIndices, history, lookup, initialState, transition } from './demo-state.js';
import './demo-pronunciation.js';
import './demo-pitch-renderer.js';
import './demo-dictionary-renderer.js';
const root=document.querySelector('[data-vn-demo]');
if(root){
 const get=name=>root.querySelector(`[data-demo-${name}]`);
 const popup=get('popup'),status=get('status');
 const player=globalThis.__MasshiroPronunciation.createPlayer({requireData:async()=>{}});
 let state=initialState();
 const buttons=[];
 let activeWord=null;
 let hideTimer=null,overWord=false,overPopup=false;
 function stay(){clearTimeout(hideTimer);hideTimer=null;}
 function leave(){
  if(overWord||overPopup||popup.contains(document.activeElement)||activeWord?.matches(':focus-visible'))return;
  if(!hideTimer)hideTimer=setTimeout(()=>{hideTimer=null;stopAudio();render('close');},250);
 }
 popup.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){overPopup=true;stay();}});
 popup.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'){overPopup=false;leave();}});
 popup.addEventListener('focusin',stay);
 popup.addEventListener('focusout',()=>queueMicrotask(leave));
 function stopAudio(){player.cancel();get('audio').disabled=false;get('audio-error').hidden=true;}
 function definitions(doc,entry){
  const entries=entry.senses.map(sense=>({
   dictionaryId:'jmdict_en',source:'JMdict',word:entry.word,reading:entry.reading,
   cleanPos:sense.posCodes,meanings:sense.glosses,
   tagLabels:[...globalThis.__MasshiroAttribution.normalizeDefinitionTags(sense.posCodes),...sense.misc.map((label,i)=>{const code=sense.miscCodes?.[i];if(!code)return label;const normalized=globalThis.__MasshiroAttribution.normalizeDefinitionTags(code);return normalized[0]===code?label:normalized[0];})],
  }));
  const template=doc.createElement('template');
  template.innerHTML=globalThis.__MasshiroAttribution.renderDictionaryMatches(entries);
  return template.content;
 }
 function positionPopup(){
  if(!activeWord||!state.popup)return;
  const rect=activeWord.getBoundingClientRect(),box=popup.getBoundingClientRect();
  if(rect.bottom<72||rect.top>innerHeight){stopAudio();render('close');return;}
  const width=Math.min(340,innerWidth-24),height=box.height;
  const above=rect.top-height-12;
  const y=above>=75?above:Math.min(innerHeight-height-12,rect.bottom+12);
  popup.style.setProperty('--popup-x',Math.max(12,Math.min(rect.left,innerWidth-width-12))+'px');
  popup.style.setProperty('--popup-y',Math.max(75,y)+'px');
 }
 function renderCard(){
  const frame=get('frame'),doc=frame.contentDocument;if(!doc?.querySelector('[data-card-front]')||state.card===null)return;
  const entry=lookup(state.card);
  doc.documentElement.classList.toggle('mobile',frame.clientWidth<600);
  for(const field of ['word','reading'])doc.querySelectorAll(`[data-field="${field}"]`).forEach(el=>el.textContent=entry[field]);
  const [before,after]=entry.sentence.split(entry.surface);const target=doc.createElement('b');target.textContent=entry.surface;
  doc.querySelector('[data-field="sentence"]').replaceChildren(before,target,after);
  doc.querySelector('[data-field="meaning"]').innerHTML=formatMainDefinitionHtml(
   entry.senses.flatMap(s=>s.glosses), [...new Set(entry.senses.flatMap(s=>s.posCodes))],
   'JMdict', [], {title:'JMdict',license:'CC BY-SA 4.0'}, ['https://www.edrdg.org/jmdict/j_jmdict.html'],
   entry.pitch.length ? '<p>'+ (entry.inflected ? 'Dictionary-form pitch. ' : '') +'Pitch accent: Kanjium, Uros Ozvatic, CC BY-SA 4.0. <a href="credits.html" target="_blank" rel="noopener">Sources and licenses</a>.</p>' : ''
  );
  doc.querySelector('[data-card-front]').hidden=state.answer;doc.querySelector('[data-card-back]').hidden=!state.answer;
  renderCardPitch(doc,entry);
  const rt=doc.querySelector('.vocab rt');if(rt&&!/[\u3400-\u9fff]/.test(entry.word))rt.textContent='';
 }
 function render(action,index){
  if(action==='close'||action==='reset'){stay();overPopup=false;overWord=false;}
  state=transition(state,action,index);popup.hidden=!state.popup;
  buttons.forEach(button=>button.setAttribute('aria-expanded',String(state.popup&&Number(button.dataset.demoWord)===state.selected)));
  get('empty').hidden=state.card!==null;get('card').hidden=state.card===null;
  get('flip').textContent=state.answer?'Hide answer':'Show answer';get('flip').setAttribute('aria-expanded',String(state.answer));
  if(action==='lookup'){
   const entry=lookup(state.selected);get('reading').textContent=entry.reading;get('reading').hidden=!(/[\u3400-\u9fff]/.test(entry.word)&&entry.reading!==entry.word);get('headword').textContent=entry.word;
   get('definitions').replaceChildren(definitions(document,entry));get('definitions').scrollTop=0;
   popup.querySelectorAll('.masshiro-pitch').forEach(el=>el.remove());
   const pronunciations=entry.pitch.map(row=>({type:'japanese-pitch-accent',language:'ja',dictionaryId:'kanjium',term:row[0],reading:row[2].reading,source:'Kanjium',patterns:row[2].pitches.map(pattern=>({...pattern,tags:[],nasalPositions:[],devoicePositions:[]}))}));
   const html=globalThis.__MasshiroPitch.render([{pronunciations,deinflectionReasons:entry.inflected?['polite']:[]}]);
   get('definitions').insertAdjacentHTML('beforeend',html);globalThis.__MasshiroPitch.mount(popup);
   get('audio').setAttribute('aria-label',`Play pronunciation of ${entry.reading}`);positionPopup();
  }
  renderCard();
 }
 function appendTokens(container,indices){
  container.replaceChildren();
  indices.forEach(index=>{
   const token=tokens[index];if(!token.id){container.append(token.surface);return;}
   const button=document.createElement('button');button.type='button';button.className='rvn-demo-word';button.textContent=token.surface;button.dataset.demoWord=String(index);
   button.setAttribute('aria-controls','rvn-demo-popup');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label',`Look up ${token.surface}`);
   const select=()=>{stay();if(state.selected!==index)stopAudio();activeWord=button;render('lookup',index);};
   button.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){overWord=true;select();}});
   button.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'){overWord=false;leave();}});
   button.addEventListener('focusout',()=>queueMicrotask(leave));button.addEventListener('focus',select);button.addEventListener('click',select);
   container.append(button);buttons.push(button);
  });
 }
 appendTokens(get('sentence'),sceneIndices);
 const rows=history.map(line=>{
  const row=document.createElement('article');row.className='backlog-card';
  const speaker=document.createElement('span');speaker.className='speaker-tag';speaker.textContent=line.speaker;
  const text=document.createElement('div');text.className='backlog-jp';text.lang='ja';appendTokens(text,line.indices);row.append(speaker,text);get('history').append(row);return {row,line};
 });
 get('search').addEventListener('input',()=>{const query=get('search').value.trim().toLocaleLowerCase();rows.forEach(({row,line})=>{row.hidden=!(line.sentence+line.speaker).toLocaleLowerCase().includes(query);});get('no-results').hidden=rows.some(({row})=>!row.hidden);});
 window.addEventListener('scroll',positionPopup,true);
 root.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.popup){e.preventDefault();activeWord?.focus();stopAudio();render('close');}});
 document.addEventListener('pointerdown',e=>{if(state.popup&&!popup.contains(e.target)&&!e.target.closest('[data-demo-word]')){stopAudio();render('close');}});
 get('preview').addEventListener('click',()=>{render('preview');status.textContent=`${lookup(state.card).word} card ready.`;get('flip').focus({preventScroll:true});get('card').scrollIntoView({block:'start',behavior:'instant'});});
 get('flip').addEventListener('click',()=>render('answer'));
 get('audio').addEventListener('click',async()=>{
  stopAudio();const selected=state.selected,entry=lookup(selected);if(!entry)return;get('audio').disabled=true;
  await player.play({headword:entry.word,reading:entry.reading},(message,error)=>{get('audio-error').textContent=message;get('audio-error').hidden=false;get('audio-error').dataset.error=String(error);},()=>state.selected===selected&&state.popup);
  get('audio').disabled=false;
 });
 get('frame').addEventListener('load',renderCard);
 let width=0;new ResizeObserver(entries=>{const next=entries[0].contentRect.width;if(next!==width){width=next;renderCard();positionPopup();}}).observe(root);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAudio();});
 render('reset');
}
