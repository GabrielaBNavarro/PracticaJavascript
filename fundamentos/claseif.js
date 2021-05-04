//
/*Sise cumple la condicion
entonces realizar la accion
si no se cumple 
entonces hacer otra cosa*/
let num = parseInt(prompt('ingrese un número'))

if (isNaN(num)){
    console.error('Ingrese un número')
} else{
    
if (num % 2=== 0){
    console.log('El número es par')

} else {
    console.warn('El número no es par')
}

if(num===10){
    console.log('El número es igual a 10')
}else if (num >10){
    console.log('El número es mayor que 10')

}else{
    console.log('El número es menor que 10')
}
}

//fiesta
//Solo puede ingresar un mayor de edad >= 18
// si no es mayor de edad entonces debe ir acompañado de un tutor

let edad = parseInt(prompt('Ingrese su edad'))
let tutor = false
if (edad >= 18){
    console.log('Bienvenido a la JODA!!!')
}else if(tutor===true){
    console.log('Bienvenidos a la JODA! no se separe de su tutor')

} else{
    console.log('Salga de aquí usted no puede disfrutar de la vida')
}

if(edad<18 && tutor===false){
    console.error('Salga de aquí, usted no puede disfrutar de la vida')

}else if(edad>=18|| tutor === true){
    console.log('Bienvenido a la JODA!!')
}