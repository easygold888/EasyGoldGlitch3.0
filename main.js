const metrics = [
  ['Uptime', '99.982%'],
  ['Engine Nodes', '148'],
  ['Monthly Signals', '12,480'],
  ['Latency', '41ms'],
  ['Win Ratio', '68.4%'],
  ['Protected Capital', '$214M'],
];

const pricing = [
  { name: 'Demo Access', price: 'Gratis', body: 'Preview operativo + sesión de calibración.' },
  { name: 'Full Access', price: '$2,400', body: 'Motor completo, alertas, ejecución y soporte prioritario.' },
];

const faqs = [
  ['¿Cuánto tarda el onboarding?', 'Entre 24 y 72 horas según perfil y volumen.'],
  ['¿Puedo empezar solo con demo?', 'Sí. El demo está diseñado para validar ajuste y confianza antes de escalar.'],
  ['¿Cómo controlan el riesgo?', 'Régimen dinámico, límites por sesión y protección de drawdown automatizada.'],
];

const app = document.getElementById('app');
document.body.classList.add('motion-ready');

app.innerHTML = `
<header class="top-nav glass" id="topNav">
  <div class="brand"><span class="dot"></span><strong>EASYGOLD XAU ENGINE</strong></div>
  <nav>
    <a href="#reasons">Razones</a>
    <a href="#demo">Demo</a>
    <a href="#pricing">Pricing</a>
    <button class="btn btn-outline" data-open-modal>Comprar acceso</button>
  </nav>
</header>

<main>
  <section class="hero" id="hero">
    <canvas id="heroCanvas" aria-hidden="true"></canvas>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <p class="eyebrow mono">XAU / QUANT EXTRACTION PROTOCOL</p>
      <h1>La máquina de extracción para capital serio.</h1>
      <p class="lead">Sistema premium para traders e inversionistas que exigen señal, ejecución y control de riesgo institucional.</p>
      <div class="hero-actions">
        <button class="btn btn-gold" data-scroll="#demo">Descargar demo</button>
        <button class="btn btn-outline" data-open-modal>Full access</button>
      </div>
      <div class="pill-row mono">
        <span>LIVE TERMINAL</span><span>PROTECTED RISK</span><span>INSTITUTIONAL GRADE</span>
      </div>
    </div>
  </section>

  <section class="ticker mono"><div id="tickerTrack"></div></section>

  <section class="scale-statement container sticky-block">
    <p class="mini-label">Scale Statement</p>
    <h2 data-reveal>Operamos como una infraestructura, no como una promesa.</h2>
  </section>

  <section class="manifesto container">
    <p class="mini-label">Manifesto</p>
    <p class="manifesto-text" id="manifestoText">Convertimos ruido de mercado en decisiones accionables, con disciplina visual, ejecución fría y narrativa de confianza para que el usuario sienta control antes de invertir.</p>
    <button class="btn btn-gold" data-scroll="#demo">Quiero ver el demo</button>
  </section>

  <section class="reasons container" id="reasons">
    <article class="glass reveal"><h3>Señales de alta convicción</h3><p>Lectura multi-timeframe con filtros de régimen y sesgo direccional validado.</p></article>
    <article class="glass reveal"><h3>Riesgo con disciplina</h3><p>Límites automáticos por sesión, instrumento y volatilidad intradía.</p></article>
    <article class="glass reveal"><h3>Interfaz de decisión</h3><p>Datos críticos visibles en menos de 3 segundos para ejecutar sin fricción.</p></article>
  </section>

  <section class="marquee mono"><div>GOLD • EXTRACTION • LATENCY • PRECISION • CAPITAL • ENGINE • EXECUTION •</div></section>

  <section class="stats container sticky-block" id="stats"></section>

  <section class="demo container" id="demo">
    <div class="demo-copy reveal">
      <p class="mini-label">Demo</p>
      <h2>Ve el sistema correr con tus parámetros.</h2>
      <p>El demo abre con terminal activa, estado de riesgo y comparativa de escenarios para facilitar compra informada.</p>
      <div class="hero-actions">
        <button class="btn btn-gold" data-open-modal>Descargar demo</button>
      </div>
    </div>
    <aside class="terminal glass reveal" id="terminalPanel">
      <div class="mono line" id="terminalLine">Booting...</div>
      <div class="progress"><span id="demoProgress"></span></div>
      <div class="badges mono"><span>XAU/USD ON</span><span>RISK 0.8%</span><span>NODE 14</span></div>
    </aside>
  </section>

  <section class="marquee mono alt"><div>DOWNLOAD DEMO • CONFIRM EDGE • SCALE SAFELY •</div></section>

  <section class="backtest container reveal">
    <p class="mini-label">Backtest</p>
    <h2>36 meses auditados · DD máximo 8.1% · Sharpe 2.9</h2>
  </section>

  <section class="steps container">
    ${['Diagnóstico','Setup','Activación','Optimización'].map((s,i)=>`<article class="step reveal"><span class="mono">0${i+1}</span><h3>${s}</h3><p>Secuencia orientada a reducir fricción y acelerar adopción.</p></article>`).join('')}
  </section>

  <section class="pricing container" id="pricing">
    ${pricing.map(p=>`<article class="glass reveal"><p class="mini-label">${p.name}</p><h3>${p.price}</h3><p>${p.body}</p><button class="btn btn-outline" data-open-modal>Seleccionar</button></article>`).join('')}
  </section>

  <section class="network container reveal">
    <p class="mini-label">Infrastructure</p>
    <div class="network-grid" id="networkGrid"></div>
  </section>

  <section class="faq container">
    <p class="mini-label">FAQ</p>
    ${faqs.map(([q,a])=>`<details class="glass reveal"><summary>${q}</summary><p>${a}</p></details>`).join('')}
  </section>

  <section class="terms container reveal"><p class="mini-label">Terms</p><p>La información no constituye asesoría financiera. Rendimientos pasados no garantizan resultados futuros.</p></section>

  <section class="final-cta container">
    <h2>Descarga la demo y valida el sistema hoy.</h2>
    <div class="hero-actions"><button class="btn btn-gold" data-open-modal>Descargar demo</button><button class="btn btn-outline" data-open-modal>Comprar full access</button></div>
  </section>

  <footer class="container footer mono">© EasyGold Engine · Secure Infrastructure</footer>
</main>

<div class="urgency mono">Acceso preferencial cierra en <strong id="countdown">14:59</strong></div>

<dialog id="buyModal" class="glass">
  <h3>Confirmar acceso</h3>
  <p>Déjanos tu correo y te enviamos acceso a demo o full plan.</p>
  <form method="dialog" class="modal-form">
    <input type="email" required placeholder="tu@correo.com" />
    <select><option>Demo</option><option>Full Access</option></select>
    <menu><button class="btn btn-outline" value="cancel">Cancelar</button><button class="btn btn-gold" value="default">Continuar</button></menu>
  </form>
</dialog>`;

