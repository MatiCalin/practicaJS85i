// En la siguiente linea, tenes una función para validar la edad de ingreso de un boliche con distintas opciones según la edad que tenga la persona. Tu tarea es optimizar este codigo de la mejor manera para disminuir la cantidad de lineas.

const edadBoliche = (edad) =>{
    if (edad >= 18){
        console.log("Estas autorizado a comprar bebidas alcoholicas en el boliche");
    } else if (edad < 18 && edad >= 16){
        console.log("Podes ingresar al boliche pero no comprar bebidas alcoholicas");
    } else {
        console.log("Lo siento no podes ingresar esta noche");
    }
}

