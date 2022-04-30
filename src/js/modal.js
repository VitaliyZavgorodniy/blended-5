(() => {
   const refs = {
     openModalBtn: document.querySelector('[data-action="add-contact"]'),
     modal: document.querySelector('[data-modal]'),
   };
 
   const toggleModal = e => {
     const modalWindow = e.target.getAttribute('data-modal');
     if (modalWindow === '') refs.modal.classList.toggle('is-hidden');
   };
 
   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.modal.addEventListener('click', toggleModal);
 })();
 