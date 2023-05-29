const text = document.querySelector(".texto-ingresado");
const mensaje = document.querySelector(".mensaje");
const logo = document.querySelector(".imagenmuñeco");
const mensaje1= document.querySelector(".mensajeencriptador");
const mensaje2=document.querySelector(".mensajeencriptador2");

function botonEncrip() {
    const textoEncriptado = encriptar(text.value);
    
    mensaje.value=textoEncriptado;
    logo.remove();
    mensaje1.remove();
    mensaje2.remove();
}

function botonDesencrip() {
    const textoDesencriptado = desencriptar(text.value);
    
    mensaje.value=textoDesencriptado;
    logo.remove();
    mensaje1.remove();
    mensaje2.remove();
}

function copiar() {
    text.value=mensaje.value;
    
}

function encriptar(text) {
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    text = text.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        
        if(text.includes(matriz[i][0])){
            text=text.replaceAll(matriz[i][0],matriz[i][1]);
        }
        
    }
    return text;
}

function desencriptar(textDesencriptado) {
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textDesencriptado = textDesencriptado.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        
        if(textDesencriptado.includes(matriz[i][1])){
            textDesencriptado=textDesencriptado.replaceAll(matriz[i][1],matriz[i][0]);
        }
        
    }
    return textDesencriptado;
}

