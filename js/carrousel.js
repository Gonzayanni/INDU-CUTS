const remera=document.querySelector(".foto-carrousel");
const flechaLeft=document.querySelector(".left");
const flechaRight=document.querySelector(".right");


flechaRight.addEventListener("click",MoverDerecha)

function MoverDerecha(){
remera.src="img/2.jpg";
}