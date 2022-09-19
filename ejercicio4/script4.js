var userOK = "Estudiante";
var passwordOK = "batman17";
var user, password;
var validation = false;
alert("Hola");

do {
    user = prompt("Usuario");
    password = prompt("Password");
    if (user == "Estudiante" && password == "batman17") {
        validation = true;
    } else { alert("Usuario o password incorrecto. Por favor, inténtelo de nuevo");} }
    while (validation == false);
    alert("Usuario y password correctos.");