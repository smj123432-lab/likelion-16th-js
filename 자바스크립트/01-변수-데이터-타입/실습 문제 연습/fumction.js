// Q1. 함수를 완성하세요
function multiply(a, b) {
  const result = a * b;
  return result;
}

console.log(multiply(10, 5)); // 결과: 50

// Q2. 함수를 완성하세요
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else {
    return "C";
  }
}

console.log(getGrade(95)); // "A"
console.log(getGrade(80)); // "B"
console.log(getGrade(70)); // "C"

// Q3. 함수를 완성하세요
function calculateTotal(prices) {
  let total = 0;
  // 반복문을 사용하여 total에 가격을 계속 더하세요
  for (price of prices) {
    total = total + price;
  }
  return total;
}

console.log(calculateTotal([1000, 500, 2000])); // 3500
// const calculateTotal = [1000, 500, 2000]
// for (price of calculateTotal) {
//   console.log(price[]);

// }

// Q4. 함수를 완성하세요
const users = ["지율", "상연", "민재", "야무"];

function findUser(list, name) {
  let isFound = false;
  // 1. 반복문으로 list를 돈다
  // 2. if문으로 이름이 같은지 확인한다
  // 3. 찾으면 출력하고 멈춘다(break)
  // 4. (심화 도전) 끝까지 없으면 "없다..."는 어떻게 출력할까? (플래그 변수 활용)
  //                                            -> 아직 안배움
  for (exactly of list) {
    if (exactly === name) {
      console.log("칮있다");
      isFound = true;
      break;
    }
  }
  if (isFound === false) {
    // 다 뒤졌는데 깃발이 안 들려있네? 진짜 없는 거다.
    console.log("없다...");
  }
}

findUser(users, "민재"); // "찾았다!"
findUser(users, "호날두"); // "없다..."
