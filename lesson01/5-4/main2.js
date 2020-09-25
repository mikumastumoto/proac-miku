let json = require('./kobe.json');

function  saiki(json){
  let keys = Object.keys(json)
  for(let i =0;i<keys.length;i++){
    if(keys[i] === "kobe"){
      console.log(json[keys[i]]);
    }else{
      saiki(json[keys[i]])
    }
  }
} 
saiki(json);