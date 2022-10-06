'Use strict';

let fila = document.querySelector('.content-carrusel');
let cards = document.querySelector('.carrusel');
let flechaIzquierda= document.querySelector('#flecha-izquierda');
let flechaDerecha= document.querySelector('#flecha-derecha');

flechaDerecha.addEventListener('click',()=>{
    fila.scrollLeft +=fila.scrollWidth;
})