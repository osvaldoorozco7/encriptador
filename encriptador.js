var frase = prompt('Ingrese mensaje a encriptar.');
var frase_encriptada = [];

for (var x = 0; x < frase.length; x++) {
    if (frase[x] == 'a') {
        frase_encriptada.push('ai')
    }
    else if (frase[x] == 'e') {
        frase_encriptada.push('enter')
    }
    else if (frase[x] == 'i') {
        frase_encriptada.push('imes')
    }
    else if (frase[x] == 'o') {
        frase_encriptada.push('ober')
    }
    else if (frase[x] == 'u') {
        frase_encriptada.push('ufat')
    }
    else {
        frase_encriptada.push(frase[x])
    }
}

var withoutCommas = frase_encriptada.toString();
var pantallaEncriptar = document.querySelector('text_in');

console.log(pantallaEncriptar)
console.log(withoutCommas.replaceAll(',',''))