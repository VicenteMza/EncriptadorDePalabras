
function eliminarDiacriticos(texto) {
    return texto
        .normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
        .normalize();
}

function mostrarBoton() {
    document.getElementById('btnCopiar').style.display = 'inline-block';
}

function dimencionarLabel() {
    document.getElementById('mesajeEncriptado').style.display = 'none';

    document.getElementById('areaTextoEncriptado').style.display = 'inline';
    document.getElementById('areaTextoEncriptado').style.textAlign ="center";

    //let box = document.getElementsById('areaTextoEncriptado');

    //document.getElementById('mesajeEncriptado').style.display = 'none';

}

function encriptar() {
    let text = document.getElementById("areaEncriptar").value.toLowerCase();
    text = eliminarDiacriticos(text);

    text = text.replaceAll("e", "enter");
    text = text.replaceAll("a", "al");
    text = text.replaceAll("i", "imes");
    text = text.replaceAll("o", "ober");
    text = text.replaceAll("u", "ufat");

    dimencionarLabel();

    document.getElementById('areaTextoEncriptado').value = text;
    //var objetivo = document.getElementById('areaTextoEncriptado');
    //objetivo.innerHTML = text;

    mostrarBoton();

    
}

function desencriptador() {

    let texto = document.getElementById("areaEncriptar").value;
    texto = eliminarDiacriticos(texto);
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("al", "a");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");

    dimencionarLabel();

    document.getElementById('areaTextoEncriptado').value = texto;
    //var objetivo = document.getElementById('areaTextoEncriptado');
    //objetivo.innerHTML = texto;

    mostrarBoton();

    //alert(texto);
}

function copiarTexto(){
    let texto;

    texto = document.getElementById('areaTextoEncriptado').value;

    document.getElementById('areaEncriptar').value = texto;

    alert("Se copio "+"'" + texto+"'");
    //texto = document.getElementById('areaTextoEncriptado');
    //texto.innerHTML = text;
}