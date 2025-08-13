  const modal = document.getElementById('lumaModal');
  const closeBtn = document.getElementById('closeModal');

  const closeModal = () => {
    modal.style.animation = 'fadeOut 0.5s ease-out';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  };

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if(e.target === modal){
      closeModal();
    }
  });