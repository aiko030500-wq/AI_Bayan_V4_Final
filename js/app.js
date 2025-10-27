const state = { name: "", section: "" };
const EL = s => document.querySelector(s);
const playDing = () => EL('#ding')?.play();

// Splash → Login
setTimeout(() => {
  EL('#splash').classList.add('hidden');
  EL('#login').classList.remove('hidden');
}, 1000);

// Login
EL('#loginBtn').addEventListener('click', () => {
  const pin = EL('#pinInput').value.trim();
  const name = EL('#nameInput').value.trim() || "Student";
  if (pin === "7856") {
    playDing();
    state.name = name;
    EL('#userLabel').textContent = name;
    show('menu');
  } else {
    alert("Access code is incorrect. Try again.");
  }
});

// Navigation
EL('#backToLogin').addEventListener('click', () => show('login'));
EL('#backToMenu').addEventListener('click', () => show('menu'));

document.querySelectorAll('#menu .tile').forEach(btn => {
  btn.addEventListener('click', () => openSection(btn.dataset.target));
});

function show(id) {
  ['login', 'menu', 'section', 'splash'].forEach(x => EL('#' + x).classList.add('hidden'));
  EL('#' + id).classList.remove('hidden');
}

function openSection(key) {
  state.section = key;
  EL('#sectionTitle').textContent = titleFor(key);
  renderSection(key);
  show('section');
}

function titleFor(key) {
  return {
    phonetics: "Phonetics",
    grammar: "Grammar",
    reading: "Reading",
    writing: "Writing / Dictation",
    speaking: "Speaking",
    listening: "Listening",
    irregular: "Irregular Verbs",
    time: "Time",
    vocabulary: "Dictionary",
    numbers: "Numbers & Dates",
  }[key] || key;
}

function renderSection(key) {
  const body = EL('#sectionBody');
  body.innerHTML = "";

  const speak = text => {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-GB";
      speechSynthesis.speak(u);
    } catch (e) {
      console.log(e);
    }
  };

  if (key === "phonetics") {
    body.innerHTML = `
      <div class="card">
        <h3>Phonetics: Sounds & Diphthongs</h3>
        <p>Practice all English sounds, diphthongs, and silent letters.</p>
        <ul>
          <li>Short vowels – <b>a, e, i, o, u</b></li>
          <li>Long vowels – <b>name, see, ride</b></li>
          <li>Diphthongs – <b>rain, house, boy, near, hair</b></li>
          <li>Silent letters – <b>knife, write, lamb, night, walk, make</b></li>
        </ul>
        <button class="primary" id="ph-speak">🔊 Listen example</button>
      </div>`;
    EL("#ph-speak").addEventListener("click", () =>
      speak("A as in apple, B as in ball, C as in cat, D as in dog.")
    );
  }

  if (key === "grammar") {
    body.innerHTML = `
      <div class="card">
        <h3>Grammar Practice</h3>
        <p>Fill in the blanks with correct forms.</p>
        <div class="quiz">
          <div class="row"><span>1.</span> I ___ happy. <input data-a="am"></div>
          <div class="row"><span>2.</span> She ___ a pupil. <input data-a="is"></div>
          <div class="row"><span>3.</span> They ___ friends. <input data-a="are"></div>
          <button class="primary" id="checkGrammar">Check</button>
        </div>
      </div>`;
    EL("#checkGrammar").addEventListener("click", () => {
      let correct = 0;
      EL(".quiz").querySelectorAll("input").forEach(i => {
        if (i.value.trim().toLowerCase() === i.dataset.a) correct++;
      });
      alert(`You got ${correct}/3 correct!`);
    });
  }

  if (key === "irregular") {
    body.innerHTML = `
      <div class="card">
        <h3>Irregular Verbs (50)</h3>
        <table style="width:100%">
          <tr><th>Infinitive</th><th>Past Simple</th><th>Past Participle</th><th>Translation</th></tr>
          <tr><td>go</td><td>went</td><td>gone</td><td>идти</td></tr>
          <tr><td>see</td><td>saw</td><td>seen</td><td>видеть</td></tr>
          <tr><td>make</td><td>made</td><td>made</td><td>делать</td></tr>
          <tr><td>write</td><td>wrote</td><td>written</td><td>писать</td></tr>
          <tr><td>come</td><td>came</td><td>come</td><td>приходить</td></tr>
        </table>
      </div>`;
  }

  if (key === "time") {
    body.innerHTML = `
      <div class="card">
        <h3>Time Practice</h3>
        <p>Write the correct time in words:</p>
        <div class="quiz">
          <div class="row"><span>1.</span> 12:00 → <input placeholder="twelve o'clock"></div>
          <div class="row"><span>2.</span> 9:30 → <input placeholder="half past nine"></div>
          <div class="row"><span>3.</span> 11:45 → <input placeholder="quarter to twelve"></div>
        </div>
      </div>`;
  }

  if (key === "vocabulary") {
    body.innerHTML = `
      <div class="card">
        <h3>Vocabulary Game</h3>
        <p>Guess the word:</p>
        <p><b>It's a small animal that says "meow".</b></p>
        <input id="vocInput" placeholder="Your answer">
        <button class="primary" id="vocCheck">Check</button>
      </div>`;
    EL("#vocCheck").addEventListener("click", () => {
      const v = EL("#vocInput").value.trim().toLowerCase();
      if (v === "cat") alert("✅ Correct!");
      else alert("❌ Try again.");
    });
  }

  if (key === "numbers") {
    body.innerHTML = `
      <div class="card">
        <h3>Numbers and Dates</h3>
        <p>Practice numbers 1–100 and days of the week.</p>
        <p>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.</p>
      </div>`;
  }
}
