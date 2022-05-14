import { contactList } from '../data/contactList';
import { CONTACT_LIST, FORM_DATA } from '../constants';

export const submitForm = async data => {
  const isSuccess = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve('Дані були збережені');
        contactList.push(data);
        console.log(contactList);
        localStorage.setItem(CONTACT_LIST, JSON.stringify(contactList));
        localStorage.removeItem(FORM_DATA);
        console.log('success');
      } else {
        reject('Щось пішло не так');
        console.log('error');
      }
    }, 1000);
  });
};
