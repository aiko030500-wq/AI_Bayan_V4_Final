const S = s => document.querySelector(s);
const SA = s => Array.from(document.querySelectorAll(s));
const speak = (t) => {
  try { const u = new SpeechSynthesisUtterance(t); u.lang = "en-GB"; speechSynthesis.speak(u); } catch(e){}
};

const state = { name:"", sectionKey:"", index:0 };

setTimeout(()=>{ S('#splash').classList.add('hidden'); S('#login').classList.remove('hidden'); }, 800);

S('#loginBtn').addEventListener('click', ()=>{
  const pin = S('#pinInput').value.trim();
  const name = S('#nameInput').value.trim() || "Student";
  if(pin === "7856"){
    state.name = name;
    S('#userLabel').textContent = name;
    const ding = S('#ding'); if(ding) ding.play();
    show('menu');
  } else alert("Access code is incorrect. Try again.");
});

S('#backToLogin').addEventListener('click', ()=>show('login'));
S('#backToMenu').addEventListener('click', ()=>show('menu'));
SA('#menu .tile').forEach(b=>b.addEventListener('click', ()=>openSection(b.dataset.target)));

function show(id){
  ['login','menu','section','splash'].forEach(x=>S('#'+x).classList.add('hidden'));
  S('#'+id).classList.remove('hidden');
}

function openSection(key){
  state.sectionKey = key;
  state.index = 0;
  S('#sectionTitle').textContent = titleFor(key);
  renderCard();
  show('section');
}

function titleFor(key){
  const map = {
    phonetics:"Phonetics", grammar:"Grammar", reading:"Reading", writing:"Writing / Dictation",
    speaking:"Speaking", listening:"Listening", irregular:"Irregular Verbs",
    time:"Time", vocabulary:"Dictionary", numbers:"Numbers & Dates",
  };
  return map[key] || key;
}

function getSectionData(){
  const d = window.BAYAN;
  return d[state.sectionKey];
}

function renderCard(){
  const sec = getSectionData();
  const items = sectionItems(sec);
  const i = state.index;
  const item = items[i];

  const body = S('#sectionBody');
  body.innerHTML = "";

  const wrap = document.createElement('div');
  wrap.className = 'card';
  wrap.innerHTML = `<h3>${i+1}. ${item.title || sec.title}</h3>`;

  // Optional rule/text
  if(item.rule) wrap.innerHTML += `<p class="muted">${item.rule}</p>`;
  if(item.text) wrap.innerHTML += `<p>${item.text}</p>`;
  if(item.words) wrap.innerHTML += `<p>${item.words.map(w=>`<span class="badge" style="margin:4px;display:inline-block">${w}</span>`).join(' ')}</p>`;
  if(item.lines) wrap.innerHTML += `<p>${item.lines.join(' ')}</p>`;

  // Listen button
  const ttsText = item.audio || item.text || (item.lines? item.lines.join(' '): "");
  const listenBtn = document.createElement('button');
  listenBtn.className='secondary';
  listenBtn.textContent='🔊 Listen';
  listenBtn.addEventListener('click', ()=>speak(ttsText || "Listen."));
  wrap.appendChild(listenBtn);

  // Task renderer
  if(item.task){ wrap.appendChild(renderTask(item.task)); }

  // Nav
  const nav = document.createElement('div');
  nav.style.marginTop = '12px';
  nav.innerHTML = `
    <button class="secondary" id="prevBtn" ${i===0?'disabled':''}>Back</button>
    <button class="primary" id="nextBtn" ${i===items.length-1?'disabled':''}>Next</button>
  `;
  wrap.appendChild(nav);

  body.appendChild(wrap);

  S('#prevBtn')?.addEventListener('click', ()=>{ state.index=Math.max(0, state.index-1); renderCard(); });
  S('#nextBtn')?.addEventListener('click', ()=>{ state.index=Math.min(items.length-1, state.index+1); renderCard(); });
}

function sectionItems(sec){
  if(!sec) return [];
  // special shapes
  if(sec.items) return sec.items;
  return [];
}

function renderTask(task){
  const box = document.createElement('div');
  box.className='quiz';
  if(task.type==='tf'){
    box.innerHTML = `
      <div class="row"><span>Q.</span> <span style="flex:1">${task.prompt}</span>
        <select id="ans"><option>True</option><option>False</option></select>
      </div>
      <button class="primary" id="check">Check</button>
    `;
    setTimeout(()=> S('#check').addEventListener('click', ()=>{
      const v = S('#ans').value;
      alert(v===task.answer ? "✅ Correct!" : "❌ Try again.");
    }),0);
  }
  else if(task.type==='tf6'){
    box.innerHTML = task.pairs.map((p,i)=>`
      <div class="row"><span>${i+1}.</span> <span style="flex:1">${p[0]}</span>
        <select class="t6"><option>True</option><option>False</option></select>
      </div>
    `).join('') + `<button class="primary" id="check">Check</button>`;
    setTimeout(()=> S('#check').addEventListener('click', ()=>{
      const sels = SA('.t6');
      let ok=0;
      sels.forEach((s,i)=>{ if(s.value === (task.pairs[i][1]?'True':'False')) ok++; });
      alert(`You got ${ok} / ${sels.length}!`);
    }),0);
  }
  else if(task.type==='fill'){
    box.innerHTML = `
      <div class="row"><span>Q.</span> <span style="flex:1">${task.prompt}</span>
        <input id="ans" placeholder="type here">
      </div>
      <button class="primary" id="check">Check</button>
    `;
    setTimeout(()=> S('#check').addEventListener('click', ()=>{
      const v = S('#ans').value.trim().toLowerCase();
      const a = String(task.answer).trim().toLowerCase();
      alert(v===a ? "✅ Correct!" : `❌ Try again.`);
    }),0);
  }
  return box;
}

