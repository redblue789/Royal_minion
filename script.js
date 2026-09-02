/* ============ STATE ============ */
const state = {
  balance: 1000,
  lang: 'ua',
  sound: true,
  anim: true,
  confirm: false
};

/* ============ I18N ============ */
const dict = {
  ua: {
    nav_lobby:"Лобі", nav_about:"Про нас",
    hero_title:"Ласкаво просимо до ROYAL MINION",
    hero_sub:"Віртуальне казино без реальних грошей. Тільки банани, азарт і жовтий гумор.",
    hero_badge:"100% ВІРТУАЛЬНО · БЕЗ ДЕПОЗИТУ РЕАЛЬНИХ ГРОШЕЙ",
    card_poker_title:"Покер проти бота", card_poker_desc:"Драв-покер 5 карт проти хитрого міньйона-бота.",
    card_slots_title:"Слот 777", card_slots_desc:"Класичний ігровий автомат із трьома барабанами.",
    card_roulette_title:"Чорне — Червоне", card_roulette_desc:"Обери колір і крутни колесо фортуни.",
    card_racing_title:"Кінні перегони", card_racing_desc:"Онлайн ставки на спорт: обери коня з-поміж 6.",
    card_crash_title:"Краш", card_crash_desc:"Мультиплікатор росте — забери виграш вчасно!",
     card_range_title:"Міньйонський тир", card_range_desc:"Обери іграшковий бластер і влучай у міньйонів на дальній дистанції.",
    card_play:"Грати", back:"← Назад до лобі", bet_label:"Ставка:",
    poker_title:"Покер проти бота (драв-покер, 5 карт)", poker_bot_hand:"Рука бота",
    poker_your_hand:"Твоя рука (клікни картку, щоб залишити її)", poker_deal:"Роздати",
    poker_draw:"Замінити не вибрані", poker_bet_action:"Поставити ще й показати", poker_fold:"Скинути",
    poker_hint:"Онлайн-покер без депозиту — просто для розваги.",
    slots_title:"Слот-автомат 777", slots_spin:"Крутити", slots_hint:"Три однакові символи — виграш!",
    slots_paytable:"7️⃣7️⃣7️⃣ ×20 · 🍌🍌🍌 ×10 · 🍇🍇🍇 ×6 · 🔔🔔🔔 ×5 · будь-які 2 однакові ×1.5",
    roulette_title:"Рулетка: Чорне — Червоне", roulette_ready:"Готові?", roulette_red:"Червоне ×2",
    roulette_black:"Чорне ×2", roulette_spin:"Крутити колесо", roulette_hint:"Обери колір, зроби ставку і крути!",
    racing_title:"Кінні перегони — 6 коней", racing_start:"Старт перегонів", racing_hint:"Обери коня, натиснувши на його доріжку.",
    crash_title:"Краш", crash_start:"Старт", crash_cashout:"Забрати гроші",
    crash_hint:"Постав суму і забери виграш до того, як лінія впаде.",
    about_title:"Про ROYAL MINION",
    about_p1:"ROYAL MINION — це віртуальне розважальне казино, створене командою міньйонів, які трохи забагато з'їли бананів і вирішили побудувати щось жовте й веселе.",
    about_p2:"Усі гроші в казино — вигадані. Тут не можна поповнити рахунок реальними коштами, вивести кошти чи програти щось справжнє. Це майданчик для розваги та демонстрації ігрової механіки.",
    about_p3:"Баланс поповнюється віртуально в один клік у розділі балансу вгорі сторінки — введи будь-яку суму й натисни «Поповнити».",
    about_stat_games:"ігор у казино", about_stat_real:"реальних грошей всередині", about_stat_bananas:"бананів у резерві",
    footer_disclaimer:"Гра не пов'язана з реальними грошима та азартними іграми на реальні ставки. Умовний вік: 18+.",
    footer_team:"Команда Міньйони",
    settings_title:"⚙ Налаштування", settings_sound:"Звукові ефекти", settings_anim:"Плавні анімації",
    settings_confirm:"Підтвердження ставок", settings_lang:"Мова інтерфейсу", settings_reset:"Скинути баланс до 1000",
    settings_reset_btn:"Скинути", settings_footer:"ROYAL MINION зберігає ці налаштування лише під час поточного сеансу.",
    topup_title:"🍌 Поповнення балансу",
    topup_desc:"Це віртуальний баланс. Введи будь-яку суму, щоб миттєво поповнити рахунок для гри — без реальних грошей.",
    topup_btn:"Поповнити"
  },
  en: {
    nav_lobby:"Lobby", nav_about:"About Us",
    hero_title:"Welcome to ROYAL MINION",
    hero_sub:"A virtual casino with no real money. Just bananas, thrills, and yellow humor.",
    hero_badge:"100% VIRTUAL · NO REAL-MONEY DEPOSIT",
    card_poker_title:"Poker vs Bot", card_poker_desc:"5-card draw poker against a sneaky minion bot.",
    card_slots_title:"Slot 777", card_slots_desc:"A classic 3-reel slot machine.",
    card_roulette_title:"Red — Black", card_roulette_desc:"Pick a color and spin the wheel of fortune.",
    card_racing_title:"Horse Racing", card_racing_desc:"Sports betting: pick one of 6 horses.",
    card_crash_title:"Crash", card_crash_desc:"The multiplier climbs — cash out in time!",
     card_range_title:"Minion Range", card_range_desc:"Choose a toy blaster and hit minions from long range.",
    card_play:"Play", back:"← Back to lobby", bet_label:"Bet:",
    poker_title:"Poker vs Bot (5-card draw)", poker_bot_hand:"Bot's hand",
    poker_your_hand:"Your hand (click a card to hold it)", poker_deal:"Deal",
    poker_draw:"Replace unheld cards", poker_bet_action:"Bet & show", poker_fold:"Fold",
    poker_hint:"Offline poker, no deposit — just for fun.",
    slots_title:"Slot Machine 777", slots_spin:"Spin", slots_hint:"Three matching symbols win!",
    slots_paytable:"7️⃣7️⃣7️⃣ ×20 · 🍌🍌🍌 ×10 · 🍇🍇🍇 ×6 · 🔔🔔🔔 ×5 · any 2 matching ×1.5",
    roulette_title:"Roulette: Red — Black", roulette_ready:"Ready?", roulette_red:"Red ×2",
    roulette_black:"Black ×2", roulette_spin:"Spin the wheel", roulette_hint:"Pick a color, place a bet, spin!",
    racing_title:"Horse Racing — 6 horses", racing_start:"Start the race", racing_hint:"Pick a horse by clicking its lane.",
    crash_title:"Crash", crash_start:"Start", crash_cashout:"Cash out",
    crash_hint:"Place a bet and cash out before the line crashes.",
    about_title:"About ROYAL MINION",
    about_p1:"ROYAL MINION is a virtual entertainment casino built by a team of minions who ate a few too many bananas and decided to build something yellow and fun.",
    about_p2:"All money in the casino is fictional. You cannot deposit real funds, withdraw funds, or lose anything real. This is a playground for fun and to demo game mechanics.",
    about_p3:"Top up your balance virtually in one click from the balance section at the top — enter any amount and hit 'Top up'.",
    about_stat_games:"games in the casino", about_stat_real:"real money inside", about_stat_bananas:"bananas in reserve",
    footer_disclaimer:"Not affiliated with real-money gambling. Fictional age rating: 18+.",
    footer_team:"Team Minions",
    settings_title:"⚙ Settings", settings_sound:"Sound effects", settings_anim:"Smooth animations",
    settings_confirm:"Confirm bets", settings_lang:"Interface language", settings_reset:"Reset balance to 1000",
    settings_reset_btn:"Reset", settings_footer:"ROYAL MINION keeps these settings only for the current session.",
    topup_title:"🍌 Top Up Balance",
    topup_desc:"This is a virtual balance. Enter any amount to instantly top up your account for play — no real money involved.",
    topup_btn:"Top up"
  }
};

