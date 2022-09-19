var userOK = "Estudiante";
var passwordOK = "batman17";
var user, password, contador = 3;
var validation = false;
alert("Hola");

do {
    user = prompt("Usuario");
    password = prompt("Password");
    if (user == "Estudiante" && password == "batman17") {
        validation = true;
    } else { contador --;
        alert("Usuario o password incorrecto.");
       }
       if (contador > 1 && validation == false) {
        alert("Piensa mejor, todavía tienes " + contador + " intentos.");
       } else if (contador == 1 && validation == false) {
        alert("Piensa mejor, todavía tienes " + contador + " intento.");
       }
     }
    while (validation == false && contador > 0);
    if (validation == true) {
        alert("Usuario y password correctos.");} else {
            alert("Has agotado tus tres intentos");
        }
    