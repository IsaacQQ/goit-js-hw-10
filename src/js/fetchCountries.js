const countriesBase = 'https://restcountries.com/v3.1/name/';
const countriesInfoFields = 'fields=name,capital,population,flags,languages';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


// export function fetchCountries(name) {
//   return fetch(`${countriesBase}${name}?${countriesInfoFields}`)
//   .then(response => {
//           if (!response.ok) {
//             return Notify.failure('Oops, there is no country with that name');
//           }
//           // return response.json();
//         })
//         .then(response => response.json())
//         .catch(error => console.log(error));
//     }
export function fetchCountries(name) {
  return fetch(`${countriesBase}${name}?${countriesInfoFields}`)
  .then(response => {

    if (!response.ok || response.status === 404) {
        throw new Error();
    }
    return response.json();
})
.catch(error => {
    
    Notify.failure('Oops, there is no country with that name');
    console.log(error);
})
}