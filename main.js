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
