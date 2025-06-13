/* ── helpers ─────────────────────────────────────────────── */
const qs = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);

/* ── onboarding modal ───────────────────────────────────── */
window.addEventListener('load', () => qs('#onboarding').hidden = false);
qs('#startBtn').addEventListener('click', () => {
  qs('#onboarding').hidden = true;
  fetchRates();
});

/* ── drawer toggle ──────────────────────────────────────── */
function toggleDrawer(){
  qs('#drawer').classList.toggle('show');
  qs('#overlay').classList.toggle('show');
}
qs('#menuBtn').addEventListener('click', toggleDrawer);
qs('#overlay').addEventListener('click', toggleDrawer);

/* ── navigation buttons (drawer & bottom) ───────────────── */
function navigate(e){
  const id = e.currentTarget.dataset.target;
  const el = qs(`#${id}`);
  if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  if(qs('#drawer').classList.contains('show')) toggleDrawer();
}
qsa('[data-target]').forEach(btn => btn.addEventListener('click', navigate));

/* ── launch-demo button outside phone ───────────────────── */
qs('#launchDemoBtn').addEventListener('click', ()=>{
  qs('#app').scrollIntoView({behavior:'smooth'});
  fetchRates();
});

/* ── live FX data (with graceful fallback) ──────────────── */
function fetchRates(){
  fetch('https://api.exchangerate.host/latest?base=USD')
    .then(r=>r.json()).then(d=>{
      qs('#eurusdVal').textContent = (1 / d.rates.EUR).toFixed(4);
      qs('#usdjpyVal').textContent = d.rates.JPY.toFixed(2);
      qs('#gbpusdVal').textContent = (1 / d.rates.GBP).toFixed(4);
    })
    .catch(()=>{
      qs('#eurusdVal').textContent = '1.0843';
      qs('#usdjpyVal').textContent = '142.89';
      qs('#gbpusdVal').textContent = '1.2711';
    });
}