function applyLang(){
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[state.lang][key]) el.textContent = dict[state.lang][key];
  });
  document.getElementById('langUA').classList.toggle('active', state.lang==='ua');
  document.getElementById('langEN').classList.toggle('active', state.lang==='en');
  document.getElementById('langUA2').classList.toggle('active', state.lang==='ua');
  document.getElementById('langEN2').classList.toggle('active', state.lang==='en');
}
function setLang(l){ state.lang = l; applyLang(); }
document.getElementById('langUA').onclick = ()=>setLang('ua');
document.getElementById('langEN').onclick = ()=>setLang('en');
document.getElementById('langUA2').onclick = ()=>setLang('ua');
document.getElementById('langEN2').onclick = ()=>setLang('en');

/* ============ NAVIGATION ============ */
function showScreen(name){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active', b.dataset.target===name));
  window.scrollTo({top:0, behavior: state.anim ? 'smooth':'auto'});
}
document.querySelectorAll('[data-target]').forEach(el=>{
  el.addEventListener('click', ()=> showScreen(el.dataset.target));
});

/* ============ BALANCE ============ */
function updateBalance(){
  document.getElementById('balanceDisplay').textContent = Math.round(state.balance).toLocaleString('uk-UA') + ' 🍌';
}
function canBet(amount){
  if(amount<=0 || isNaN(amount)) return false;
  if(amount>state.balance){ return false; }
  return true;
}
updateBalance();

