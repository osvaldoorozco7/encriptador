function encriptarMensaje() {

    var frase = document.getElementById('text_in').value;
    let fraseEncriptada = [];


    for (var x = 0; x < frase.length; x++) {
            if (frase[x] == 'a') {
                fraseEncriptada.push('ai');
            }
            else if (frase[x] == 'e') {
                fraseEncriptada.push('enter');
            }
            else if (frase[x] == 'i') {
                fraseEncriptada.push('imes');
            }
            else if (frase[x] == 'o') {
                fraseEncriptada.push('ober');
            }
            else if (frase[x] == 'u') {
                fraseEncriptada.push('ufat');
            }
            else {
                fraseEncriptada.push(frase[x]);
            }
        }

    let result = fraseEncriptada.toString();
    console.log(result.replaceAll(',', ''))

    document.getElementById("text_out").innerHTML = result.replaceAll(',', '');
}

function desencriptarMensaje () {
    var frase = document.getElementById('text_in').value;
    let fraseDesEncriptada = [];

    console.log(typeof(frase))
    console.log(frase.length)

    for (var x = 0; x < frase.length; x++) {
        if (frase[x] == 'a') {
            fraseDesEncriptada.push('a');
            x = x + 1;
        }
        else if (frase[x] == 'e') {
            fraseDesEncriptada.push('e');
            x = x + 4;
        }
        else if (frase[x] == 'i') {
            fraseDesEncriptada.push('i');
            x = x + 3;
        }
        else if (frase[x] == 'o') {
            fraseDesEncriptada.push('o');
            x = x + 3;
        }
        else if (frase[x] == 'u') {
            fraseDesEncriptada.push('u');
            x = x + 3;
        }
        else {
            fraseDesEncriptada.push(frase[x]);
        }
    }

    let result = fraseDesEncriptada.toString();
    console.log(result.replaceAll(',', ''))

    document.getElementById("text_out").innerHTML = result.replaceAll(',', '');
}

function copiarTexto() {
    var textarea = document.getElementById('text_out');
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
}

function borrarTexto () {
    var clear_textarea = document.getElementById('text_in').value = "";
}

var boton_1 = document.getElementById('boton_encriptar');
boton_1.onclick = encriptarMensaje;

var boton_2 = document.getElementById('boton_desencriptar');
boton_2.onclick = desencriptarMensaje;

var botonCopiar = document.getElementById('copiar');
botonCopiar.onclick = copiarTexto;

var botonBorrar = document.getElementById('borrar');
botonBorrar.onclick = borrarTexto;

const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});

const textarea_2 = document.querySelector(".salida_texto");
textarea_2.addEventListener("keyup", a => {
    textarea_2.style.height = "auto";
    let scHeight2 = a.target.scrollHeight;
    textarea_2.style.height = `${scHeight2}px`;
})