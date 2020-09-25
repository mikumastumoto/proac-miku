const users = require('./users.json');
const json =users.users

// console.log(json.users);
let str =[];

for (let i = 0;i<json.length;i++){
  let sal;
  if(json[i].rank==="A"){
    if(json[i].years>=5){
      sal = 3000*(json[i].years)+120000;      
    }else if(json[i].years<5){
      sal = 3000*(json[i].years)+100000;  
    }
  }else if(json[i].rank==="B"){
    sal = 4000*(json[i].years)+140000;  
  }else if(json[i].rank==="C"){
    sal = 5000*(json[i].years)+160000;    
  }  
  str.push([json[i].name,';',sal]);
  
  // console.log(str)
}
      
  //sort の関数
      str.sort(function(a,b){
        if(a[2]>b[2]){
          return -1;
        }else{
          return 1;
        }
      })
      
    for(let j = 0;j<str.length;j++){
      console.log(str[j].join(''));
    }


