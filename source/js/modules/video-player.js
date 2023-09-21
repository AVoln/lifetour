const play = () => {

  const video = document.querySelector('[data-id="video"]');

  video.addEventListener('click', () => {

    if (video.hasAttribute('data-state')) {
      return;
    }

    video.dataset.state = 'ready';
    const src = video.dataset.src;
    video.insertAdjacentHTML('beforeend', '<iframe src="' + src + '" title="Бесплатные интерактивные онлайн-курсы." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  }, {passive: true});
};

export {play};
