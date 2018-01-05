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

function menor(numero){
    var numeros=new Array(numero);
    for(i=0;i<numero;i++){
        numeros[i]=pedirNumeroMensaje('Introduce un número válido: ');
    }
    numeros.sort();
    alert('El menor número es: '+numeros[0]);
}


