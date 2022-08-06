class Articulo{
    contructor(){
        this.nombre;
        this.desc;
        this.precio;
    }
}

// let nombre_art = document.querySelector

let carro = [];

function carrito(articulo){
    let art = document.querySelector('#' + articulo);

    let item = new Articulo();
    item.nombre = art.childNodes[3].childNodes[1].innerText;
    item.desc = art.childNodes[3].childNodes[3].innerText;
    item.precio = parseInt(art.childNodes[3].childNodes[5].childNodes[0].innerText);

    carro.push(item)

    actualizarVista();
}

function actualizarVista (){
    jQuery(() => {
        $('#lista_articulos').html('');
    });

    let total = document.querySelector('#total');
    let total_price = 0;

    carro.forEach(elemento => {
        jQuery(() => {
            $('#lista_articulos').append(`<li class="list-group-item bg-warning mb-3" style="border:none;border-bottom: 1px solid black;">
            ${elemento.nombre} ${elemento.desc} ${elemento.precio}</li>`)
        })

        total_price += elemento.precio
    })


    jQuery(() => {
        $('#total').html(total_price)
    })
    total.innerText = total_price;
}