function compra(event){
    event.preventDefault();
    let producto = event.target.producto.value;
    let url = 'https://fakestoreapi.com/products/1';
    let container = document.querySelector('.container');
    container.innerHTML = '';
    event.target.reset();
}

fetch(url + producto)
.then(res=>res.json())            
.then(json=>console.log(json))
