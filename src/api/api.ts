const BASE_URL = 'https://api.privatbank.ua/p24api/pubinfo';
const currentRate = '?json&exchange&coursid=5';

export function getCurrentRate() {
  // console.log(`URLA --- ${BASE_URL}${currentRate}`);
  return fetch(`${BASE_URL}${currentRate}`)
    .then(response => response.json())
}