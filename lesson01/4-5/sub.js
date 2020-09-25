//入力された数値の数(args.length) = 配列の要素数
const array = []; //入力した要素を入れる配列
for (let i = 2; i < process.argv.length; i++) {
  array.push(process.argv[i]);
}
for (let i = 0; i < array.length; i++) {
  let min; //比較した時に小さい方を入れる変数
  for (let j = 0; j < array.length; j++) {
    if (array[i] < array[j]) {
      min = array[i];
      array[i] = array[j];
      array[j] = min;
    }
  }
}
console.log(array);