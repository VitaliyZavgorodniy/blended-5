import { refs } from '../refs';

export const toggleModal = e => {
  const modalWindow = e.target.getAttribute('data-modal');
  if (modalWindow === '') refs.modal.classList.toggle('is-hidden');
};
