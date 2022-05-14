import { contactList } from '../data/contactList';
import { CONTACT_LIST, FORM_DATA } from '../constants';

export const submitForm = async data => {
  const isSuccess = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        contactList.push(data);

        localStorage.setItem(CONTACT_LIST, JSON.stringify(contactList));
        localStorage.removeItem(FORM_DATA);

        resolve('Дані були збережені');
      } else {
        reject('Щось пішло не так');
      }
    }, 1000);
  });
};
