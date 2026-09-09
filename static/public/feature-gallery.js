(() => {
  document.querySelectorAll('[data-rvn-feature-gallery]').forEach((gallery) => {
    if (gallery.hasAttribute('data-gallery-ready')) return;

    const images = Array.from(gallery.querySelectorAll('[data-rvn-gallery-image]'));
    const frame = gallery.querySelector('.rvn-feature1-media');
    const dots = gallery.querySelector('.rvn-feature-gallery-dots');
    const status = gallery.querySelector('.rvn-feature-gallery-status');
    if (!frame || !dots || !status || images.length < 2) return;

    gallery.setAttribute('data-gallery-ready', '');
    let active = 0;
    let gesture = null;
    let suppressPreviewClick = false;

    const navigationStepAt = (clientX) => {
      const bounds = frame.getBoundingClientRect();
      const position = (clientX - bounds.left) / bounds.width;
      if (position >= 0 && position < 1 / 3) return -1;
      if (position > 2 / 3 && position <= 1) return 1;
      return 0;
    };

    const select = (index) => {
      const next = (index + images.length) % images.length;
      if (next === active) return;
      active = next;
      images.forEach((image, i) => { image.hidden = i !== active; });
      buttons.forEach((button, i) => {
        button.setAttribute('aria-pressed', String(i === active));
      });
      status.textContent = `Screenshot ${active + 1} of ${images.length}: ${images[active].alt}`;
    };

    const buttons = images.map((image, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rvn-feature-gallery-dot';
      button.setAttribute('aria-label', `Show screenshot ${index + 1} of ${images.length}: ${image.alt}`);
      button.setAttribute('aria-pressed', String(index === active));
      button.addEventListener('click', () => select(index));
      button.addEventListener('keydown', (event) => {
        let next;
        if (event.key === 'ArrowRight') next = index + 1;
        else if (event.key === 'ArrowLeft') next = index - 1;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = images.length - 1;
        else return;
        event.preventDefault();
        select(next);
        buttons[active].focus();
      });
      dots.appendChild(button);
      return button;
    });
    dots.hidden = false;

    [['previous', -1, 'Previous'], ['next', 1, 'Next']].forEach(([direction, step, label]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `rvn-feature-gallery-edge rvn-feature-gallery-edge--${direction}`;
      button.setAttribute('aria-label', `${label} screenshot`);
      button.setAttribute('data-rvn-gallery-step', String(step));
      frame.appendChild(button);
    });

    frame.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      const step = navigationStepAt(event.clientX);
      if (step) frame.setAttribute('data-rvn-gallery-nav-hover', String(step));
      else frame.removeAttribute('data-rvn-gallery-nav-hover');
    });

    frame.addEventListener('pointerleave', () => {
      frame.removeAttribute('data-rvn-gallery-nav-hover');
    });

    frame.addEventListener('pointerdown', (event) => {
      if (!event.isPrimary) return;
      suppressPreviewClick = false;
      if (!['touch', 'pen'].includes(event.pointerType)) return;
      gesture = { id: event.pointerId, x: event.clientX, y: event.clientY };
      event.target.setPointerCapture(event.pointerId);
    });

    frame.addEventListener('pointerup', (event) => {
      if (!gesture || event.pointerId !== gesture.id) return;
      const dx = event.clientX - gesture.x;
      const dy = event.clientY - gesture.y;
      gesture = null;
      suppressPreviewClick = Math.hypot(dx, dy) > 10;
      if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        select(active + (dx < 0 ? 1 : -1));
      }
    });

    frame.addEventListener('pointercancel', () => {
      gesture = null;
      suppressPreviewClick = true;
    });

    // Handle navigation before the image's lightbox listener, including clicks
    // that reach the image directly when hover overlays aren't available.
    frame.addEventListener('click', (event) => {
      if (suppressPreviewClick) {
        suppressPreviewClick = false;
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      const navigationButton = event.target.closest('[data-rvn-gallery-step]');
      let step = navigationButton ? Number(navigationButton.getAttribute('data-rvn-gallery-step')) : 0;

      // Keyboard activation of the image opens its preview; keyboard activation
      // of an edge button still uses that button's explicit direction.
      if (!step && event.detail !== 0) {
        step = navigationStepAt(event.clientX);
      }

      if (!step) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      select(active + step);
    }, true);
  });
})();
