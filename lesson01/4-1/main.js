function compareFunc(a, b) {
  return a - b;
}
const number = [Number(process.argv[2]),Number(process.argv[3]),Number(process.argv[4]),Number(process.argv[5]),Number(process.argv[6])];number.sort(compareFunc); //.sortは引数に比較関数を指定しない場合には文字列として比較されるので引数指定
//console.log(number);
console.log(number[2]);