function limpiar() {
    document.getElementById('formulario').reset();
    
}

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
