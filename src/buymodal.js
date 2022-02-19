(() => {
  const refs = {
    openBuymodalBtn: document.querySelector('[data-buymodal-open]'),
    closeBuymodalBtn: document.querySelector('[data-buymodal-close]'),
    buymodal: document.querySelector('[data-buymodal]'),
  };

  refs.openBuymodalBtn.addEventListener('click', toggleBuymodal);
  refs.closeBuymodalBtn.addEventListener('click', toggleBuymodal);

  function toggleBuymodal() {
    refs.buymodal.classList.toggle('is-hidden');
  }
})();