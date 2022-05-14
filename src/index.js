import './sass/main.scss';
// import './js/slimSelect';

import SlimSelect from 'slim-select';

import { contactList } from './js/data/contactList';
import { countries } from './js/data/countries';
import { fetchAllCountries } from './js/apies/coutries';

import { renderContacts } from './js/utils/renderContacts';
import { renderOptions } from './js/utils/renderOptions';



new SlimSelect({
  select: '#single',
});

fetchAllCountries().then(res => {
  console.log(res);

  const formattedData = res.map(({ name, flags, latlng }) => ({
    id: latlng.join(''),
    name: name.official,
    flag: flags.svg,
  }));

  console.log(formattedData);

  countries.list = formattedData;
  renderOptions(formattedData);
  renderContacts(contactList);
});
