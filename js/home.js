document.addEventListener("DOMContentLoaded", function() {

    inicializarDatePicker(true)
    agregarBotones()
    document.querySelector('#optionFecha').style.background = '#08c'
    document.querySelector('#optionFecha').style.color = 'white'

    var map = L.map('map').setView([41.66, -4.72],15);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map);

    L.control.scale().addTo(map);

    L.marker([41.66, -4.71],{draggable: true}).addTo(map);

});

function inicializarDatePicker(valor){
    $('#rangoFechas').daterangepicker({
        "singleDatePicker": valor,
        "autoApply": true,
        "showCustomRangeLabel": false,
        "alwaysShowCalendars": true,
        "startDate": "14/03/2023",
        "endDate": "18/03/2023",
        "locale": {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Aplicar",
            "cancelLabel": "Cancelar",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "daysOfWeek": [
                "Do",
                "Lu",
                "Ma",
                "Mi",
                "Ju",
                "Vi",
                "Sá"
            ],
            "monthNames": [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ],
        }
    });
}

function agregarBotones(){
    let divTest = document.createElement('div')
    divTest.style.display = 'flex'
    divTest.style.borderLeft = '1px solid #eee'
    
    let divOpciones = document.createElement('div')
    divOpciones.style.display = 'block'

    let divFecha = document.createElement('div')
    divFecha.innerText = 'Fecha Unica'
    divFecha.setAttribute('id','optionFecha')
    divFecha.classList.add('botonFechas')

    let divRango = document.createElement('div')
    divRango.innerText = 'Rango de Fechas'
    divRango.setAttribute('id','optionRango')
    divRango.classList.add('botonFechas')

    divOpciones.appendChild(divFecha)
    divOpciones.appendChild(divRango)

    divTest.appendChild(divOpciones)
    
    document.querySelector('.daterangepicker').appendChild(divTest)
    
    document.querySelector('#optionFecha').addEventListener('click',function(){
        modificarCalendario(1)
    },false)
    document.querySelector('#optionRango').addEventListener('click',function(){
        modificarCalendario(2)
    },false)
}

function modificarCalendario(valor){
    console.log("entro a la funcion")
    document.querySelector('#optionFecha').style.background = 'white'
    document.querySelector('#optionRango').style.background = 'white'
    document.querySelector('#optionFecha').style.color = 'black'
    document.querySelector('#optionRango').style.color = 'black'

    if(valor==1){   //single date picker
        inicializarDatePicker(true)
        agregarBotones()
        document.querySelector('#optionFecha').style.background = '#08c'
        document.querySelector('#optionFecha').style.color = 'white'

    }else{          //range date picker
        inicializarDatePicker(false)
        agregarBotones()
        document.querySelector('#optionRango').style.background = '#08c'
        document.querySelector('#optionRango').style.color = 'white'

    }
}