function quickBet(inputId, add){
  const el = document.getElementById(inputId);
  el.value = Math.max(5, (parseInt(el.value)||0) + add);
}

/* ============ MODALS ============ */
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.overlay').forEach(ov=>{
  ov.addEventListener('click', e=>{ if(e.target===ov) ov.classList.remove('open'); });
});
document.getElementById('openTopup').onclick = ()=> openModal('topupOverlay');
document.getElementById('openSettings').onclick = ()=> openModal('settingsOverlay');

function doTopup(){
  const amt = parseFloat(document.getElementById('topupAmount').value);
  const msg = document.getElementById('topupMsg');
  if(!amt || amt<=0){ msg.textContent = state.lang==='ua' ? 'Введи коректну суму.' : 'Enter a valid amount.'; msg.className='msg lose'; return; }
  state.balance += amt;
  updateBalance();
  msg.textContent = (state.lang==='ua' ? 'Баланс поповнено на ' : 'Balance topped up by ') + amt + ' 🍌';
  msg.className='msg win';
  document.getElementById('topupAmount').value='';
  setTimeout(()=>closeModal('topupOverlay'), 900);
}

/* ============ SETTINGS ============ */
document.getElementById('soundToggle').onchange = e=> state.sound = e.target.checked;
document.getElementById('animToggle').onchange = e=>{
  state.anim = e.target.checked;
  document.body.style.setProperty('--tspeed', state.anim ? '1' : '0');
};
document.getElementById('confirmToggle').onchange = e=> state.confirm = e.target.checked;
function resetBalance(){ state.balance = 1000; updateBalance(); }

function confirmBet(amount){
  if(!state.confirm) return true;
  const q = state.lang==='ua' ? `Підтвердити ставку ${amount} 🍌?` : `Confirm bet of ${amount} 🍌?`;
  return confirm(q);
}

/* ============ SLOTS ============ */
const slotSymbols = ['🍌','🍇','🔔','⭐','7️⃣'];
const slotWeights = {'🍌':30,'🍇':25,'🔔':20,'⭐':15,'7️⃣':10};
function weightedSymbol(){
  const total = Object.values(slotWeights).reduce((a,b)=>a+b,0);
  let r = Math.random()*total;
  for(const s of slotSymbols){ r -= slotWeights[s]; if(r<=0) return s; }
  return slotSymbols[0];
}
function spinSlots(){
  const betEl = document.getElementById('slotsBet');
  const bet = parseFloat(betEl.value);
  const msg = document.getElementById('slotsMsg');
  if(!canBet(bet)){ msg.textContent = state.lang==='ua' ? 'Недостатньо коштів або невірна ставка.' : 'Insufficient funds or invalid bet.'; msg.className='msg lose'; return; }
  if(!confirmBet(bet)) return;
  state.balance -= bet; updateBalance();
  const reels = [0,1,2].map(i=>document.getElementById('reel'+i));
  reels.forEach(r=>r.classList.add('spinning'));
  document.getElementById('slotsSpin').disabled = true;
  const results = [weightedSymbol(), weightedSymbol(), weightedSymbol()];
  reels.forEach((r,i)=>{
    setTimeout(()=>{
      r.classList.remove('spinning');
      r.querySelector('span').textContent = results[i];
    }, 500 + i*350);
  });
  setTimeout(()=>{
    let win = 0;
    if(results[0]===results[1] && results[1]===results[2]){
      const mult = results[0]==='7️⃣'?20:results[0]==='🍌'?10:results[0]==='🍇'?6:results[0]==='🔔'?5:4;
      win = bet*mult;
    } else if(results[0]===results[1] || results[1]===results[2] || results[0]===results[2]){
      win = bet*1.5;
    }
    if(win>0){
      state.balance += win; updateBalance();
      msg.textContent = (state.lang==='ua'?'Виграш! +':'You won! +') + Math.round(win) + ' 🍌';
      msg.className='msg win';
    } else {
      msg.textContent = state.lang==='ua' ? 'Не пощастило. Спробуй ще!' : 'No luck this time. Try again!';
      msg.className='msg lose';
    }
    document.getElementById('slotsSpin').disabled = false;
  }, 500 + 2*350 + 200);
}

