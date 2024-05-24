// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(numbers) {}

/*
// vazifa 1 (create a function to give funny names for people's names)
const first = function (stri) {
  const st = stri.toString();
  return st.charAt(0);
};

const laqab = function (str) {
  if (first(str) === "J") {
    console.log("JACO-JACO");
  } else if (first(str) === "P" || first(str) === "p") {
    console.log("PIKA-PIKA");
  } else if (first(str) === "j") {
    console.log("JANE-JANE");
  }
};
laqab("Jacob");
*/

/*
//vazifa 2 (create a function to convert C to F and F to C)
const gradus = function (str, num) {
  const alph = str.toString();
  // const degre = num.toNumber();
  switch (alph) {
    case "F":
      const fToC = (num - 32) * (5 / 9);
      console.log(fToC);
      break;
    case "C":
      const cToF = num * (9 / 5) + 32;
      console.log(cToF);
  }
};
gradus("F", 50);
gradus("C", 30);
*/

/*
//vazifa 3 (create a function to check whether a year is a leap year or not)
const checkYear = function (year) {
  if (year % 4 === 0 && year % 400 !== 0 && year % 100 !== 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
};
checkYear(2024);
*/

// var isSquare = function (n) {
//   if (n % Math.sqrt(n) === 0) {
//     return true; // fix me
//   } else {
//     return false;
//   }
// };

// console.log(isSquare(10));

/*
// sum two smallest numbers
function sumTwoSmallestNumbers(numbers) {
  const low1 = Math.min(numbers);
  const index1 = numbers.indexOf(low1);

  if (index1 > -1) {
    numbers.splice(index1, 1);
  }
  const low2 = Math.min(numbers);
  return low1 + low2;
}
console.log(sumTwoSmallestNumbers([1, 2, 3, 4, 5]));
*/

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

// get string, convert to number and find highest and lowest
function highAndLow(numbers) {
  const arr = numbers.split(' ').map(function (value, i) {
    return Number(value);
  });
  // console.log(arr);
  const max = arr.reduce(function (acc, value, index) {
    if (acc > value) {
      return acc;
    } else {
      return value;
    }
  }, arr[0]);

  const min = arr.reduce(function (acc, value, index) {
    if (acc < value) {
      return acc;
    } else {
      return value;
    }
  }, arr[0]);

  const str = max + ' ';

  return str + min;
}
console.log(highAndLow('1 2 -3 4 5'));
*/

// let num = 0;
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".increase");
// const number = document.querySelector(".number");

// increase.addEventListener("click", function () {
//   num++;
//   number.textContent = num;
//   if (num >= 0) {
//     number.style.color = "green";
//   }
// });

// decrease.addEventListener("click", function () {
//   num--;
//   number.textContent = num;
//   if (num < 0) {
//     number.style.color = "red";
//   }
// });

// reset.addEventListener("click", function () {
//   num = 0;
//   number.textContent = num;
//   number.style.color = "black";
// });

// CODEWARS CHALLENGES
/*
// replace exclamation marks
// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, '');
// }
// console.log(removeExclamationMarks('hello!!'));

// doubling the array 
const ar = [1, 2, 3];
function maps(x) {
  return x.map(ar => ar * 2);
}
console.log(maps(ar));

function century(year) {
  // Finish this :)
  return;
}
console.log(century(1705));

reverse a sentence
function reverseWords(str) {
  return str
    .split(' ')
    .map(word => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}
console.log(reverseWords('double spaces'));

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
function DNAStrand(dna) {
  //your code here
  return dna
    .replace(/A/g, 't')
    .replace(/T/g, 'a')
    .replace(/G/g, 'c')
    .replace(/C/g, 'g')
    .toUpperCase();
}
console.log(DNAStrand('ATTGC'));

// 348597 => [7,9,5,8,4,3]
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
console.log(digitize(52143));

['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'] => 5
function findNeedle(haystack) {
  // your code here
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
);

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers) {
  return numbers
    .map((items) => items * items)
    .reduce((sum, item) => {
      return sum + item;
    }, 0);
}

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((items) => typeof items == "number");
}

console.log(filter_list([1, 2, "a", "b"]));


/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category 
they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
function openOrSenior(data) {
  const ar = [];
  for (const [index, items] of data.entries()) {
    // console.log(items[0]);
    if (items[0] >= 55 && items[1] > 7) {
      ar.push("Senior");
    } else {
      ar.push("Open");
    }
  }
  return ar;
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

*/
/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
function addBinary(a, b) {
  function convertToBinary1(number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
      num = parseInt(num / 2);
      binary = (num % 2) + binary;
    }
    return binary;
  }
  return convertToBinary1(a + b);
}

console.log(addBinary(5, 9));

function addBinary(a, b) {
  return (a + b).toString(2);   // 2 base system (0s and 1s)
}

console.log(addBinary(5, 9));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
 Essentially, rearrange the digits to create the highest possible number.

 Examples:
 Input: 42145 Output: 54421

 Input: 145263 Output: 654321

function descendingOrder(n) {
  //...
  const res = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return +res;
}

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

console.log(descendingOrder(42145));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Implement a function which convert the given boolean value into its string representation.
booleanToString(true), "true"

function booleanToString(b) {
  //your code here
  return b === true ? "true" : "false";
}

console.log(booleanToString(true));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

alphabetPosition("The sunset sets at twelve o' clock.")  Should return
"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20


function alphabetPosition(text) {
  let strToNum = "";
  for (let i = 0; i < text.length; i++) {
    let code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) {
      strToNum += code - 64 + " ";
    }
  }
  return strToNum.slice(0, strToNum.length - 1);
}

console.log(alphabetPosition("([gma?lz"));

////////////////////////////////////////////////////////////////////////////

find the smallest integer
Given [34, 15, 88, 2] your solution will return 2

function findSmallestInt(args) {
  return Math.min(...args);
}

console.log(findSmallestInt([34, 15, 88, 2]));

////////////////////////////////////////////////////////////////////////////

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".
Input: [0, 1, 4]
Output: "odd"

function oddOrEven(array) {
  //enter code here
  return array.reduce((sum, item) => sum + item, 0) % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 4]));

Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then
it should replace the missing second character of the final pair with an underscore ('_').

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  return str.length % 2 === 0 ? str.match(/.{1,2}/g) : str.match(/.{1,2}/g);
}

console.log(solution("abcdf"));


*/

// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then
// it should replace the missing second character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// function solution(str) {
//   return str.length % 2 === 0 ? str.match(/.{1,2}/g) : str.match(/.{1,2}/g);
// }

// console.log(solution("abcdf"));
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words) {
//   // ...
//   return words.split(" ");
// }

// console.log("is2 Thi1s T4est 3a");

/*
//challenge
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
*/

/*
//challenge
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  let prime = [];
  const rt = str.split(" ").forEach((el, _) => {
    const cal = el.slice(1) + el.slice(0, 1);
    if (cal !== "!" && cal !== "?") {
      prime.push(cal + "ay");
    } else {
      prime.push(cal);
    }
  });

  return prime.join(" ");
}

// function pigIt(str) {
//   return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
// }

console.log(pigIt("Pig latin is cool !"));
*/

//CHALLENGE
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
