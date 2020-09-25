const str = "こはるはるここはるここはるはるここはるこはるはるはる"
let searchk = "こはる";
let searchh ="はるこ";

let flgh = 0;
let flgk = 0;

//こはる
for (let i = 0; i < str.length; i++) {
  let m = i;
  let cnt = 0;
  for (let j = 0; j < searchk.length; j++) {
    if (str[m++] != searchk[j]) {
      break;
    }
    cnt++;
  }
  if (searchk.length == cnt) {
    flgk++;
  }
}
//はるこ
for (let i = 0; i < str.length; i++) {
  let m = i;
  let cnt = 0;
  for (let j = 0; j < searchh.length; j++) {
    if (str[m++] != searchh[j]) {
      break;
    }
    cnt++;
  }
  if (searchh.length == cnt) {
    flgh++;
  }
}

console.log(`こはる:${flgk}`);
console.log(`はるこ:${flgh}`);