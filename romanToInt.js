/**
 * @param {string} s
 * @return {number}
 */

// let stringo = 'this';
// console.log(stringo[0]);

// // MMMD
// var romanToInt = function (str) {
//   let leng = str.length - 1;
//   let num = 0;
//   let ans = 0;
//   if (str[num] == 'M') {
//     ans += 1000;
//     // num[0]
//   } else if (str[num] == 'C') {
//     ans += 100;
//     num++;
//     // num[1]
//     if (str[num] == 'M') {
//       ans += 800;
//     } else if (str[num] == 'D') {
//       ans += 300;
//     } else if (str[num] == 'C') {
//       num++;
//       ans += 100;
//       // num[2]
//       if (str[num] == 'C') {
//         ans += 100;
//       }
//     }
//   } else if (str[num] == 'D') {
//     ans += 500;
//     num++;
//     if (str[num] == 'C') {
//       ans += 100;
//       num++;
//     }
//     if (str[num] == 'C') {
//       ans += 100;
//       num++;
//     }
//     if (str[num] == 'C') {
//       ans += 100;
//       num++;
//     }
//   }

//   console.log(ans);
// };
// romanToInt('D');

// M = 1000
// CM = 900
// DCCC = 800
// DCC = 700
// DC = 600
// D = 500
// CD = 400
// CCC = 300
// CC = 200
// C = 100

// DCCC = 800
// DCC = 700
// DC = 600
// D = 500

var romanToInt = function (s) {
  let answer = 0;
  for (i = s.length - 1; i >= 0; i--) {
    console.log('big i', i);
    switch (s[i]) {
      case 'I':
        answer += 1;
        console.log('Ii3', i);
        console.log('I value', answer);
        break;
      case 'V':
        if (s[i - 1] === 'I') {
          answer += 4;
          i -= 1;
          console.log('Vi1', i);
        } else {
          answer += 5;
          console.log('Vi2', i);
        }
        console.log('V value', answer);
        break;
      case 'X':
        if (s[i - 1] === 'I') {
          answer += 9;
          i -= 1;
          console.log('Xi1', i);
        } else {
          answer += 10;
          console.log('Xi2', i);
        }
        console.log('X value', answer);
        break;
      case 'L':
        if (s[i - 1] === 'X') {
          answer += 40;
          i -= 1;
          console.log('Li1', i);
        } else {
          answer += 50;
          console.log('Li2', i);
        }
        console.log('L value', answer);
        break;
      case 'C':
        if (s[i - 1] === 'X') {
          answer += 90;
          i -= 1;
          console.log('Ci1', i);
        } else {
          answer += 100;
          console.log('Ci2', i);
        }
        console.log('C value', answer);
        break;
      case 'D':
        if (s[i - 1] === 'C') {
          answer += 400;
          i -= 1;
          console.log('Di1', i);
        } else {
          answer += 500;
          console.log('Di2', i);
        }
        console.log('D value', answer);
        break;
      case 'M':
        if (s[i - 1] === 'C') {
          answer += 900;
          i -= 1;
          console.log('Mi1', i);
        } else {
          answer += 1000;
          console.log('Mi2', i);
        }
        console.log('M value', answer);
        break;
    }
  }
  console.log('answer', answer);
};
// console.log("correct answer 3724");
// romanToInt("MMMDCCXXIV");
// 3724
romanToInt('VI');
// 23
// romanToInt("XLVII");
// 47
// romanToInt("MMDCCXXXI");
// 99
