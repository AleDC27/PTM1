String.prototype.repeatify=function(x){
    if(x<0){
      return ""
    };
    let acc=0;
    let j=this;
    if(acc<x){
      return j+this.repeatify(x-1) 
    }return ""
  }
  let a="hola";
  a.repeatify(3)//holaholahola
  a.repeatify(0)//""

//   String.prototype.repeatify=function(x){
//     if(x<=0){
//       return ""
//     };
//     let acc=0;
//     let j="";
//   for(let i=0;i<x;i++){
//     j=j+this
//   }
//     return j
//   }