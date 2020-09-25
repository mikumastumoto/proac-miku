const number = process.argv[2] //引数で指定された時刻
//分ける
const str = number.split(':'[0])
//console.log(str);

const hours = Number(str[0]) //文字列を数値に変換
const minutes = Number(str[1])
//console.log(hours,minutes);

if(minutes>14){
  if(hours===23){
    console.log(0);
  }else if (hours<23){
    console.log(hours+1);
  }
  console.log((minutes+45)-60);
}else if (minutes<15){
  console.log(hours,minutes+45);
}
  



