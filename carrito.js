let carrito = ['sal','aceite','azucar','arroz','fideos','fideos2','pan','tomate','salame']
function agregarProducto(producto) {
    producto= producto.toLowerCase()
    return carrito.push(producto)
}
function listarProductos(){
    for (producto of carrito){
        console.log(producto)
    }
    return "Fin del carrito";
}
function buscarProducto(producto){
   producto= producto.toLowerCase()
   let encontrado = carrito.find(produc => produc== producto)
        
    
    console.log(encontrado)
    if (encontrado != null){

    return "Se encontró el elemento " + encontrado}
    else{
        return "No se encontró el producto en el carrito"
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
