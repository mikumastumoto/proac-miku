const num =Number(process.argv[2]);
for (let i =1;i<=num;i++){
  let numb=[];
  for (let j =0;j<(i-1)*2;j++){ //ピラミッド＊以外の場所
    numb.push(" ")
  }
  for(let k=0;k<i*2-1;k++){ //*のとこ
    numb.push("*");
  }
  console.log(numb.join(" "))
}