/* ============ ROULETTE ============ */
let rouletteColor = null;
function chooseColor(c){
  rouletteColor = c;
  document.getElementById('chooseRed').classList.toggle('selected', c==='red');
  document.getElementById('chooseBlack').classList.toggle('selected', c==='black');
  document.getElementById('spinRoulette').disabled = false;
}
let rouletteSpinning=false;
function spinRoulette(){
  if(rouletteSpinning) return;
  const bet = parseFloat(document.getElementById('rouletteBet').value);
  const msg = document.getElementById('rouletteMsg');
  if(!rouletteColor){ msg.textContent = state.lang==='ua' ? 'Спочатку обери колір.' : 'Pick a color first.'; msg.className='msg lose'; return; }
  if(!canBet(bet)){ msg.textContent = state.lang==='ua' ? 'Недостатньо коштів або невірна ставка.' : 'Insufficient funds or invalid bet.'; msg.className='msg lose'; return; }
  if(!confirmBet(bet)) return;
  rouletteSpinning = true;
  state.balance -= bet; updateBalance();
  document.getElementById('spinRoulette').disabled = true;
  const wheel = document.getElementById('wheel');
  const center = document.getElementById('wheelCenter');
  // 0-49 red-ish half, 50-99 black-ish half plus small green zero chance
  const roll = Math.random();
  let outcome, label;
  if(roll < 0.045){ outcome='green'; label='0'; }
  else if(roll < 0.52){ outcome='red'; label = state.lang==='ua'?'Червоне':'Red'; }
  else { outcome='black'; label = state.lang==='ua'?'Чорне':'Black'; }
  const extraSpins = 5 + Math.floor(Math.random()*3);
  const targetDeg = extraSpins*360 + (outcome==='red'? 90 : outcome==='black'? 270 : 0);
  wheel.style.transform = `rotate(${targetDeg}deg)`;
  center.textContent = '...';
  setTimeout(()=>{
    center.textContent = label;
    let win = 0;
    if(outcome === rouletteColor) win = bet*2;
    else if(outcome==='green') win = bet*5;
    if(win>0){
      state.balance += win; updateBalance();
      msg.textContent = (state.lang==='ua'?'Випало: ':'Result: ') + label + (state.lang==='ua'?'. Виграш +':'. You won +') + Math.round(win) + ' 🍌';
      msg.className='msg win';
    } else {
      msg.textContent = (state.lang==='ua'?'Випало: ':'Result: ') + label + (state.lang==='ua'?'. Цього разу не пощастило.':'. No luck this time.');
      msg.className='msg lose';
    }
    document.getElementById('spinRoulette').disabled = false;
    rouletteSpinning = false;
  }, 3700);
}

/* ============ RACING ============ */
const horseEmojis = ['🐴','🐎','🦄','🐴','🐎','🦓'];
let selectedHorse = null;
let raceOdds = [];
let raceRunning = false;

function buildTrack(){
  const track = document.getElementById('track');
  track.innerHTML='';
  raceOdds = shuffle([2,3,4,5,6,8]);
  for(let i=0;i<6;i++){
    const lane = document.createElement('div');
    lane.className='lane';
    lane.dataset.idx = i;
    lane.innerHTML = `<div class="lane-label">#${i+1}</div><div class="lane-odds">×${raceOdds[i]}</div><div class="finish"></div><div class="horse" id="horse${i}" style="left:6px;">${horseEmojis[i]}</div>`;
    lane.addEventListener('click', ()=>{
      if(raceRunning) return;
      selectedHorse = i;
      document.querySelectorAll('.lane').forEach(l=>l.classList.remove('selected'));
      lane.classList.add('selected');
      document.getElementById('startRace').disabled = false;
    });
    track.appendChild(lane);
  }
}
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
buildTrack();

