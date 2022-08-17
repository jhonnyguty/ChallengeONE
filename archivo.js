const botonEncriptar = document.querySelector(".btn-encriptar");
const botondesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar = document.querySelector(".btn-copiar");
const muneco = document.querySelector(".contenedor-muneco");
const h3 = document.querySelector(".contenedor-h3");
const parrafo = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


function copiar(){
  ocultarAdelante();
  const input = document.createElement('input');
  const textEncripted = document.querySelector('.texto-resultado').textContent;
  input.value = textEncripted;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
}

function encriptar(){
    ocultarAdelante();
    const area = recuperarTexto()
    resultado.textContent = encriptarTexto(recuperarTexto())
}

function desencriptar(){
    ocultarAdelante();
    const area = recuperarTexto()
    resultado.textContent = desencriptarTexto(recuperarTexto())
    }



function recuperarTexto(){
    const area = document.querySelector(".area");
    return area.value
}

function ocultarAdelante(){
  muneco.classList.add("ocultar");
  h3.classList.add("ocultar");
  parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    const texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i <texto.length; i++){
        if(texto[i]=="a"){
            textoFinal = textoFinal + "ai"
      }
      else if(texto[i]=="e"){
        textoFinal = textoFinal + "enter"
      }
      else if(texto[i]=="i"){
        textoFinal = textoFinal + "imes"
      }
      else if(texto[i]=="o"){
        textoFinal = textoFinal + "ober"
      }
      else if(texto[i]=="u"){
        textoFinal = textoFinal + "ufat"
      }
      else{
        textoFinal = textoFinal + texto[i];
      }
    }
    return textoFinal;
}
function desencriptarTexto(mensaje){
    const texto = mensaje;
    let textoFinal = "";
    for(let i = 0; i <texto.length; i++){
        if(texto[i]=="a"){
            textoFinal = textoFinal + "a"
            i = i+1;
      }
      else if(texto[i]=="e"){
        textoFinal = textoFinal + "e"
            i = i+4;
      }
      else if(texto[i]=="i"){
        textoFinal = textoFinal + "i"
            i = i+3;
      }
      else if(texto[i]=="o"){
        textoFinal = textoFinal + "o"
            i = i+3;
      }
      else if(texto[i]=="u"){
        textoFinal = textoFinal + "u"
            i = i+3;
      }
      else{
        textoFinal = textoFinal + texto[i];
      }
    }
    return textoFinal;
}

