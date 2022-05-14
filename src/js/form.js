import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { refs } from './refs';

import { closeModal } from './utils/closeModal';
import { renderContacts } from './utils/renderContacts';

import { CONTACT_LIST, FORM_DATA } from './constants';

import { submitForm } from './apies/submitForm';

import { formData } from './data/formData';
import { contactList } from './data/contactList';

refs.inputContactForm.elements.name.value = formData.name ?? '';
refs.inputContactForm.elements.tel.value = formData.tel ?? '';



const inputHandler = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
};

const submitHandler = e => {
  e.preventDefault();

  const { name, tel, country } = e.target.elements;

  if (name.value === '' || tel.value === '') return Notiflix.Notify.info('Please enter all data');
  submitForm({ name: name.value, tel: tel.value, country: country.value })
    .then(message => {
      console.log(e.target);
      Notiflix.Notify.success(message);
      e.target.reset();
      closeModal();
      renderContacts(contactList);
    })
    .catch(error => Notiflix.Notify.failure(error));
};

refs.inputContactForm.addEventListener('input', debounce(inputHandler, 250));
refs.inputContactForm.addEventListener('submit', submitHandler);