function startRace(){
  if(raceRunning) return;
  const bet = parseFloat(document.getElementById('racingBet').value);
  const msg = document.getElementById('racingMsg');
  if(selectedHorse===null){ msg.textContent = state.lang==='ua' ? 'Обери коня.' : 'Pick a horse.'; msg.className='msg lose'; return; }
  if(!canBet(bet)){ msg.textContent = state.lang==='ua' ? 'Недостатньо коштів або невірна ставка.' : 'Insufficient funds or invalid bet.'; msg.className='msg lose'; return; }
  if(!confirmBet(bet)) return;
  raceRunning = true;
  state.balance -= bet; updateBalance();
  document.getElementById('startRace').disabled = true;
  msg.textContent = state.lang==='ua' ? 'Перегони почались!' : 'Race started!';
  msg.className='msg info';

  const strengths = raceOdds.map(o=> (10 - o) + 2);
  const progress = new Array(6).fill(0);
  const laneWidth = document.querySelector('.lane').offsetWidth - 40;
  const interval = setInterval(()=>{
    let winner = -1;
    for(let i=0;i<6;i++){
      progress[i] += strengths[i]*Math.random()*0.9 + 0.4;
      const horseEl = document.getElementById('horse'+i);
      const pct = Math.min(progress[i], 100);
      horseEl.style.left = (6 + (pct/100)*laneWidth) + 'px';
      if(progress[i] >= 100 && winner===-1) winner = i;
    }
    if(winner !== -1){
      clearInterval(interval);
      raceRunning = false;
      document.getElementById('startRace').disabled = false;
      if(winner === selectedHorse){
        const win = bet*raceOdds[selectedHorse];
        state.balance += win; updateBalance();
        msg.textContent = (state.lang==='ua'?`Переміг кінь #${winner+1}! Ти вгадав. Виграш +`:`Horse #${winner+1} won! You guessed right. +`) + Math.round(win) + ' 🍌';
        msg.className='msg win';
      } else {
        msg.textContent = (state.lang==='ua'?`Переміг кінь #${winner+1}. Твій кінь програв.`:`Horse #${winner+1} won. Your horse lost.`);
        msg.className='msg lose';
      }
      setTimeout(buildTrack, 1600);
      selectedHorse = null;
    }
  }, 90);
}

/* ============ CRASH ============ */
let crashRunning = false;
let crashMultiplier = 1.0;
let crashPoint = 1.0;
let crashInterval = null;
let crashStartTime = 0;
let crashBetAmount = 0;
const crashCanvas = document.getElementById('crashCanvas');
const cctx = crashCanvas.getContext('2d');
function resizeCrashCanvas(){
  crashCanvas.width = crashCanvas.clientWidth;
  crashCanvas.height = crashCanvas.clientHeight;
}
window.addEventListener('resize', resizeCrashCanvas);
resizeCrashCanvas();

function genCrashPoint(){
  const r = Math.random();
  if(r < 0.03) return 1.00;
  let point = 0.97/(1-r);
  return Math.min(point, 40);
}
function drawCrashLine(points){
  resizeCrashCanvas();
  cctx.clearRect(0,0,crashCanvas.width, crashCanvas.height);
  const w = crashCanvas.width, h = crashCanvas.height;
  cctx.strokeStyle = '#FFCC00';
  cctx.lineWidth = 3;
  cctx.beginPath();
  points.forEach((p,i)=>{
    const x = (p.t / Math.max(points[points.length-1].t, 1)) * (w*0.9) + w*0.05;
    const y = h - (Math.min(p.m,10)/10) * (h*0.85) - h*0.05;
    if(i===0) cctx.moveTo(x,y); else cctx.lineTo(x,y);
  });
  cctx.stroke();
}
function crashStart(){
  if(crashRunning) return;
  const bet = parseFloat(document.getElementById('crashBet').value);
  const msg = document.getElementById('crashMsg');
  if(!canBet(bet)){ msg.textContent = state.lang==='ua' ? 'Недостатньо коштів або невірна ставка.' : 'Insufficient funds or invalid bet.'; msg.className='msg lose'; return; }
  if(!confirmBet(bet)) return;
  crashBetAmount = bet;
  state.balance -= bet; updateBalance();
  crashRunning = true;
  crashMultiplier = 1.0;
  crashPoint = genCrashPoint();
  crashStartTime = Date.now();
  document.getElementById('crashStart').disabled = true;
  document.getElementById('crashCashout').disabled = false;
  const display = document.getElementById('crashMultDisplay');
  display.classList.remove('crashed');
  msg.textContent = state.lang==='ua' ? 'Летимо! Забери гроші вчасно.' : "We're flying! Cash out in time.";
  msg.className='msg info';
  const points = [{t:0,m:1}];
  crashInterval = setInterval(()=>{
    const elapsed = (Date.now()-crashStartTime)/1000;
    crashMultiplier = 1 + elapsed*elapsed*0.18 + elapsed*0.15;
    points.push({t:elapsed, m:crashMultiplier});
    display.textContent = crashMultiplier.toFixed(2)+'×';
    drawCrashLine(points);
    if(crashMultiplier >= crashPoint){
      clearInterval(crashInterval);
      crashRunning = false;
      display.textContent = (state.lang==='ua'?'КРАШ! ':'CRASHED! ') + crashPoint.toFixed(2)+'×';
      display.classList.add('crashed');
      document.getElementById('crashStart').disabled = false;
      document.getElementById('crashCashout').disabled = true;
      msg.textContent = state.lang==='ua' ? 'Не встиг забрати — ставка згоріла.' : "Didn't cash out in time — bet lost.";
      msg.className='msg lose';
    }
  }, 60);
}
function crashCashout(){
  if(!crashRunning) return;
  clearInterval(crashInterval);
  crashRunning = false;
  const win = crashBetAmount * crashMultiplier;
  state.balance += win; updateBalance();
  document.getElementById('crashStart').disabled = false;
  document.getElementById('crashCashout').disabled = true;
  const msg = document.getElementById('crashMsg');
  msg.textContent = (state.lang==='ua'?'Забрано на ':'Cashed out at ') + crashMultiplier.toFixed(2) + '× → +' + Math.round(win) + ' 🍌';
  msg.className='msg win';
}

