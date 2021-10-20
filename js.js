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
    
}

// DESPLAZAR Y ENCOJER INFORMACION

let desplazar = document.querySelector(".li")
let iconReplace = document.querySelector(".fas")
let id = document.getElementById("li-arriba")

desplazar.addEventListener("click", ()=>{
    if(iconReplace === id){
        iconReplace.remove();
        desplazar.innerHTML = '<i class="fas fa-chevron-up fa-2x color-icon "></i>'
        iconReplace = document.querySelector(".fas")
    } 
    else{
        iconReplace.remove();
        desplazar.innerHTML = '<i id="li-arriba" class="fas fa-chevron-down fa-2x color-icon "></i>'   
        iconReplace = document.querySelector(".fas")
        id = document.getElementById("li-arriba")
    } 
})

