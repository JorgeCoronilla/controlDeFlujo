var n1 = parseInt(prompt("Dame un número"));
var n2 = parseInt(prompt("Dame un número"));
var n3 = parseInt(prompt("Dame un número"));

if (n1 < n2 && n1 < n3) {
   alert("El numero menor es " + n1);
} else if (n2 < n1 && n2 < n3) {
   alert("El numero menor es " + n2);
} else if (n3 < n1 && n3 < n2) {
   alert("El numero menor es " + n3);
} else if (n1 == n2 && n1 == n3) { alert("Los tres números son iguales");}

// No hace falta usar parseInt