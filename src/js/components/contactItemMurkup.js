import { countries } from '../data/countries';

const findCountryById = countryId => countries.list.find(({ id }) => id === countryId);

export const contactItemMarkup = ({ name, tel, country }) =>
  ` <li class="contact">
      <h2 class="contact__name">${name}</h2>
      <p>${tel}</p>
      <img  class="contact__thumb"src="${findCountryById(country).flag}">
      <p>${findCountryById(country).name}</p>
    </li>`;
