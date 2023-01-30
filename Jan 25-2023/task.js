// TASK                                                             [Jan - 25 - 2023]
// Problem1: 124 ->  one two  

let num = 12345;
let reverse = 0;
let res = '';
while (num != 0) {
  reverse = reverse * 10 + (num % 10);
  num = parseInt(num / 10);
}
while (reverse != 0) {
  switch (reverse % 10) {
    case 0:
      res += 'zero ';
      console.log('0');
      break;
    case 1:
      res += 'one ';
      break;
    case 2:
      res += 'two ';
      break;
    case 3:
      res += 'three ';
      break;
    case 4:
      res += 'four ';
      break;
    case 5:
      res += 'five ';
      break;
    case 6:
      res += 'six ';
      break;
    case 7:
      res += 'seven ';
      break;
    case 8:
      res += 'eight ';
      break;
    case 9:
      res += 'nine ';
      break;
  }

  reverse = parseInt(reverse / 10);
}
console.log(res.trim());

// Problem2: 124 -> one hundred twenty four

function doConvert(val) {
    let oneToTwenty = [
      '',
      'one ',
      'two ',
      'three ',
      'four ',
      'five ',
      'six ',
      'seven ',
      'eight ',
      'nine ',
      'ten ',
      'eleven ',
      'twelve ',
      'thirteen ',
      'fourteen ',
      'fifteen ',
      'sixteen ',
      'seventeen ',
      'eighteen ',
      'nineteen ',
    ];
    let tenth = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];
  
    let num = ('0000000' + val)
      .slice(-7)
      .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    // console.log(num);
    if (!num) return;
  
    let outputText =
      num[1] != 0
        ? (oneToTwenty[Number(num[1])] ||
            `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + ' million '
        : '';
  
    outputText +=
      num[2] != 0
        ? (oneToTwenty[Number(num[2])] ||
            `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + 'hundred '
        : '';
    outputText +=
      num[3] != 0
        ? (oneToTwenty[Number(num[3])] ||
            `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + ' thousand '
        : '';
    outputText +=
      num[4] != 0
        ? (oneToTwenty[Number(num[4])] ||
            `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + 'hundred '
        : '';
    outputText +=
      num[5] != 0
        ? oneToTwenty[Number(num[5])] ||
          `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
        : '';
  
    return outputText;
  }
  
  let num = doConvert(123231);
  console.log(num);

// Problem3: SUM 67 -> 13

let num = 23;
let sum = 0;
let check = num.toString().split('');

for (let index = 0; index < check.length; index++) {
  sum += +check[index];
}

console.log(sum);

// Problem4: SUM 67 -> 13 -> 4

let num = 5145166655;
let sum = 0;
let val = 0;
let check = num.toString().split('');

for (let index = 0; index < check.length; index++) {
  sum += +check[index];
}

let ans = sum.toString().split('');

for (let index = 0; index < ans.length; index++) {
  val += +ans[index];
}

console.log(val);
