'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let acc=num.length-1;
  let decimal=0;
    for(let i=0;i<num.length;i++){
    decimal=decimal +num[i]*2**acc;
    acc=acc-1
  }
  return decimal;

  

//  let array=num.split("").reverse().map((Number));
//  console.log(`array ${array}`);
//let ecuacion=array.map(function(cur,idx){return(2**idx)*cur});
//  console.log(`ecuacion ${ecuacion}`);
//let suma=ecuacion.reduce(function(acc,cur){return acc+cur});
//  console.log(`suma ${suma}`)
//return suma;

//recursividad
// function BinarioADecimal2(num) {
//   if(num){
//     return num[0]*(2**(num.length-1)) + BinarioADecimal2(num.slice(1))
//   }
//   return 0;

}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = [];
  while(num/2 > 0){
    if (num % 2 == 0){
      binario.push(0)
    }
    else {
     binario.push(1) 
    };
    num=Math.floor(num/2);
  }
  return binario.reverse().join("");

 // let a="";
 // let b=0;
 // for(num;num>0;b){
 //   a=(num%2)+a
 //   num=Math.floor(num/2)
 // }
 // return a;
 

//  function DecimalABinario2(num) {
//   if(num/2>0){
//     return num%2+DecimalABinario2(Math.floor(num/2))  
//   }
//   return "";
// }
// DecimalABinario2(4).split("").reverse().join("")
// DecimalABinario2(7).split("").reverse().join("")

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}