/* ============ POKER (5-card draw vs bot) ============ */
const SUITS = ['♠','♥','♦','♣'];
const RANKS = [{r:'2',v:2},{r:'3',v:3},{r:'4',v:4},{r:'5',v:5},{r:'6',v:6},{r:'7',v:7},{r:'8',v:8},{r:'9',v:9},{r:'10',v:10},{r:'J',v:11},{r:'Q',v:12},{r:'K',v:13},{r:'A',v:14}];
function freshDeck(){
  const deck=[];
  for(const s of SUITS) for(const r of RANKS) deck.push({suit:s, rank:r.r, value:r.v});
  return shuffle(deck);
}
let pokerDeck=[], playerCards=[], botCards=[], heldFlags=[false,false,false,false,false], pokerBetAmt=0, pokerStage='idle';

function cardEl(card, faceDown, clickable, selected){
  const div = document.createElement('div');
  div.className = 'card' + (['♥','♦'].includes(card && card.suit) ? ' red-suit':'') + (faceDown?' back':'') + (selected?' selected':'');
  if(!faceDown) div.textContent = card.rank + card.suit;
  if(clickable) div.style.cursor='pointer';
  return div;
}
function renderPoker(){
  const ph = document.getElementById('playerHand'); ph.innerHTML='';
  const bh = document.getElementById('botHand'); bh.innerHTML='';
  playerCards.forEach((c,i)=>{
    const el = cardEl(c, false, pokerStage==='holding', heldFlags[i]);
    if(pokerStage==='holding'){
      el.addEventListener('click', ()=>{ heldFlags[i]=!heldFlags[i]; renderPoker(); });
    }
    ph.appendChild(el);
  });
  botCards.forEach((c)=>{
    bh.appendChild(cardEl(c, pokerStage!=='showdown', false, false));
  });
}
function evaluateHand(cards){
  const ranks = cards.map(c=>c.value).sort((a,b)=>b-a);
  const suits = cards.map(c=>c.suit);
  const counts = {};
  ranks.forEach(r=> counts[r]=(counts[r]||0)+1);
  const grouped = Object.entries(counts).map(([r,c])=>({r:parseInt(r),c})).sort((a,b)=> b.c-a.c || b.r-a.r);
  const isFlush = suits.every(s=>s===suits[0]);
  const uniq = [...new Set(ranks)];
  let isStraight=false, straightHigh=0;
  if(uniq.length===5){
    if(uniq[0]-uniq[4]===4){ isStraight=true; straightHigh=uniq[0]; }
    else if(uniq[0]===14 && uniq[1]===5 && uniq[2]===4 && uniq[3]===3 && uniq[4]===2){ isStraight=true; straightHigh=5; }
  }
  const pattern = grouped.map(g=>g.c).join('');
  let rankValue, name;
  if(isStraight && isFlush){ rankValue=8; name='Стрит-флеш'; }
  else if(pattern[0]==='4'){ rankValue=7; name='Каре'; }
  else if(pattern==='32'){ rankValue=6; name='Фулл-хаус'; }
  else if(isFlush){ rankValue=5; name='Флеш'; }
  else if(isStraight){ rankValue=4; name='Стрит'; }
  else if(pattern[0]==='3'){ rankValue=3; name='Трійка'; }
  else if(pattern==='221'){ rankValue=2; name='Дві пари'; }
  else if(pattern[0]==='2'){ rankValue=1; name='Пара'; }
  else { rankValue=0; name='Старша карта'; }
  const tiebreak = isStraight ? [straightHigh] : grouped.map(g=>g.r);
  return {rankValue, name, tiebreak};
}
function compareHands(a,b){
  if(a.rankValue!==b.rankValue) return a.rankValue - b.rankValue;
  for(let i=0;i<Math.max(a.tiebreak.length,b.tiebreak.length);i++){
    const av=a.tiebreak[i]||0, bv=b.tiebreak[i]||0;
    if(av!==bv) return av-bv;
  }
  return 0;
}
function pokerDeal(){
  const bet = parseFloat(document.getElementById('pokerBet').value);
  const msg = document.getElementById('pokerMsg');
  if(!canBet(bet)){ msg.textContent = state.lang==='ua' ? 'Недостатньо коштів або невірна ставка.' : 'Insufficient funds or invalid bet.'; msg.className='msg lose'; return; }
  if(!confirmBet(bet)) return;
  pokerBetAmt = bet;
  state.balance -= bet; updateBalance();
  pokerDeck = freshDeck();
  playerCards = pokerDeck.splice(0,5);
  botCards = pokerDeck.splice(0,5);
  heldFlags = [false,false,false,false,false];
  pokerStage = 'holding';
  renderPoker();
  document.getElementById('pokerDeal').disabled = true;
  document.getElementById('pokerDraw').disabled = false;
  document.getElementById('pokerBetBtn').disabled = true;
  document.getElementById('pokerFold').disabled = false;
  msg.textContent = state.lang==='ua' ? 'Обери карти, які хочеш залишити, потім заміни решту.' : 'Pick the cards to hold, then replace the rest.';
  msg.className = 'msg info';
}
function pokerDraw(){
  for(let i=0;i<5;i++){
    if(!heldFlags[i]) playerCards[i] = pokerDeck.shift();
  }
  // simple bot draw: keep pairs/high cards, redraw rest
  const botCounts = {};
  botCards.forEach(c=> botCounts[c.value]=(botCounts[c.value]||0)+1);
  for(let i=0;i<5;i++){
    const keep = botCounts[botCards[i].value] >= 2 || botCards[i].value >= 12;
    if(!keep) botCards[i] = pokerDeck.shift();
  }
  pokerStage = 'drawn';
  renderPoker();
  document.getElementById('pokerDraw').disabled = true;
  document.getElementById('pokerBetBtn').disabled = false;
  document.getElementById('pokerMsg').textContent = state.lang==='ua' ? 'Постав ще стільки ж, щоб побачити карти бота, або скинь карти.' : 'Match the bet to see the bot\'s cards, or fold.';
}
function pokerBetAction(){
  if(!canBet(pokerBetAmt)){
    document.getElementById('pokerMsg').textContent = state.lang==='ua' ? 'Недостатньо коштів для другої ставки.' : 'Not enough funds to match the bet.';
    document.getElementById('pokerMsg').className='msg lose';
    return;
  }
  state.balance -= pokerBetAmt; updateBalance();
  pokerStage = 'showdown';
  renderPoker();
  const p = evaluateHand(playerCards);
  const b = evaluateHand(botCards);
  const cmp = compareHands(p,b);
  const msg = document.getElementById('pokerMsg');
  const pot = pokerBetAmt*4;
  if(cmp > 0){
    state.balance += pot; updateBalance();
    msg.textContent = (state.lang==='ua'?`Твоя рука (${p.name}) сильніша за бота (${b.name}). Виграш +`:`Your hand (${p.name}) beats the bot's (${b.name}). You won +`) + pot + ' 🍌';
    msg.className='msg win';
  } else if(cmp < 0){
    msg.textContent = (state.lang==='ua'?`Рука бота (${b.name}) сильніша за твою (${p.name}). Ти програв.`:`The bot's hand (${b.name}) beats yours (${p.name}). You lost.`);
    msg.className='msg lose';
  } else {
    state.balance += pot/2; updateBalance();
    msg.textContent = state.lang==='ua' ? 'Нічия! Половину ставки повернено.' : "It's a tie! Half your bet is returned.";
    msg.className='msg info';
  }
  finishPokerRound();
}
function pokerFold(){
  document.getElementById('pokerMsg').textContent = state.lang==='ua' ? 'Ти скинув карти й втратив ставку.' : 'You folded and lost the bet.';
  document.getElementById('pokerMsg').className='msg lose';
  pokerStage = 'showdown';
  renderPoker();
  finishPokerRound();
}
function finishPokerRound(){
  document.getElementById('pokerDeal').disabled = false;
  document.getElementById('pokerDraw').disabled = true;
  document.getElementById('pokerBetBtn').disabled = true;
  document.getElementById('pokerFold').disabled = true;
  pokerStage = 'idle';
}


