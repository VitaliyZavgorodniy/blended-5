import { refs } from '../refs';

export const renderOptions = list => {
  const elementHTML = list
    .map(
      ({ id, name, flag }) => `<option value="${id}"><span>
    <img src="${flag}" alt="${name}">
    </span>${name}</option>`,
    )
    .join('');

  refs.countriesListRoot.innerHTML = elementHTML;
};
