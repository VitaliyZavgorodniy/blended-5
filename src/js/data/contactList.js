import { CONTACT_LIST } from '../constants';
export const contactList = JSON.parse(localStorage.getItem(CONTACT_LIST)) ?? [];
