/*function crearContador(){
  let contador=0;
  return function(){
    contador++;
    return contador
  }
};
crearContador()()
const contador1=crearContador();
contador1()+ " contador1"
contador1()+ " contador1"
contador1()+ " contador1"
const contador2=crearContador()
contador2()+" contador2"
contador2()+" contador2"
contador2()+" contador2"
*/

/*Aqui el motor de javascript crea un new execution contexc para contador2 !!NO USA EL MISMO
QUE UTILIZO PARA CONTADOR 1 ES POR ESO QUE INICIALIZA DE CERO¡¡.
CADA VES QUE SE EJECUTA UNA NEW FUCCTION CONTEXC JAVA SCRIPT CREA UN NEW EXECUTION CONTEXC CON UN NEW LEXICAL ENVIRONMENT(ENTORNO DONDE ESTA ESCRITO NUESTRO CODIGO), COMO CADA CONTADOR FUE CREADO EN ENTORNOS DISTINTOS SOLO PUEDEN SER MODIFICADOS POR LAS FUNCIONES QUE PUEDEN ACCEDER A CADA UNO DE ESOS ENTORNOS.*/


//USO DE CLOSURES
//PROTEJER EL ACCESO A VARIABLES

/*function crearContador(){
  let contador=0;
  return function incrementar(){
    contador++;
    return contador
  }
}
EN ESTE EJEMPLO LA UNICA MANERA DE ACCEDER A LA VARIABLE CONTADOR ES INCRFEMENTANDOLO.
PERO SI QUISIERAMOS ACCEDER AL VALOR DE LA VARIABLE O LO QUE PODREIAMOS HACER CON ELLA LO PODEMOS MODIFICAR DE LA SIGUIENTE MANERA
*/
/*
function crearContador(){
  let contador=0;
  return {incrementar:()=>{return ++contador},
         decrementar:()=>{return --contador},
         valor:()=>{return contador}
}
}
let contador1=crearContador();
contador1.incrementar()
contador1.incrementar()
contador1.decrementar()
contador1.valor()
*/
/*PARA ACCEDER AL VALOR DE CONTADOR SOLO PODRIAMOS HACER 
contador1.valor() y esto nos daria el valor,
pero no podemos hacer
contador1.contador=500 ose no podemos modificarlo desde afuera y hacer que valga 500 
solo podemos interactuar internamente con los clousures que creamos incrementar decrementar y valor a eso vamos cuando decimos que la variable esta protejida */

