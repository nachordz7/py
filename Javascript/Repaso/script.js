function hora(){
    let reloj = document.querySelector('h2');

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h.toString().padStart(2,'0');
    m = m.toString().padStart(2,'0');
    s = s.toString().padStart(2,'0');

    reloj.textContent = `${h}:${m}:${s}`;

}
setInterval(hora,1000);

//Usar una API
let container = document.querySelector('.container');
let url = 'https://restcountries.com/v3.1/all?fields=flag,name,capital';

function createCountryCard(country) {
    let card = document.createElement('div');
    card.classList.add('card');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    h3.textContent = country.name.common;
    h4.textContent = country.capital;
    card.append(h3,h4);
    container.append(card);
  }

fetch(url)
  .then(res => res.json())
  .then(countries => {
    for (let country of countries)
      createCountryCard(country);
  })
  .catch(err => console.error(err));
