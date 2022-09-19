var frase = prompt("Escribe una frase");
var letra = prompt("Escribe una letra");
var contador = 0;
for( var i=0; i <= frase.length; i++) {
    if (letra == frase.charAt(i)){
        contador++;
    }
}

if (contador == 0) {
    alert("Tu letra no está en la frase");
    } else if (contador == 1) {
      alert("Tu letra está " + contador + " vez en la frase");
    } else {
        alert("Tu letra está " + contador + " veces en la frase");
    }
