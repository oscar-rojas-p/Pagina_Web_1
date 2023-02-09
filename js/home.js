let fecha = new Date();
let fechaFormato = fecha.toLocaleDateString();

document.getElementById('btnIngreso').addEventListener('click',function(){
    console.log("la fecha de hoydia es: ",fecha.toLocaleDateString());
});

//document.querySelector('#fechaHoy').innerHTML = "fechaFormato"

function guardarIngreso(){
    let monto = document.querySelector('#inputMonto')
    let modal = document.querySelector('#miModal')
    console.log("se guardo el monto: ",monto.value)
    modal.setAttribute('data-dismiss','modal')
}