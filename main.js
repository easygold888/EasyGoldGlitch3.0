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
