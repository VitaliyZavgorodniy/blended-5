import { FORM_DATA } from '../constants';
export const formData = JSON.parse(localStorage.getItem(FORM_DATA)) ?? {};
