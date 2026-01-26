// Q1. 함수를 완성하세요
function multiply(a, b) {
  const result = a * b;
  return result;
}
console.log(multiply(10, 5)); // 결과: 50

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else {
    return "C";
  }
}
console.log(getGrade(80));

// 8 학점 계산기
const getScore = function (score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "c";
  } else {
    return "F";
  }
};
console.log(getScore(50));

// const sumUpTo = function(n){
//   let i = 1
//   let total = 0;
//   while(i  =< n;){
//     total = total + i
//     i++
// }
// }
// console.log(sumUpTo(5));

const sumUpTo = function (score) {
  let i = 1;
  let total = 0;
  while (i <= score) {
    total = total + i;
    i++;
  }

  return total;
};
console.log(sumUpTo(5));
