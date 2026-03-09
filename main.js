const desks = [
  {
    desk: 'Macro Desk',
    edge: '+3.4 Sharpe ajustado',
    summary: 'Opera ventanas de volatilidad macro con límites automáticos de exposición.',
  },
  {
    desk: 'FX Execution',
    edge: 'Slippage medio 0.09%',
    summary: 'Priorización por liquidez real y señales de microestructura institucional.',
  },
  {
    desk: 'Risk Engine',
    edge: 'DD máximo 6.2%',
    summary: 'Protección por régimen: reduce tamaño cuando crece estrés de mercado.',
  },
];

const roadmap = [
  ['01', 'Diagnóstico de capital', 'Mapeo de perfil, restricciones y horizonte de retorno.'],
  ['02', 'Configuración táctica', 'Asignación de estrategias según tolerancia y objetivos.'],
  ['03', 'Operación supervisada', 'Monitoreo continuo con alertas y comité de ejecución.'],
  ['04', 'Optimización trimestral', 'Ajustes con evidencia de desempeño y control de riesgo.'],
];

const app = document.getElementById('app');

app.innerHTML = `
  <header class="header shell">
    <div class="brand">
      <span class="brand-dot"></span>
      <div>
        <p class="overline">EASYGOLD ATLAS</p>
        <strong>Capital Operating Interface</strong>
      </div>
    </div>
    <nav>
      <a href="#arquitectura">Arquitectura</a>
      <a href="#simulador">Simulador</a>
      <a href="#proceso">Proceso</a>
      <button class="btn btn-outline" id="openDialog">Aplicar</button>
    </nav>
  </header>

  <main class="shell">
    <section class="hero">
      <div>
        <p class="eyebrow">INSTITUTIONAL WEALTH UX</p>
        <h1>Un entorno de decisión para capital serio.</h1>
        <p class="lead">No es una landing de trading. Es una interfaz operativa con disciplina visual, control de riesgo y narrativa de confianza para convertir dudas en acción.</p>
        <div class="hero-actions">
          <button class="btn btn-gold" id="bookCall">Solicitar comité estratégico</button>
          <button class="btn btn-ghost">Descargar dossier operativo</button>
        </div>
      </div>
      <aside class="terminal panel" aria-label="Estado de mercado">
        <h3>Estado del mercado</h3>
        <div class="ticker" id="ticker"></div>
        <div class="terminal-grid">
          <div><span>Regímen</span><strong>Risk-On controlado</strong></div>
          <div><span>Volatilidad</span><strong>Media</strong></div>
          <div><span>Sesión</span><strong>Londres / NY</strong></div>
          <div><span>Alertas</span><strong>2 activas</strong></div>
        </div>
      </aside>
    </section>

    <section class="desks" id="arquitectura">
      ${desks.map((d) => `
        <article class="panel desk-card">
          <p class="tag">${d.desk}</p>
          <h3>${d.edge}</h3>
          <p>${d.summary}</p>
        </article>
      `).join('')}
    </section>

    <section class="simulator panel" id="simulador">
      <div>
        <p class="tag">Simulador de exposición</p>
        <h2>Visualiza retorno esperado vs. riesgo operativo.</h2>
        <p>Ajusta el nivel de exposición y obtén un escenario orientativo para conversación comercial y de soporte.</p>
      </div>
      <div class="sim-inputs">
        <label for="risk">Exposición por operación: <strong id="riskValue">1.0%</strong></label>
        <input id="risk" type="range" min="0.2" max="2.0" step="0.1" value="1.0" />
        <div class="result-grid">
          <div><span>Retorno mensual estimado</span><strong id="ret">4.8%</strong></div>
          <div><span>Drawdown esperado</span><strong id="dd">5.4%</strong></div>
          <div><span>Confianza del modelo</span><strong id="conf">82%</strong></div>
        </div>
      </div>
    </section>

    <section class="process" id="proceso">
      ${roadmap.map(([id, title, body]) => `
        <article class="step">
          <span>${id}</span>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `).join('')}
    </section>
  </main>

  <dialog id="applyDialog" class="panel">
    <h3>Aplicación confidencial</h3>
    <p>Comparte tu correo y volumen estimado para coordinar una sesión privada.</p>
    <form method="dialog" class="dialog-form">
      <input type="email" placeholder="correo@empresa.com" required />
      <input type="text" placeholder="Capital estimado (USD)" required />
      <menu>
        <button class="btn btn-outline" value="cancel">Cancelar</button>
        <button class="btn btn-gold" value="default">Enviar solicitud</button>
const metrics = [
  { label: 'Capital monitorizado', value: 128, suffix: 'M USD' },
  { label: 'Latencia promedio', value: 42, suffix: 'ms' },
  { label: 'Ejecución de órdenes', value: 99.7, suffix: '%' },
];

const features = [
  {
    title: 'Señales institucionales',
    description:
      'Modelos cuantitativos con lectura multi-timeframe para identificar momentum con confirmación de riesgo.',
  },
  {
    title: 'Control de riesgo guiado',
    description:
      'Define exposición máxima y alertas dinámicas para evitar sobreapalancamiento en escenarios de alta volatilidad.',
  },
  {
    title: 'Dashboard operativo',
    description:
      'Visualiza posiciones, drawdown y oportunidades en una interfaz sobria, rápida y preparada para escalar.',
  },
];

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="topbar glass">
    <div class="logo">EasyGold<span>Prime</span></div>
    <nav>
      <a href="#solucion">Solución</a>
      <a href="#metricas">Métricas</a>
      <a href="#faq">FAQ</a>
      <button class="ghost" id="openModal">Solicitar acceso</button>
    </nav>
  </header>

  <main>
    <section class="hero" id="solucion">
      <div class="hero-copy">
        <p class="kicker">WEALTH OPERATING SYSTEM</p>
        <h1>Trading intelligence para decisiones de alto valor.</h1>
        <p class="subtitle">Una experiencia financiera premium que combina señal cuantitativa, disciplina de riesgo y ejecución en tiempo real.</p>
        <div class="hero-cta">
          <button class="primary" id="heroCta">Agendar demo estratégica</button>
          <button class="link">Ver metodología</button>
        </div>
      </div>
      <div class="hero-panel glass" id="tiltPanel">
        <h3>Panel en vivo</h3>
        <p>EUR/USD · Estrategia Momentum Shield</p>
        <div class="line"></div>
        <p class="signal">Señal activa: <strong>Compra técnica</strong></p>
        <p class="risk">Riesgo sugerido: 0.8% por operación</p>
      </div>
    </section>

    <section class="metrics" id="metricas"></section>

    <section class="features">
      ${features
        .map(
          (f) => `
            <article class="card glass">
              <h3>${f.title}</h3>
              <p>${f.description}</p>
            </article>`
        )
        .join('')}
    </section>

    <section class="faq glass" id="faq">
      <h2>Preguntas críticas antes de invertir</h2>
      <details>
        <summary>¿Cómo gestionan el riesgo en mercados extremos?</summary>
        <p>El sistema reduce exposición automáticamente y activa protecciones por volatilidad para preservar capital.</p>
      </details>
      <details>
        <summary>¿Necesito experiencia previa en trading?</summary>
        <p>No. La interfaz está diseñada para traducir complejidad en decisiones claras con contexto y límites sugeridos.</p>
      </details>
    </section>
  </main>

  <dialog id="leadModal" class="glass">
    <h3>Solicita acceso prioritario</h3>
    <p>Déjanos tu correo para enviarte una demo guiada y roadmap de onboarding.</p>
    <form method="dialog">
      <input type="email" placeholder="tu@correo.com" required />
      <menu>
        <button class="ghost" value="cancel">Cancelar</button>
        <button class="primary" value="default">Enviar</button>
      </menu>
    </form>
  </dialog>
`;

