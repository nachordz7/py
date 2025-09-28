
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
