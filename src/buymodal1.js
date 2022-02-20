(() => {
  const refs = {
    openBuymodal1Btn: document.querySelector('[data-buymodal1-open]'),
    closeBuymodal1Btn: document.querySelector('[data-buymodal-1close]'),
    buymodal1: document.querySelector('[data-buymodal1]'),
  };

  refs.openBuymodal1Btn.addEventListener('click', toggleBuymodal1);
  refs.closeBuymodal1Btn.addEventListener('click', toggleBuymodal1);

  function toggleBuymodal1() {
    refs.buymodal1.classList.toggle('is-hidden');
  }
})();