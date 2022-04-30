import debounce from 'lodash.debounce';
import { refs } from './refs';
import { closeModal } from './utils/closeModal';
import { renderContacts } from './utils/renderContacts';

const CONTACT_LIST = 'contact-list';
const FORM_DATA = 'form-data';

const formData = JSON.parse(localStorage.getItem(FORM_DATA)) ?? {};
const contactList = JSON.parse(localStorage.getItem(CONTACT_LIST)) ?? [];

refs.inputContactForm.elements.name.value = formData.name ?? '';
refs.inputContactForm.elements.tel.value = formData.tel ?? '';

renderContacts(contactList);

const inputHandler = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
};

const submitHandler = e => {
  e.preventDefault();

  const { name, tel } = e.currentTarget.elements;

  if (name.value === '' || tel.value === '') return alert('Please enter all data');

  contactList.push({ name: name.value, tel: tel.value });

  renderContacts(contactList);

  localStorage.setItem(CONTACT_LIST, JSON.stringify(contactList));
  localStorage.removeItem(FORM_DATA);

  e.currentTarget.reset();
  closeModal();
};

refs.inputContactForm.addEventListener('input', debounce(inputHandler, 250));
refs.inputContactForm.addEventListener('submit', submitHandler);
