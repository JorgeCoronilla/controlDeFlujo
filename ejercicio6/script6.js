var lista = ["matemáticas", "historia", "geografía", "lengua", "física", "química", "gimnasia"];
var lista1 = lista;
alert("Esta es la lista:\n " + lista);
var contador;
for (var i = 0; i <= lista.length; i++) {
    for (var j = 0; j < (lista.length - i); j++) {
        if (lista[j] > lista[j+1]) {
            contador = lista[j+1];
            lista[j+1] = lista [j];
            lista[j] = contador;
        }
    }
}
alert("La lista original " + lista1 + "\n y ala lista ordenada " + lista);