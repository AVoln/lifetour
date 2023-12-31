const playAudio = () => {

  const audio = document.querySelector('[data-id="audio"]');

  audio.addEventListener('click', () => {

    if (audio.hasAttribute('data-state')) {
      return;
    }

    audio.dataset.state = 'ready';
    const src = audio.dataset.src;
    audio.insertAdjacentHTML('beforeend', '<iframe style="border:none;border-radius:12px;width:100%;height:100%;" src="' + src + '"></iframe>');
  }, {passive: true});
};

export {playAudio};
