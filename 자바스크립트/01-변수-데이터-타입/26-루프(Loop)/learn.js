// --------------------------------------------------------------------------
// 실습: 반복문 (Loops & Iteration)
// --------------------------------------------------------------------------
// * while : 조건이 참인 동안 계속해서 방을 점검합니다.
// * for : 정해진 횟수만큼 손님에게 인사합니다.
// * for...of : 배열 장부의 손님 이름을 하나씩 꺼냅니다.
// * for...in : 객체 장부의 상세 정보(Key)를 확인합니다.
// --------------------------------------------------------------------------

// const draw = (n) => "화면에 " + n + "번째 그림을 그리다.";

// 화면에 [n]번 드로잉하고 싶다.
let count = 0;
const REPEAT_COUNT = 10; // n번

while (count < REPEAT_COUNT) {
  count += 1;
  // continue: [1], [2], 3, 4, [5]
  // break: [1], [2], 3(중단)

  if (count >= 3 && count <= 4) {
    continue; // 현재 코드에서 아래 코드 건너띄고 다시 while 조건 확인 이동
  }

  if (count === 9) {
    break; // 반복문 종료
  }

  draw(count);
  console.log(count); // 1, 2
}

// --------------------------------------------------------------------------
// while 문
// --------------------------------------------------------------------------
// let condition = IterationCount < 5
let IterationCount = 0;
// if (IterationCount < 5) {
//   IterationCount = IterationCount + 1
//   console.log(IterationCount);
// } // else {
// if (IterationCount < 5) {
//   IterationCount = IterationCount + 1
//   console.log(IterationCount);
// } // else {
// if (IterationCount < 5) {
//   IterationCount = IterationCount + 1
//   console.log(IterationCount);
// } // else {
// if (IterationCount < 5) {
//   IterationCount = IterationCount + 1
//   console.log(IterationCount);
// } // else {
// if (IterationCount < 5) {
//   IterationCount = IterationCount + 1
//   console.log(IterationCount);
// } // else {
// if (IterationCount < 5) {
//   IterationCount = IterationCount + 1
//   console.log(IterationCount);
// } // else {
//   console.log('조건은 거짓');
// }

while (IterationCount < 14) {
  IterationCount++;
  console.log(IterationCount);
}

// --------------------------------------------------------------------------
// do...while 문
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// for 문
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 배열 반복 (역순/정순)
// --------------------------------------------------------------------------

const numbers = ["하나", "둘", "셋", "넷", "다섯", "여섯", "일곱"];
//                0      1     2    3.    4.     5.     6
// {
//   let i = 0
//   while (i < numbers.length) {
//     const number = numbers[i]
//     console.log(number);
//     i++
//   }
// }

// {
//   do {
//     let i = 0;
//     const number = numbers[i];
//     console.log(number);
//     i++;
//   }(i < numbers.length)
// }

{
  for (let i = 0; i < numbers.length; ++i) {
    const number = numbers[i];
    console.log(number);
  }
}

{
  const books = ["HTML 공장", "CSS 드레스샵", "JavaScript 트레이닝룸"];
  // 도서 이름 출력 (반복)
  let i = 0;
  while (i < books.length) {
    const bookName = books[i];
    console.log(bookName);
    i = i + 1;
  }
}

const webFrameworks = ["react", "vue.js", "svelte", "angular", "solid.js"];

// for문
// for (let i = webFrameworks.length - 1; i >= 0; i--) {
//   const frameWorkName = webFrameworks[i];
//   console.log(i, frameWorkName);
// }

// --------------------------------------------------------------------------
// for...of 문
// --------------------------------------------------------------------------

for (const frameWorkName of webFrameworks) {
  console.log(frameWorkName);
}

const personList = [
  { name: "박주영", age: 22 },
  { name: "최한나", age: 31 },
  { name: "김상준", age: 29 },
];

for (const person of personList) {
  console.log(person.name);
  console.log(person.age);
}

for (let i = 0; i < personList.length; i++) {
  const person = personList[i];
  console.log(person.name);
  console.log(person.age);
}

for (const person of personList) {
  console.log(person.name);
  console.log(person.age);
}

