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


