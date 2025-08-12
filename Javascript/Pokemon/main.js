function handleSubmit(event) {
  event.preventDefault();
  let pokemon = event.target.pokemon.value;
  let url = 'https://pokeapi.co/api/v2/pokemon/';
  let container = document.querySelector('.container');
  container.innerHTML = '';
  event.target.reset();
  
  fetch(url + pokemon)
    .then(res => res.json()) 
    .then(pokemon => {
      let img = document.createElement('img');
      img.src = pokemon.sprites.front_default;
      container.append(img);
    });
}