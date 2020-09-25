
const number = Number(process.argv[2]);
let numb=[];
for(let i=1;i<=number;i++){
  for (let j =0;j<(i-1)*2;j++){ //ピラミッドの外側
    numb.push(" ");
  }
  for(let k=0;k<i*2-1;k++){ //ピラミッド本体
    numb.push("*");
  }
  
}
console.log(numb.join(" "));