(function () {
  if (window.__rvnImageLightboxInitialized) {
    return;
  }

  var content = document.getElementById('content-container');
  if (!content) {
    return;
  }

  var images = Array.prototype.slice.call(content.querySelectorAll('img'))
    .filter(function (image) {
      return !image.hasAttribute('data-rvn-no-preview')
        && !image.closest('a, button, [role="button"]');
    });

  if (images.length === 0) {
    return;
  }

  window.__rvnImageLightboxInitialized = true;

  var dialog = document.createElement('dialog');
  dialog.className = 'rvn-image-lightbox';
  dialog.setAttribute('aria-label', 'Image preview');
  dialog.tabIndex = -1;

  var preview = document.createElement('img');
  preview.className = 'rvn-image-lightbox__image';

  dialog.appendChild(preview);
  document.body.appendChild(dialog);

  var trigger = null;

  function closePreview() {
    if (typeof dialog.close === 'function') {
      dialog.close();
      return;
    }

    dialog.removeAttribute('open');
    handleClose();
  }

  function handleClose() {
    preview.removeAttribute('src');
    preview.alt = '';

    if (trigger) {
      trigger.focus({ preventScroll: true });
      trigger = null;
    }
  }

  function openPreview(image) {
    trigger = image;
    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt || '';

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }

    dialog.focus({ preventScroll: true });
  }

  images.forEach(function (image) {
    var imageDescription = image.alt
      ? 'Open image preview: ' + image.alt
      : 'Open image preview';

    image.setAttribute('data-rvn-image-preview', 'true');
    image.setAttribute('role', 'button');
    image.setAttribute('tabindex', '0');
    image.setAttribute('aria-haspopup', 'dialog');
    image.setAttribute('aria-label', imageDescription);

    image.addEventListener('click', function () {
      openPreview(image);
    });

    image.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      openPreview(image);
    });
  });

  preview.addEventListener('click', closePreview);

  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) {
      closePreview();
    }
  });

  dialog.addEventListener('close', handleClose);
})();
