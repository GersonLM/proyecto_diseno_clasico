let slider =  document.querySelector(".slider-container");
let sliderIndividual = document.querySelectorAll(".contenido-slider");

let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener( "resize", ()=>{
    let width = sliderIndividual[0].clientWidth;
});

setInterval(()=>{
    sliders();
},intervalo);

const sliders = () =>{
    slider.style.transform = `translate(${-width*contador}px)`;
    slider.style.transition = ".8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(()=>{
            slider.style.transform = "translate(0px)"
            slider.style.transition = "0s";
            contador = 1
        },1500)
    }
    
};

// DESPLAZAR Y ENCOJER INFORMACION

//icono desplegar
let desplazar = document.querySelector(".li");
let desplazar2 = document.querySelector(".li2");
let iconReplace = document.querySelector(".fas");
let id = document.getElementById("li-arriba");
let id2 = document.getElementById("li-arriba2");

// -------------------info despleglable---------------
let infoDes = document.getElementById("selec-desplegar");
let footer = document.getElementById("footer");

// console.log(infoDes.offsetHeight);
//let contadorAltura = 1;
let altura = infoDes.offsetHeight;
// let alturaMovimientoPantalla = 0

infoDes.style.height = "0px";

// window.addEventListener( "resize", ()=>{
//     alturaMovimientoPantalla = infoDes.offsetHeight;
    
//     console.log(alturaMovimientoPantalla);
//     infoDes.style.height = `${alturaMovimientoPantalla}px`;
//     console.log("altura al mover la panattal: "+alturaMovimientoPantalla);

//     if(altura =! infoDes.offsetHeight) altura = infoDes.offsetHeight
// });



[desplazar, desplazar2].forEach((item)=>{
    item.addEventListener("click", ()=>{
        if(iconReplace === id || iconReplace === id2){
            iconReplace.remove();
            desplazar.innerHTML = '<i class="fas fa-chevron-up fa-2x color-icon "></i>';
            desplazar2.innerHTML = '<i class="fas fa-chevron-up fa-2x color-icon "></i>';
            iconReplace = document.querySelector(".fas");
    
            // info despleglable
            // if(altura > 0 && alturaMovimientoPantalla === 0){
                infoDes.style.height = `${altura}px`
                console.log("dentro del evnto click" + altura)
                infoDes.style.transition = "1s"
            // }else if(alturaMovimientoPantalla > 0){
                // infoDes.style.height = `${alturaMovimientoPantalla}px`
                // console.log("dentro del evnto click" + alturaMovimientoPantalla)
                // infoDes.style.transition = "1s"
            // }
        } 
        else{
            iconReplace.remove();
            desplazar.innerHTML = '<i id="li-arriba" class="fas fa-chevron-down fa-2x color-icon "></i>';
            desplazar2.innerHTML = '<i id="li-arriba2" class="fas fa-chevron-down fa-2x color-icon "></i>';   
            iconReplace = document.querySelector(".fas");
            id = document.getElementById("li-arriba");
            id2 = document.getElementById("li-arriba2");
    
            // info despleglable
            infoDes.style.height = `0px`
            infoDes.style.transition = "1s"
        } 
    });
    
})


