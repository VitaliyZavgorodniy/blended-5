import { refs } from '../refs';
import { contactItemMarkup } from '../components/contactItemMurkup';

export const renderContacts = list => {
  const HTMLelement = list.map(item => contactItemMarkup(item)).join('');

  refs.contactList.innerHTML = '';
  refs.contactList.insertAdjacentHTML('beforeend', HTMLelement);
};
