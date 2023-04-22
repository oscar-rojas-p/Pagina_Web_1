// Highcharts.ganttChart('divHightChart', {

//     xAxis: [{

//         labels: {
//             format: '{value: %d}'
//         },
//     },{

//         labels: {
//             format: '{value: %B}'
//         }
//     }
//     ],

//     yAxis: {
//         uniqueNames: true
//     },

//     accessibility: {
//         point: {
//             descriptionFormatter: function (point) {
//                 var completedValue = point.completed ?
//                     point.completed.amount || point.completed : null,
//                     completed = completedValue ?
//                     ' Task ' + Math.round(completedValue * 1000) / 10 + '% completed.' :
//                     '';
//                 return Highcharts.format(
//                     '{point.yCategory}.{completed} Start {point.x:%Y-%m-%d}, end {point.x2:%Y-%m-%d}.',
//                     { point, completed }
//                 );
//             }
//         }
//     },

//     lang: {

//     },

//     series: [
//         {
//             name: 'Tiempo Teorico',
//             data: [
//                 {
//                     start: Date.UTC(2018, 11, 1),
//                     end: Date.UTC(2018, 11, 2),
//                     completed: 0.95,
//                     name: 'Entregable 1'
//                 },
//                 {
//                     start: Date.UTC(2018, 11, 2),
//                     end: Date.UTC(2018, 11, 5),
//                     completed: 0.444,
//                     name: 'Entregable 2'
//                 },
//                 {
//                     start: Date.UTC(2018, 11, 8),
//                     end: Date.UTC(2018, 11, 9),
//                     completed: 0.141,
//                     name: 'Entregable 3'
//                 },
//                 {
//                     start: Date.UTC(2018, 11, 9),
//                     end: Date.UTC(2018, 11, 19),
//                     completed: {
//                         amount: 0.3,
//                         fill: '#fa0'
//                     },
//                     name: 'Entregable 2'
//                 },
//                 {
//                     start: Date.UTC(2018, 11, 10),
//                     end: Date.UTC(2018, 11, 23),
//                     name: 'Entregable 3'
//                 }
//             ]
//         },
//         {
//             name: 'Tiempo Real',
//             data: [
//                 {
//                     start: Date.UTC(2018, 11, 1),
//                     end: Date.UTC(2018, 11, 2),
//                     completed: 0.95,
//                     name: 'Entregable 1'
//                 },
//                 {
//                     start: Date.UTC(2018, 11, 2),
//                     end: Date.UTC(2018, 11, 5),
//                     completed: 0.444,
//                     name: 'Entregable 2'
//                 },
//                 {
//                     start: Date.UTC(2018, 11, 8),
//                     end: Date.UTC(2018, 11, 9),
//                     completed: 0.141,
//                     name: 'Entregable 3'
//                 },
//                 {
//                     start: Date.UTC(2018, 11, 9),
//                     end: Date.UTC(2018, 11, 19),
//                     completed: {
//                         amount: 0.3,
//                         fill: '#fa0'
//                     },
//                     name: 'Entregable 2'
//                 },
//                 {
//                     start: Date.UTC(2018, 11, 10),
//                     end: Date.UTC(2018, 12, 23),
//                     name: 'Entregable 3'
//                 }
//             ]
//         }
//     ]
// });


function cambiarDatePicker(valorSelect){
    let boleano = true
    if(valorSelect == 2){
        boleano = false
    }
    
    inicializarDatePicker(boleano)
}

inicializarDatePicker(true)


function inicializarDatePicker(valor){
    $('#rangoFechas').daterangepicker({
        "singleDatePicker": valor,
        "autoApply": true,
        "showCustomRangeLabel": false,
        "alwaysShowCalendars": true,
        "startDate": "04/15/2023",
        "endDate": "04/21/2023",
        "locale": {
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
    }, function(start, end, label) {
      console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
}



