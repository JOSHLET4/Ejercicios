function horainicio() {
    var hoy = new Date();
    var hora = hoy.getHours();
    var minuto = hoy.getMinutes();
    var segundo = hoy.getSeconds();

    var ap = (hora < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hora = (hora == 0) ? 12 : hora;
    hora = (hora > 12) ? hora - 12 : hora;

    hora = revisionHora(hora);
    minuto = revisionHora(minuto);
    segundo = revisionHora(segundo);

    document.getElementById("reloj").innerHTML = hora + " : " + minuto + " : " + "<strong>" + segundo + "</strong>" + " " +ap;

    var tiempo = setTimeout(function() {
        horainicio();
}, 500);
}

function revisionHora(i) {
    if (i < 10) {
        i = "0" + i;
    } return i
}