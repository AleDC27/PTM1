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

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}