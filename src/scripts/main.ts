// Вся интерактивность сайта. Запускается при загрузке и после каждого
// перехода между страницами (Astro View Transitions → событие astro:page-load).

let pageAbort = new AbortController();

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Плавное появление элементов с атрибутом data-reveal при прокрутке. */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  items.forEach((el) => io.observe(el));
}

/** Свет под курсором: карточки (.card) и блоки с data-spotlight. */
function initSpotlight() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll<HTMLElement>('.card, [data-spotlight]').forEach((el) => {
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--x', `${ev.clientX - r.left}px`);
      el.style.setProperty('--y', `${ev.clientY - r.top}px`);
    });
  });
}

/** Лёгкий наклон элементов data-tilt за курсором. */
function initTilt() {
  if (reduceMotion() || window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt) || 6;
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width - 0.5;
      const py = (ev.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

/** Переключатель языков в шапке. */
function initLangMenu() {
  const root = document.querySelector<HTMLElement>('[data-lang]');
  const btn = root?.querySelector<HTMLButtonElement>('.lang-btn');
  if (!root || !btn) return;
  const close = () => {
    root.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = root.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener(
    'click',
    (e) => {
      if (!root.contains(e.target as Node)) close();
    },
    { signal: pageAbort.signal },
  );
  document.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'Escape') close();
    },
    { signal: pageAbort.signal },
  );
}

/** Мобильное меню. */
function initBurger() {
  const btn = document.querySelector<HTMLButtonElement>('[data-burger]');
  if (!btn) return;
  document.body.classList.remove('menu-open');
  btn.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
  });
  document.querySelectorAll('[data-mobile-menu] a').forEach((a) =>
    a.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      document.documentElement.style.overflow = '';
    }),
  );
}

/** Шапка становится «стеклянной» после начала прокрутки. */
function updateHeader() {
  document.querySelector('[data-header]')?.classList.toggle('scrolled', window.scrollY > 8);
}

/** Фильтр проектов по технологии. */
function initFilters() {
  const bar = document.querySelector<HTMLElement>('[data-filters]');
  if (!bar) return;
  const cards = document.querySelectorAll<HTMLElement>('[data-stack]');
  bar.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-filter]');
    if (!btn) return;
    bar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    const f = btn.dataset.filter!;
    cards.forEach((c) => {
      const show = f === '*' || c.dataset.stack!.split('|').includes(f);
      c.classList.toggle('is-hidden', !show);
    });
  });
}

let scrollBound = false;

function init() {
  // Слушатели на document снимаются при переходе на другую страницу.
  pageAbort.abort();
  pageAbort = new AbortController();
  document.documentElement.style.overflow = '';
  initReveal();
  initSpotlight();
  initTilt();
  initLangMenu();
  initBurger();
  initFilters();
  updateHeader();
  if (!scrollBound) {
    window.addEventListener('scroll', updateHeader, { passive: true });
    scrollBound = true;
  }
}

document.addEventListener('astro:page-load', init);

// После подмены страницы Astro переписывает атрибуты <html> — возвращаем
// класс js до отрисовки, чтобы анимации появления работали без мигания.
document.addEventListener('astro:after-swap', () => {
  document.documentElement.classList.add('js');
});
