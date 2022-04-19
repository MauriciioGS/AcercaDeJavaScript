/**
 * Variables
 * 
 * 3 formas de definir variables
 * 
 * var
 * let
 * const
 * 
 */

//variables con VAR funcionan como variables globales 
var nombre = 'Pamela';
console.log(nombre);

var persona = {
    nombre: 'Pamela',
    apellido: 'Espinoza',
    edad: 23,
    direccion: {
        calle: 'Guerrero',
        NumrodeCasa: 6,
    }
}

//variables con LET: funciona solo dentro de bloques de codigo '{}'

/*let nombre = 'Pamela';
console.log(nombre);

{
    let saludo = 'Hola soy Pamela';
    console.log(saludo);
}*/

console.log(saludo); //<-- ERROR porque no funciona fuera del bloque de codigo

/*variables CONST se recomienda escribir los nombres con mayosculas y _
*Siempre se debe inicializar una constante y no se puede redefinirla
*/
const PI = 3.14;

console.log(PI);

var nombre = 'Pamela';
//solo se puede con las comillas invertidad ``
var saludo = `Hola soy ${nombre}  
Como estas?`;

console.log(saludo);