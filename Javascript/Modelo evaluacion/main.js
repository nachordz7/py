function rand(a,b){
    let r= Math.random() * (b-a) + a + 1;
    r = Math.floor(r);
    return r;
}
function handleSubmit(e) {
    e.preventDefault();
    let a = +e.target.a.value;
    let b = +e.target.b.value;
    let p = document.createElement('p');
    p.textContent = `${rand(a,b)}, ${rand(a,b)}, ${rand(a,b)}`;
    document.body.append(p);
    e.target.reset();
    }

function handleClick(e) {
    let div= document.querySelector(".buttons");
    if (e.target.textContent == 'Rojo')
    div.style.backgroundColor = 'red';
    
    else if (e.target.textContent == 'Negro')
    div.style.backgroundColor = 'black';
    
}
document.addEventListener('click',handleClick);
