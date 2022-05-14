import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export const fetchAllCountries = async () =>
  await customAxios
    .get('/all', {
      params: {
        fields: 'name,flags,latlng',
      },
    })
    .then(res => res.data)
    .catch(err => console.err(err));
