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

function tipoDato() {
    var dato = pedirDato();
    var tipo;
    if (dato === 'true' || dato === 'false') {
        tipo = dato == 'true' ? true : false;
    } else if (!isNaN(dato) && dato.length > 0) {
        tipo = 'numérico';
    } else {
        tipo = 'cadena de texto'
    }
    alert('Tipo de dato ' + tipo + ',dato: ' + dato);
}

function conectoresLogicos() {

    tabla = document.getElementById('tabla');
    // para borrar el nodo interno y no duplicar el contenido de la tabla
    tabla.innerHTML = "";
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    cell.setAttribute("colspan", 3);
    var cellText = document.createTextNode("Negación");
    cell.appendChild(cellText);
    row.appendChild(cell);
    tabla.appendChild(row);
    // for exclusivo negación
    for (i = 0; i < 2; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        cell1.setAttribute("colspan", 2);
        var cellText1 = document.createTextNode(unidim[i]);
        cell1.appendChild(cellText1);
        var cell2 = document.createElement("td");
        cell2.setAttribute("colspan", 2);
        var cellText2 = document.createTextNode(negacion(unidim[i]));
        cell2.appendChild(cellText2);
        row.appendChild(cell1);
        row.appendChild(cell2);
        tabla.appendChild(row);
    }
// for resto de tablas de verdad
    for (x = 0; x < operadores.length; x++) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.setAttribute("colspan", 3);
        var cellText = document.createTextNode(operadores[x]);
        cell.appendChild(cellText);
        row.appendChild(cell);
        tabla.appendChild(row);
        for (i = 0; i < 4; i++) {
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            // se genera el primer elemento
            var cellText1 = document.createTextNode(bidim[i][0]);
            cell1.appendChild(cellText1);
            var cell2 = document.createElement("td");
            var cellText2 = document.createTextNode(bidim[i][1]);
            cell2.appendChild(cellText2);
            var cell3 = document.createElement("td");
            var cellText3 = document.createTextNode(opciones[x](bidim[i][0], bidim[i][1]));
            cell3.appendChild(cellText3);
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            tabla.appendChild(row);
        }
    }
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

function suma() {
    var dato1 = pedirNumeros();
    var dato2 = pedirNumeros();
    alert("El resultado es: " + (dato1 + dato2));
}

function mayor() {
    var numeros = pedirNumeros();
    alert("El mayor es: " + Math.max(numeros[0], numeros[1]));
}

function dividir() {

    var tabla = document.getElementById("tabla");
    var numero = pedirNumero();
    if (numero >= 2) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var cellText = document.createTextNode(numero + " : 2 = " + (numero / 2));
        cell.appendChild(cellText);
        row.appendChild(cell);
        tabla.appendChild(row);
        if (numero >= 4) {
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            var cellText = document.createTextNode(numero + " : 4 = " + (numero / 4));
            cell.appendChild(cellText);
            row.appendChild(cell);
            tabla.appendChild(row);
            if (numero >= 8) {
                var row = document.createElement("tr");
                var cell = document.createElement("td");
                var cellText = document.createTextNode(numero + " : 8 = " + (numero / 8));
                cell.appendChild(cellText);
                row.appendChild(cell);
                tabla.appendChild(row);
            }
        }
    }
}

function paridad(numero) {
    alert("El numero es: " + ((numero % 2 == 0) ? "par" : "impar"));
}

function cuentaAtras(numero) {
        var intervalo=setInterval(function (){contador(numero--, intervalo)}, 1000);
}

function contador(numero, intervalo) {
    if(numero>=0){
    var tabla = document.getElementById('tabla');
    tabla.innerHTML = '';
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    var header = document.createElement('h1');
    var headerText = document.createTextNode(numero);
    header.appendChild(headerText);
    cell.appendChild(header);
    row.appendChild(cell);
    tabla.appendChild(row);
    numero--;
    }else{
        clearInterval(intervalo);
    }
    console.log("numero vale: " + numero);

}