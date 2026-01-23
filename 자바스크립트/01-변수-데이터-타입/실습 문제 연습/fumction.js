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



// 1 / 22

// 1번
function makeIntro(name, age){
  const result = '제 이름은 ' + name + '이고, 나이는 ' + age + '살 입니다.' 
 return result
}
const myIntro = makeIntro("신주하", 23);
console.log(myIntro);

// 2번
const checkDiscount = function(age) {
  if (age >= 65 || age < 19) {
    return true
  } else {
    return false
  }
}


console.log(checkDiscount(70)); // true
console.log(checkDiscount(30)); // false
console.log(checkDiscount(15)); // true

// 3번
const double = (num) => num * 2;

console.log(double(3));

// 4번
// const box = document.querySelector(".box");

// // 1. 함수 정의하기 (기능 만들기)
// function toggleBox(el) {
//   // 여기에 코드를 작성하세요 (힌트: el.classList...)
//   el.classList.toggle('active')
// }

// // 2. 이벤트 연결하기 (사용하기)
// box.addEventListener("click", () => {
//   // 여기서 위에서 만든 함수를 실행하세요.
//   // 인자로 box를 넘겨줘야 합니다.
//   console.log(toggleBox);
// });

// 1
const add = function(x , y) {
  const plus = x + y
  return plus
}
console.log(add(2,3));

// 2
const getLength = function (message) {
  return message.length
}

console.log(getLength('안녕하세요'));


// 3
const square = function(number){
  return number**2
}
console.log(square(4));

// 4
// function sayHello(name) {
//   return "Hello, " + name;
// }

const sayHello = (name) => "Hello, " + name

console.log(sayHello('사민재'));

// 5
const isEven = function(number) {
  if ( number % 2 === 0){
    return true
  } else{
    return false
  }
}

console.log(isEven(4));
console.log(isEven(7));

// 6
const checkAdult = function(age){
  if (age >= 20){
    return '성인'
  } else {
    return '미성년자'
  }
}
console.log(checkAdult(25));

// 7
const findMax = function(num1, num2){
  if (num1 > num2){
    return num1
  } else if(
    num2 > num1
  ){
    return num2
  }else{
    return "뭘 봐"
  }
}

console.log(findMax(10,20));

// 8 학점 계산기
const getGrade = function(number){
  if(number >= 90){
    return 'A'
  }else if(
    number >= 80
  ){ 
    return 'B'
  }else if(
    number >= 70
  ){
    return 'C'
  }else{
    return 'F'
  }
}
console.log(number(80));
