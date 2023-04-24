let texto = document.getElementById("input-texto");
let letras = ["e","i","a","o","u"];
let cambioLetras = ["enter","imes","ai","ober","ufat"];
let textoEncriptado = ""

function encriptar() {
    let textoSeparado= texto.value.toLowerCase().split(" ")
    for (let i = 0; i < textoSeparado.length; i++) {
        for (let j = 0; j < textoSeparado[i].length;j++){
            let existeLetra = letras.includes(textoSeparado[i][j]);
        
            if(existeLetra){
             textoEncriptado += cambioLetras[letras.indexOf(textoSeparado[i][j])]
            }else{
                textoEncriptado += textoSeparado[i][j]
            }
        }
        textoEncriptado += " "
  }
  return textoEncriptado
}
function desencriptar () {
    let textoSeparado= texto.value.split(" ")
    for (i = 0; i < textoSeparado.length; i++) {
        for (let j = 0; j < textoSeparado[i].length;j++){
            let existeLetra = letras.includes(textoSeparado[i][j]);
        
            if (existeLetra){
                let index = letras.indexOf(textoSeparado[i][j])
                textoSeparado[i] = textoSeparado[i].replaceAll(cambioLetras[index],letras[index])    
            }
        }
        textoEncriptado += textoSeparado[i]
        textoEncriptado += " "
    }
 return textoEncriptado 
}
// Modificar el css mediante
let botonEncriptar = document.getElementById("boton-encriptar");
let botonDesencriptar = document.getElementById("boton-desencriptar");
let botonCopiar = document.getElementById("btn-copiar")
let bloqueSinmensaje = document.getElementById("bloque-sinmensaje");
let areaTexto = document.getElementById("area-texto");
let bloqueTextoEncriptado = document.getElementById("texto-encriptado")
let mensajeError = document.getElementById("mensaje-error")

function mostrarMensaje (event) {
    if (texto.value !== "") {
        cambiarCss();
        if (event.target.value == "Encriptar"){
            areaTexto.value = encriptar()
        } else if(event.target.value== "Desencriptar"){
            areaTexto.value = desencriptar()
        }
    }else{
        mensajeError.style = "display:block"
        setTimeout(function(){
            mensajeError.style = "display:none"
        },2000);
    }
    textoEncriptado = ""
    texto.value = ""
}
function cambiarCss () {
    bloqueSinmensaje.style = "display:none"
    areaTexto.style = "display:block"
    botonCopiar.style = "display:block"
    if (screen.width < 500){
        bloqueTextoEncriptado.style = "height:400px"
    }
}
function copiarMensaje () {
    navigator.clipboard
    .writeText(areaTexto.value).then(
        (success) => {
            botonCopiar.value = "Copiado!";
            setTimeout(function(){
                botonCopiar.value = "Copiar"
            },2000);
        },
        (err) => console.log("error copying text")
      );
}
botonEncriptar.onclick = mostrarMensaje;
botonDesencriptar.onclick = mostrarMensaje;
botonCopiar.onclick = copiarMensaje;