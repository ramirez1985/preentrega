let salumeria = [
    {sabor : "Prosciuto" , precio : 20},
    {sabor : "Speck" , precio : 10},
    {sabor : "Prosciuto Crudo" , precio : 5},
]

function inicio(){
   
    alert(`¡Hola! ${nombre.toLocaleUpperCase()} , bienvenido/a a Salumeria Ramirez  `);
}

function agregarProducto(){
    producto = prompt("¿Que producto desea comprar? : \n \n 1 : Prosciuto , $20 \n \n 2 : Speck, $10 \n \n 3 : Prosciuto Crudo , $5");
      if ( producto=== "1"){
        
        tipo = salumeria[0].sabor;
        resultado = salumeria[0].precio;
        alert(`Eligio ${tipo}, Precio: $ ${resultado}`);
        carrito.push(salumeria[0]);

      }
      if ( producto=== "2"){
        
        tipo = salumeria[1].sabor;
        resultado = salumeria[1].precio;
        alert(`Eligio ${tipo}, Precio: $ ${resultado}`);
        carrito.push(salumeria[1]);
      }
      if ( producto=== "3"){
       
        tipo = salumeria[2].sabor;
        resultado = salumeria[2].precio;
        alert(`Eligio ${tipo}, Precio: $ ${resultado}`);
        carrito.push(salumeria[2]);
      }
      opcion = prompt("Que desea realizar \n \n 1 : Realizar otra compra  \n 2 : Mas Vendido \n 3 : Mostrar Carrito \n 4 : Pagar Compra \n \n 5 : Salir ");
}

function masVendido(){
    let masVendidos = salumeria.filter((producto)=> producto.precio < 5 );
    for(let masVendido of masVendidos){
        alert(`Salumeria : ${masVendido.sabor} a : $${masVendido.precio}`);

    }
    opcion = prompt("Que desea realizar \n \n 1 : Realizar compra  \n 2 : Mas Vendido \n 3 : Mostrar Carrito \n 4 : Pagar Compra \n \n 5 : Salir ");
}

function mostrarCarrito(){
    carrito.forEach((producto)=>{
        alert(`Salumeria ${producto.sabor} $${producto.precio} `)
    })
    opcion = prompt("Que desea realizar \n \n 1 : Realizar compra  \n 2 : Mas Vendido \n 3 : Mostrar Carrito \n 4 : Pagar Compra \n \n 5 : Salir ");
}


function finalizarCompra(){
    let total = carrito.reduce((acc, el) => acc + el.precio , 0);
    alert(`el TOTAL es : $${total + 5} (incluye $5 de gastos de envio)`);
}

let producto;
let carrito = [];
let nombre = prompt("Bienvenido , por favor ingrese su Nombre");
inicio();

let opcion = prompt("¿Que desea realizar? \n \n 1 : Comprar Salumeria \n 2 : Mas Vendido \n \n \n 5 : Salir    ");

while(opcion!== "5"){
    if(opcion === "1"){
        agregarProducto();
    }
    if (opcion=== "2"){
        masVendido();
    }
    if (opcion === "3"){
        mostrarCarrito();
    }
    if(opcion === "4"){
        finalizarCompra();
      opcion = "5";
    }
}

alert(`¡Gracias por su compra ${nombre.toLocaleUpperCase()} , que la disfrute!`);