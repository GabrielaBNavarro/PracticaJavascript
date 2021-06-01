/*Escribe una clase Producto para crear objetos.
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos,
 el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

let supermercado=[];
class Producto{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre= nombre;
        this.precio= precio;
    }
    imprimeDatos(){
        console.log("==============Detalle del producto============")
        console.log(`Código: ${this.codigo}`)
         console.log(`Nombre : ${this.nombre}`)
         console.log(`Precio :$${this.precio}`)
    }

    
}

supermercado.push(new Producto(111,"Pan",150));
supermercado.push(new Producto(112,"Carne",500));
supermercado.push(new Producto(113,"Fideos",80));


for(let i=0; i<supermercado.length; i++){
    console.log(supermercado[i].imprimeDatos())
}