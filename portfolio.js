(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('[data-reveal], .system-flow, .interaction-demo');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -7% 0px' });
    items.forEach((el) => observer.observe(el));
  }

  const triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length || typeof HTMLDialogElement === 'undefined') return;

  const dialog = document.createElement('dialog');
  dialog.className = 'ja-lightbox';
  dialog.setAttribute('aria-label', 'Enlarged technical image');
  dialog.innerHTML = `
    <div class="ja-lightbox__inner">
      <div class="ja-lightbox__bar"><button class="ja-lightbox__close" type="button" aria-label="Close enlarged image">×</button></div>
      <div class="ja-lightbox__stage"><img alt="" /></div>
      <p class="ja-lightbox__caption"></p>
    </div>`;
  document.body.appendChild(dialog);

  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('.ja-lightbox__caption');
  const closeButton = dialog.querySelector('.ja-lightbox__close');

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      const href = trigger.getAttribute('href');
      if (!href) return;
      event.preventDefault();
      const sourceImage = trigger.querySelector('img');
      image.src = href;
      image.alt = sourceImage?.alt || '';
      caption.textContent = trigger.dataset.lightboxCaption || sourceImage?.alt || '';
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    caption.textContent = '';
  });
})();
