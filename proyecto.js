document.addEventListener("DOMContentLoaded", function() {
    var selectsNegocio = document.querySelectorAll("#matrizNegocio select");
    var calcularNegocio = document.getElementById("calcularNegocio");
    var resultadoNegocio = document.getElementById("resultadoNegocio");

    calcularNegocio.addEventListener("click", function() {
        var totalPuntaje = 0;
        var allSelected = true;

        selectsNegocio.forEach(function(select) {
            if (select.value === "") {
                allSelected = false;
                return;
            }

            totalPuntaje += parseInt(select.value);
        });

        if (allSelected) {
            var complejidad = calcularComplejidad(totalPuntaje);
            resultadoNegocio.innerText = "Complejidad: " + complejidad;
        } else {
            resultadoNegocio.innerText = "Debe seleccionar una opción en cada select.";
        }
    });

    function calcularComplejidad(puntaje) {
        if (puntaje >= 8 && puntaje <= 12) {
            return "Baja";
        } else if (puntaje >= 13 && puntaje <= 20) {
            return "Media";
        } else {
            return "Alta";
        }
    }

    var selectsTecnologia = document.querySelectorAll("#matrizTecnologia select");
    var calcularTecnologia = document.getElementById("calcularTecnologia");
    var resultadoTecnologia = document.getElementById("resultadoTecnologia");

    calcularTecnologia.addEventListener("click", function() {
        var totalPuntaje = 0;
        var allSelected = true;

        selectsTecnologia.forEach(function(select) {
            if (select.value === "") {
                allSelected = false;
                return;
            }

            totalPuntaje += parseInt(select.value);
        });

        if (allSelected) {
            var complejidad = calcularComplejidad(totalPuntaje);
            resultadoTecnologia.innerText = "Complejidad: " + complejidad;
        } else {
            resultadoTecnologia.innerText = "Debe seleccionar una opción en cada select.";
        }
    });
});
