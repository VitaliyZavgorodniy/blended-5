import debounce from 'lodash.debounce';

const inputContactForm = document.querySelector('.form');
const FORM_DATA = 'form-data';
const formData = JSON.parse(localStorage.getItem(FORM_DATA)) ?? {};

inputContactForm.elements.name.value = formData.name;
inputContactForm.elements.tel.value = formData.tel;

const inputHandler = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
};

const submitHandler = e => {
  e.preventDefault();
  const { name, tel } = e.currentTarget.elements;
  console.log({name, tel});
  localStorage.removeItem(FORM_DATA);
  e.currentTarget.reset();
};

inputContactForm.addEventListener('input', inputHandler);
inputContactForm.addEventListener('submit', submitHandler);
