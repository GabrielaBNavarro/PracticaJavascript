class Cuenta{
    constructor(titular, saldo =0){
        this.titular = titular
        this.saldo = saldo
}
set ingresar(dinero){
    if (dinero<=0|| isNaN(parseFloat(dinero))){
        console.error('Debe ingresar valores positivos')
    return
}
    this.saldo += dinero;
    this.informar;

}
set extraer(valor){
    if(valor > this.saldo){
        console.warn(`Saldo insuficiente. solo puede extraer hasta ${this.saldo}`)
    return
    }
    
    this.saldo-= valor;
    this.informar;


}
get informar(){
    console.log("==============Detalle de la cuenta============")
    console.log(`Titular: ${this.titular}`)
     console.log(`Saldo : ${this.saldo}`)
}

}