/* ============ MINION RANGE ============ */
const rangeState={gun:null,round:1,shots:5,hits:0,running:false,target:null};
const gunConfig={starter:{size:1,move:850},rapid:{size:.92,move:700},power:{size:1.14,move:980}};
const rangeArena=document.getElementById('rangeArena');
function rangePlaceTarget(){
  if(rangeState.target) rangeState.target.remove();
  const t=document.createElement('div'); t.className='minion-target'; t.textContent='🍌'; t.setAttribute('aria-label','Міньйон з бананом');
  const cfg=gunConfig[rangeState.gun]; const base=76*cfg.size; t.style.width=base+'px'; t.style.height=(104*cfg.size)+'px';
  const pad=10, maxX=Math.max(0,rangeArena.clientWidth-base-pad), maxY=Math.max(0,rangeArena.clientHeight-130);
  t.style.left=(pad+Math.random()*maxX)+'px'; t.style.top=(20+Math.random()*Math.max(20,maxY))+'px';
  t.addEventListener('click',e=>{e.stopPropagation(); rangeHitTarget();}); rangeArena.appendChild(t); rangeState.target=t;
}
function updateRangeHud(){document.getElementById('rangeRound').textContent=rangeState.round;document.getElementById('rangeShots').textContent=rangeState.shots+' / 5';document.getElementById('rangeScore').textContent=rangeState.hits;}
function rangeHitTarget(){if(!rangeState.running||!rangeState.target)return; rangeState.hits++; rangeState.shots--; rangeState.target.classList.add('hit'); updateRangeHud(); setTimeout(()=>{if(rangeState.running) rangePlaceTarget();},130); rangeAfterShot(true);}
function rangeMiss(){if(!rangeState.running)return; rangeState.shots--; updateRangeHud(); rangeAfterShot(false);}
function rangeAfterShot(hit){
  const msg=document.getElementById('rangeMsg'); msg.textContent=hit?(state.lang==='ua'?'Влучив! 🎯':'Hit! 🎯'):(state.lang==='ua'?'Промах!':'Miss!'); msg.className=hit?'msg win':'msg lose';
  if(rangeState.shots<=0){rangeState.running=false; if(rangeState.target) rangeState.target.remove(); const passed=rangeState.hits>=Math.max(1,Math.ceil((6-rangeState.round*.3))); const reward=rangeState.hits*(10+rangeState.round*3); if(passed){state.balance+=reward;updateBalance();} msg.textContent=passed?(state.lang==='ua'?`Раунд ${rangeState.round} пройден! +${reward} 🍌`:`Round ${rangeState.round} cleared! +${reward} 🍌`):(state.lang==='ua'?`Раунд завершено. Влучань: ${rangeState.hits}/5.`:`Round over. Hits: ${rangeState.hits}/5.`); msg.className=passed?'msg win':'msg lose'; document.getElementById('rangeStart').disabled=false; document.getElementById('rangeStart').textContent=state.lang==='ua'?'Наступний раунд':'Next round';}
}
function rangeStartRound(){if(!rangeState.gun)return; rangeState.running=true;rangeState.shots=5;document.getElementById('rangeStart').disabled=true;document.getElementById('rangeStart').textContent=state.lang==='ua'?'Раунд триває…':'Round running…';document.getElementById('rangeMsg').textContent=state.lang==='ua'?`Раунд ${rangeState.round}: 5 пострілів!`:`Round ${rangeState.round}: 5 shots!`;document.getElementById('rangeMsg').className='msg info';updateRangeHud();rangePlaceTarget();}
document.querySelectorAll('.gun-card').forEach(card=>card.addEventListener('click',()=>{document.querySelectorAll('.gun-card').forEach(c=>c.classList.remove('selected'));card.classList.add('selected');rangeState.gun=card.dataset.gun;document.getElementById('rangeStart').disabled=false;}));
document.getElementById('rangeStart').addEventListener('click',()=>{if(!rangeState.running&&rangeState.shots<=0){rangeState.round++;rangeState.hits=0;}rangeStartRound();});
document.getElementById('rangeArena').addEventListener('click',e=>{if(!rangeState.running)return;const r=rangeArena.getBoundingClientRect();const cross=document.getElementById('rangeCrosshair');cross.style.left=(e.clientX-r.left)+'px';cross.style.top=(e.clientY-r.top)+'px';cross.style.display='block';rangeMiss();});

/* init */
applyLang();