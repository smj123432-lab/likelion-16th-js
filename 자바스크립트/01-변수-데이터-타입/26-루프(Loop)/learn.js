// --------------------------------------------------------------------------
// 실습: 반복문 (Loops & Iteration)
// --------------------------------------------------------------------------
// * while : 조건이 참인 동안 계속해서 방을 점검합니다.
// * for : 정해진 횟수만큼 손님에게 인사합니다.
// * for...of : 배열 장부의 손님 이름을 하나씩 꺼냅니다.
// * for...in : 객체 장부의 상세 정보(Key)를 확인합니다.
// --------------------------------------------------------------------------

const draw = (n) => "화면에 " + n + "번째 그림을 그리다.";

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

// --------------------------------------------------------------------------
// for...of 문
// --------------------------------------------------------------------------

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

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

console.log(i);

let whileCount = 0;
const TARGET_COUNT = 20;

while (whileCount < TARGET_COUNT) {
  console.log(whileCount);
  whileCount++;
}

// for문
let forCount = 0;
for (let forCount = 0; forCount < TARGET_COUNT; forCount++) {
  console.log(forCount);
}
