(function () {
  if (window.__rvnImageLightboxInitialized) {
    return;
  }

  var content = document.getElementById('content-container');
  var contentImages = content
    ? Array.prototype.slice.call(content.querySelectorAll('img'))
    : [];
  var optedInImages = Array.prototype.slice.call(
    document.querySelectorAll('[data-rvn-image-lightbox]')
  );
  var images = contentImages.concat(optedInImages)
    .filter(function (image, index, allImages) {
      return allImages.indexOf(image) === index;
    })
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

  function getImageSource(image) {
    if (image.tagName === 'IMG') {
      return image.currentSrc || image.src;
    }

    return image.getAttribute('src') || '';
  }

  function getImageAlt(image) {
    return image.getAttribute('alt') || image.alt || '';
  }

  function openPreview(image) {
    var source = getImageSource(image);
    if (!source) {
      return;
    }

    trigger = image;
    preview.src = source;
    preview.alt = getImageAlt(image);

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }

    dialog.focus({ preventScroll: true });
  }

  images.forEach(function (image) {
    var imageAlt = getImageAlt(image);
    var imageDescription = imageAlt
      ? 'Open image preview: ' + imageAlt
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
