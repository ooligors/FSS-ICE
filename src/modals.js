(() => {
  const refs = {
    openModalsBtn: document.querySelector('[data-modals-open]'),
    closeModalsBtn: document.querySelector('[data-modals-close]'),
    modals: document.querySelector('[data-modals]'),
  };

  refs.openModalsBtn.addEventListener('click', toggleModals);
  refs.closeModalsBtn.addEventListener('click', toggleModals);

  function toggleModals() {
    refs.modals.classList.toggle('is-hidden');
  }
})();