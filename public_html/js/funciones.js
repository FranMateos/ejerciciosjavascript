/* window.onload = tipoDato(); */
bidim = [[true, true], [true, false], [false, false], [false, true]];
unidim = [true, false];
var negacion = new Function("valor", "return !valor");
var conjuncion = new Function("valor1", "valor2", "return valor1&&valor2");
var disyuncion = new Function("valor1", "valor2", "return valor1||valor2");
var implicacion = new Function("valor1", "valor2", "return !(valor1&&!valor2)");
var bicondicional = new Function("valor1", "valor2", "return (valor1 ? (valor2 ? true : false) : false)");
var disyuncion_exclusiva = new Function("valor1", "valor2", "return (valor1 ? (valor2 ? false : true) : (valor2 ? true : false))");
var negacion_disyuncion_exclusiva = new Function("valor1", "valor2", "return !disyuncion_exclusiva(valor1, valor2)");
var operadores = ['Conjunción', 'Disyunción', 'Implicación', 'Bicondicional', 'Disyuncion exclusiva', 'Negación disyunción exclusiva'];
var opciones = [conjuncion, disyuncion, implicacion, bicondicional, disyuncion_exclusiva, negacion_disyuncion_exclusiva];

function pedirDato() {
    return prompt('Introduce cadena: ');
}

function pedirDatoMensaje(mensaje) {
    return prompt(mensaje);
}

function pedirNumeros() {

    var dato1;
    var dato2;
    while (true) {
        dato1 = pedirDato();
        dato2 = pedirDato();
        try {
            if (dato1 == "" || dato2 == "") {
                throw "vacío";
            }
            if (isNaN(dato1) || isNaN(dato2)) {
                throw "no es un número";
            }
            dato1 = Number(dato1);
            dato2 = Number(dato2);
            return [dato1, dato2];
        } catch (err) {
            alert("Los datos introducidos no son correctos");
        }
    }
}

function pedirNumero() {

    var dato1;
    while (true) {
        dato1 = pedirDato();
        try {
            if (dato1 == "") {
                throw "vacío";
            }
            if (isNaN(dato1)) {
                throw "no es un número";
            }
            dato1 = Number(dato1);
            return dato1;
        } catch (err) {
            alert("Debe introducir un número");
        }
    }
}

function pedirNumeroMensaje(mensaje) {

    var dato1;
    while (true) {
        dato1 = pedirDatoMensaje(mensaje);
        try {
            if (dato1 == "") {
                throw "vacío";
            }
            if (isNaN(dato1)) {
                throw "no es un número";
            }
            dato1 = Number(dato1);
            return dato1;
        } catch (err) {
            alert("Debe introducir un número");
        }
    }
}