function draw(i) {
  console.log(i + "번 동안 실행됩니다");
}
for (let i = 0; i < 50; i++) {
  draw(i);
}
for (let i = 0; i < 20; i = i + 1) {
  // [특정 상황] 흐름 제어
  // i 값이 6 ~ 14인 동안, draw(i) 건너뛰어 이어가기
  if (i > 5 && i < 15) continue;
  console.log(i);
}
// --------------------------------------------------------------------------
// for...in 문 (객체 반복)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. while 문은 반복 횟수가 정해지지 않았을 때 유리합니다.
// 2. for 문은 인덱스(i)가 필요하거나 정해진 범위 반복에 최적입니다.
// 3. 배열 순회 시에는 가독성이 좋은 for...of를 적극 활용하세요.
// 4. 객체의 속성을 훑을 때는 for...in을 사용합니다.
// 5. break는 루프 탈출, continue는 이번 차례만 건너뛰기입니다.
// --------------------------------------------------------------------------

// 조건 (while) {
// 블록 안에 실행할 코드
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// console.log(i);

// let whileCount = 0;
// const TARGET_COUNT = 20;

// while (whileCount < TARGET_COUNT) {
//   console.log(whileCount);
//   whileCount++;
// }

// for문

// for (let forCount = 0; forCount < TARGET_COUNT; forCount++) {
//   console.log(forCount);
// }
// let forCount = 0;
// while ( forCount < TARGET_COUNT) {
//   console.log(forCount);
//   forCount++
// }

for (let i = 0; i < 15; ++i) {
  // [특정 상황] 흐름 제어
  // i 값이 15일 때 반복문 종료하기

  console.log(i);
}
const mj = ["폰", "차", "헤드셋", "헤드셋", "노트북"];
for (let i = 0; i < mj.length; i++) {
  if (mj[i] === "노트북") {
    console.log(mj[i]);
  }
}

const message = "아따 오늘 추워뒤져블겄네";
console.log(message.length);

for (const charater of message) {
  console.log(charater);
} // for...of는 반복 가능한 객체만 사용 가능
// 일반 객체는 반복 가능하지 않아서 사용할 수 없어요

const teacher = {
  name: "김데레사",
  age: 21,
  subjects: ["웹 표준/접근성", "HTML", "CSS", "Tailwind CSS", "Sass"],
};

const teachers = [teacher];

// teacher 객체를 반복(속성 별, 값을 출력)
// for...of 문 쉽던데? 이걸 써볼까?
for (const property of [teacher]) {
  console.log(property);
}

for (const property in teacher) {
  const value = teacher[property];
  console.log(property);
  console.log(value);
}

// 객체 순환 (객체가 가진 속성을 모두 탐색해서 값을 확인)
const points = {
  x: 10,
  y: 13,
  z: 8,
};
// const propertyName = 'x'

console.log("x" in points);
console.log(points.x);
// console.log(points[propertyName]);
console.log(points["x"]);

for (const propertyName in points) {
  console.log(propertyName);
  // 값 = 객체['속성이름']
  const value = points[propertyName];
  console.log(value);
}

// 폴 인은 객체 순환
// 오브는 배열 순환

{
  // 배열도 폴 인문 사용 가능? 권장 하지는 않음
  const personList = [
    { name: "박주영", age: 22 },
    { name: "최한나", age: 31 },
    { name: "김상준", age: 29 },
  ];

  for (const person of personList) {
    console.log(person);
  }

  for (const index in personList) console.log(index);
  const person = personList;
  console.log(person);
}

// function traw() {
//   console.log('?');
// }

// let i = 10

// while (i-- > 0) {
//   i--;
//   traw(i);
// }

// 1
for (let i = 0; i < 100; i += 1) {
  if (i % 2 === 0) console.log(i);
}

// 2
let countDown = 10;
while (countDown > 0) {
  console.log(countDown);
  countDown--;
}

const fruits = ["사과", "바나나", "귤", "복숭아"];
for (const fruit of fruits) {
  console.log(fruit);
}

const student = {
  name: "선호",
  grade: "A",
  age: 22,
};

// 4

let i = 0;
let item; // undefined

const list = ["0124", "8291", "8259", "3001", "9073"];
const input = "3001";

do {
  item = list[i];
  // i = i + 1
  // i += 1
  i++;
  console.log(item);
} while (input !== item);

console.log(item);

for (const key in student) {
  const value = student[key];
  console.log(key);
  console.log(value);
}

for (let i = 0; i < 20; i++) {
  if (i > 4 && i < 11) continue;
  if (i === 17) break;
  console.log(i);
}
