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