const stats = document.getElementById('stats');
metrics.forEach(([k,v]) => {
  const el = document.createElement('article');
  el.className = 'glass stat reveal';
  el.innerHTML = `<p class="mono">${k}</p><h3>${v}</h3>`;
  stats.appendChild(el);
});

const network = document.getElementById('networkGrid');
for (let i = 1; i <= 6; i++) {
  const n = document.createElement('div');
  n.className = 'glass node reveal';
  n.innerHTML = `<span class="mono">NODE 0${i}</span><p>Latency ${(28 + i * 2)}ms</p>`;
  network.appendChild(n);
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((e) => observer.observe(e));

document.querySelectorAll('[data-scroll]').forEach((btn) => btn.addEventListener('click', () => {
  document.querySelector(btn.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' });
}));


const tickerTrack = document.getElementById('tickerTrack');
tickerTrack.textContent = 'XAU/USD +0.84% • DXY -0.19% • LATENCY 41ms • NODES 148 • DD CONTROL ACTIVE • '.repeat(4);

const modal = document.getElementById('buyModal');
document.querySelectorAll('[data-open-modal]').forEach((b) => b.addEventListener('click', () => modal.showModal()));

const topNav = document.getElementById('topNav');
const progress = document.getElementById('scrollProgress');
const cursor = document.querySelector('.cursor');

let mouseX = 0, mouseY = 0, cx = 0, cy = 0;
window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = (window.scrollY / max) * 100;
  progress.style.width = `${p}%`;
  topNav.classList.toggle('scrolled', window.scrollY > 30);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const hero = document.getElementById('hero');
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
const points = Array.from({ length: 30 }, () => ({ x: Math.random(), y: Math.random(), z: Math.random() }));

function resizeCanvas() {
  canvas.width = hero.clientWidth * devicePixelRatio;
  canvas.height = hero.clientHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let t = 0;
function tick() {
  cx += (mouseX - cx) * 0.16;
  cy += (mouseY - cy) * 0.16;
  cursor.style.transform = `translate(${cx - 9}px, ${cy - 9}px)`;

  if (!prefersReduced) {
    const r = hero.getBoundingClientRect();
    const depth = Math.max(0, Math.min(1, 1 - Math.abs(r.top) / r.height));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach((p, i) => {
      const x = (p.x * hero.clientWidth) + Math.sin(t * 0.001 + i) * 14;
      const y = (p.y * hero.clientHeight) + (window.scrollY * (0.02 + p.z * 0.08));
      const size = 1 + p.z * 2.2;
      ctx.fillStyle = `rgba(214,175,88,${0.18 + p.z * 0.3 * depth})`;
      ctx.beginPath(); ctx.arc(x, y % hero.clientHeight, size, 0, Math.PI * 2); ctx.fill();
    });
  }

  t += 16;
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

const words = document.getElementById('manifestoText').textContent.split(' ');
document.getElementById('manifestoText').innerHTML = words.map((w) => `<span>${w}</span>`).join(' ');

const terminalLine = document.getElementById('terminalLine');
const demoProgress = document.getElementById('demoProgress');
const lines = ['Syncing liquidity pools...', 'Computing risk windows...', 'Executing XAU signal cluster...', 'Protective limits armed.'];
let li = 0, prog = 0;
setInterval(() => {
  terminalLine.textContent = lines[li++ % lines.length];
  prog = (prog + 17) % 101;
  demoProgress.style.width = `${prog}%`;
}, 1200);

let secs = 14 * 60 + 59;
setInterval(() => {
  secs = Math.max(0, secs - 1);
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  document.getElementById('countdown').textContent = `${m}:${s}`;
}, 1000);
