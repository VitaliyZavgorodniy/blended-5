import { toggleModal } from './utils/toggleModal';
import { refs } from './refs';

(() => {
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleModal);
})();
