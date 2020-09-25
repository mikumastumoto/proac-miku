let number = [];
let result=[];

for(let i = 2;i<process.argv.length;i++){
  number.push(Number(process.argv[i]))
}
//console.log(number);
for (let k =0;k<=9999;k++){
  for(let j=0;j<=number.length;j++){
    if(k===number[j]){
      result.push(number[j])
    }
  }

}
console.log(result);