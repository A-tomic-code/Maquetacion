let consultas = [];

function getInfo(){
    let info = {};

    let nombre = document.querySelector('#nombre').value;
    let origen = document.querySelector('#origen').value;
    let destino = document.querySelector('#destino').value;
    let nPersonas = document.querySelector('#nPersonas').value;
    let fecha = document.querySelector('#fecha').value;

    info.nombre = nombre;
    info.origen = origen;
    info.destino = destino;
    info.nPersonas = nPersonas;
    info.fecha = fecha;

    return info
}

function recogerInfo() {
    let info = getInfo();
    consultas.push(info);

    let table = document.querySelector('.table')
    let table_HTML =
        `<tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Destino</th>
            <th>Personas</th>
            <th>Fecha</th>
        </tr>`;

    for (let i = 0; i < consultas.length; i++) {
        table_HTML +=
            `<tr>
                    <th>${consultas[i].nombre}</th>
                    <th>${consultas[i].origen}</th>
                    <th>${consultas[i].destino}</th>
                    <th>${consultas[i].nPersonas}</th>
                    <th>${consultas[i].fecha}</th>
                </tr>`
    }

    table.innerHTML = table_HTML;

    document.querySelector('.data').classList.remove('hidden')
    document.querySelector('form').reset();
}

function filtrar() {
    let info = getInfo();
    let destino = info.destino.toLowerCase();

    if (destino == 'canarias' || destino == 'mallorca' || destino == 'galicia'){
        console.log(info);
    }

}
