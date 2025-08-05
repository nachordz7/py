let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

function pokemon(){
let text = document.querySelector('#text');
let img = document.querySelector('#imagen');

}

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
});