const ticker = document.getElementById('ticker');
const tickerRows = [
  'XAU/USD +0.82%',
  'EUR/USD +0.21%',
  'DXY -0.18%',
  'US10Y +0.06%',
  'BTC/USD -0.44%',
];
let tIndex = 0;
setInterval(() => {
  tIndex = (tIndex + 1) % tickerRows.length;
  ticker.textContent = tickerRows[tIndex];
}, 1100);

ticker.textContent = tickerRows[0];

const risk = document.getElementById('risk');
const riskValue = document.getElementById('riskValue');
const ret = document.getElementById('ret');
const dd = document.getElementById('dd');
const conf = document.getElementById('conf');

const updateScenario = () => {
  const r = Number(risk.value);
  riskValue.textContent = `${r.toFixed(1)}%`;
  ret.textContent = `${(3.1 + r * 1.7).toFixed(1)}%`;
  dd.textContent = `${(3.8 + r * 1.6).toFixed(1)}%`;
  conf.textContent = `${Math.max(62, Math.round(89 - r * 7))}%`;
};
risk.addEventListener('input', updateScenario);
updateScenario();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
}, { threshold: 0.24 });
document.querySelectorAll('.desk-card, .step, .simulator').forEach((el) => observer.observe(el));

const dialog = document.getElementById('applyDialog');
['openDialog', 'bookCall'].forEach((id) => {
  document.getElementById(id).addEventListener('click', () => dialog.showModal());
});
const metricsContainer = document.querySelector('.metrics');
metrics.forEach((metric) => {
  const item = document.createElement('article');
  item.className = 'metric glass';
  item.innerHTML = `
    <p class="metric-value" data-target="${metric.value}">0</p>
    <p class="metric-label">${metric.label}</p>
    <p class="metric-suffix">${metric.suffix}</p>
  `;
  metricsContainer.appendChild(item);
});

const animateCounters = () => {
  document.querySelectorAll('.metric-value').forEach((el) => {
    const target = Number(el.dataset.target);
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
    }, 18);
  });
};

const panel = document.getElementById('tiltPanel');
document.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;
  panel.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

const modal = document.getElementById('leadModal');
['openModal', 'heroCta'].forEach((id) => {
  document.getElementById(id).addEventListener('click', () => modal.showModal());
});

window.addEventListener('load', animateCounters);
