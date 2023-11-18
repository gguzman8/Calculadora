let boton = document.querySelector("#boton");
boton.addEventListener("click",function(){
    console.log("Dimos Click en el boton");
    boton.classList.toggle('verde');
});

boton.addEventListener("mouseover",function(){
    document.querySelector("#over").innerHTML = ("Estamos sobre el boton");
});

boton.addEventListener("mouseout",function(){
    document.querySelector("#over").innerHTML = ("Salí del boton");
});

window.addEventListener("keydown" , (e) => {
    document.querySelector("#a").innerHTML = ("Pulso una tecla");
    document.querySelector("#teclas").innerHTML = (String.fromCharCode (e.keyCode));
} );

window.addEventListener("keyup" , (e) => {
    document.querySelector("#a").innerHTML = ("Deje de presionar una tecla");
} );

window.addEventListener("load", (e) => {
    document.querySelector("#cargue").innerHTML = ("Termine de cargar la página");
});

function suma() {
    let x = parseInt(document.getElementById('numero1').value);
    let y = parseInt(document.getElementById('numero2').value);
    document.getElementById('resultado').innerHTML = x + y ;
}
function resta() {
    let x = parseInt(document.getElementById('numero1').value);
    let y = parseInt(document.getElementById('numero2').value);
    document.getElementById('resultado').innerHTML = x - y ;
}
function multiplicacion() {
    let x = parseInt(document.getElementById('numero1').value);
    let y = parseInt(document.getElementById('numero2').value);
    document.getElementById('resultado').innerHTML = x * y ;
}
function division() {
    let x = parseInt(document.getElementById('numero1').value);
    let y = parseInt(document.getElementById('numero2').value);
    document.getElementById('resultado').innerHTML = x / y ;
}
