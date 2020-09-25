const money =Number(process.argv[2])
if(money/100===0){
  console.log('100円玉は${money}枚');
}else if(money/10===0){
  console.log('10円玉は${money}枚');
}else{
  console.log('1円玉は${money}枚');
}


