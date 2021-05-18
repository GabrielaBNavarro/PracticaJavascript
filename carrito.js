let carrito = ['sal','aceite','azucar','arroz','fideos','fideos2','pan','tomate','salame']
function agregarProducto() {
   let producto= prompt ("Ingrese un producto")
   while (producto){
       carrito.push(producto.trim().toLowerCase())
       producto= prompt ("Ingrese un producto")

   }
    
}
function listarProductos(){
    for (producto of carrito){
        console.log(producto)
    }
    return "Fin del carrito";
}
function listarProductos2(){
    console.log("Productos del carrito")
    carrito.map(function (producto, index){
        console.log(`${index +1} - ${producto}`)
    })
}
function buscarProducto(){
   let producto= prompt("Ingrese el producto que desea buscar")
   if(producto){ 
   let encontrado = carrito.find(produc => produc== producto.trim().toLowerCase())
   if (encontrado){

    return "Se encontró el elemento " + encontrado}
    else{
        return "No se encontró el producto en el carrito"
    }}
   else {
       console.error("No se ingresó producto a buscar")
   }    
    
    
}


function filtrarProductos(prod){
    prod=prod.toLowerCase()
    let encontrados= []
    for (let producto of carrito){
        if(producto.startsWith(prod)){
            encontrados.push(producto)
        }
    }
    if (encontrados != ""){
    return encontrados.join('-');
    } else {
        return "No se han encontrados productos"
    }
}
function filtrarProductos2(){
    let producto = prompt("Ingrese el producto o palabra")
    if(producto){
        let productos= carrito.filter(function(produc){
            return produc.indexOf(producto.trim().touppercase()) > -1
        }) 
        if (productos.lenght > 0){
            return productos;
        } else{
            console.error("No se encontró ningún producto con esa búsqueda")
        }
    }else{
        console.error("Campo vaciío o cancelado")
    }
}
function eliminarProducto(producto){
    producto= producto.toLowerCase()
    let posicion=carrito.indexOf(producto)
    if (posicion >=0){
            
    carrito.splice(posicion,1)
    return "El producto fue eliminado del carrito"}
    else{ 
        return "El producto no puede ser eliminado porque no está en el carrito"
    }
}

function eliminarProducto2() {
    let pos = prompt("Ingrese el número del producto a eliminar");
    if (pos) {
      pos = parseInt(pos);
      let producto = carrito[pos - 1];
      if (producto !== undefined) {
        let validar = confirm(`Esta seguro que quiere eliminar ${producto}`);
        if (validar) {
          carrito.splice(pos - 1, 1);
          console.log(`Eliminado el producto ${producto}`);
          listarProductos();
        }
      } else {
        console.error("No hay producto con esa posición");
      }
    } else {
      console.error("Ocurrió un error y no es posible realizar la acción");
    }
  }
