import debounce from 'lodash.debounce';
import { refs } from './refs';
import { closeModal } from './utils/closeModal';

const FORM_DATA = 'form-data';
const formData = JSON.parse(localStorage.getItem(FORM_DATA)) ?? {};

refs.inputContactForm.elements.name.value = formData.name ?? '';
refs.inputContactForm.elements.tel.value = formData.tel ?? '';

const inputHandler = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
  console.log(e.target.value);
};

const submitHandler = e => {
  e.preventDefault();
  const { name, tel } = e.currentTarget.elements;
  console.log({ name, tel });
  if (name.value === '' || tel.value === '') {
    alert('Please enter all data');
    return;
  }
  localStorage.removeItem(FORM_DATA);
  e.currentTarget.reset();
  closeModal();
};

refs.inputContactForm.addEventListener('input', debounce(inputHandler, 250));
refs.inputContactForm.addEventListener('submit', submitHandler);
