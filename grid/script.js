let casillas = document.querySelectorAll('.casilla');
let botones = document.querySelectorAll('button');
let jugador1_text = document.querySelector('#jugador1_text');
let jugador2_text = document.querySelector('#jugador2_text');
let imagenes = document.querySelectorAll('.imagen')

let juego = new Juego(casillas, botones, jugador1_text, jugador2_text, imagenes)
juego.init();


function onClick(imagen) {
    let img = document.querySelector('#' + imagen);
    let cas = img.parentNode.parentNode;

    juego.click(cas, img);
}