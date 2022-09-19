var n1 = prompt("Dame un número");
var n2 = prompt("Dame un número");
var n3 = prompt("Dame un número");

if (n1 < n2 && n1 < n3) {
   alert("El numero menor es " + n1);
} else if (n2 < n1 && n2 < n3) {
   alert("El numero menor es " + n2);
} else {
   alert("El numero menor es " + n3);
}
// No hace falta usar parseInt
