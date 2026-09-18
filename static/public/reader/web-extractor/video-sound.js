document.querySelectorAll('[data-video-sound]').forEach((button) => {
  const hero = button.closest('.rvn-creator-hero');
  const video = hero?.querySelector('video');
  const status = hero?.querySelector('[data-video-sound-status]');
  if (!video || !status) return;

  button.hidden = false;
  const updateLabel = () => {
    button.textContent = video.muted || video.volume === 0
      ? 'Watch with sound'
      : 'Replay with sound';
  };
  video.addEventListener('volumechange', updateLabel);

  button.addEventListener('click', async () => {
    status.textContent = '';
    try {
      video.currentTime = 0;
      video.muted = false;
      if (video.volume === 0) video.volume = 1;
      await video.play();
      updateLabel();
    } catch {
      status.textContent = 'Playback could not start. Try the video’s play button.';
    }
  });
});
