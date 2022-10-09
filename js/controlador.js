'Use strict';

let fila = document.querySelectorAll('.content-carrusel');
//let filaImagenes = document.querySelector('.contenedor-carrusel');
let cards = document.querySelector('.carrusel');
let flechaIzquierda= document.querySelectorAll('#flecha-izquierda');
let flechaDerecha= document.querySelectorAll('#flecha-derecha');
    
    for (let index = 0; index <flechaDerecha.length; index++) {
        for(let j=0; j<fila.length;j++){
            flechaDerecha[index].addEventListener('click',()=>{
                fila[j].scrollLeft +=fila[j].offsetWidth;

         });
        }
        }
        for (let index = 0; index <flechaIzquierda.length; index++) {
            for(let j=0; j<fila.length;j++){
                flechaIzquierda[index].addEventListener('click',()=>{
                    fila[j].scrollLeft -=fila[j].offsetWidth;
    
            
        
        
             });
            }
            }


   
   

/*

    flechaIzquierda.addEventListener('click',()=>{
        for (let index = 0; index < flechaDerecha.length; index++) {
        for(let x=0; x=x<fila.length;x++){
            console.log('hola');
        fila[x].scrollLeft -=fila.offsetWidth;
    }
}
});

*/