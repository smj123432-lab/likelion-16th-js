// --------------------------------------------------------------------------
// 실습: 변수와 상수
// --------------------------------------------------------------------------
// * 변수 및 상수를 선언하고 콘솔 패널에 출력
//   - var, let / const
//   - 변수는 값을 다시 할당할 수 있음
//   - 변수는 값 할당 없이, 선언만 가능
//   - 상수는 값을 다시 할당할 수 없음
//   - 상수는 선언과 할당이 모두 필요
//   - 변수, 상수 모두 여러 개를 동시 선언 가능
// * 변수 이름 작성 규칙
//   - 문자, 숫자, 기호(_, $)만 사용 가능
//   - 숫자로 시작할 수 없음
// * 변수 이름 작성 형식
//   - variablename → 소문자(lowercase)
//   - VARIABLENAME → 대문자(UPPERCASE)
//   - variable_name → 스네이크케이스(snake_case)
//   - variableName → 카멜케이스(camelCase)
//   - VariableName → 파스칼케이스(ParscalCase)
//   - variable-name → 케밥케이스(kebab-case) ❌ 사용 못함
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// let을 사용한 변수 선언
// --------------------------------------------------------------------------

// 변수 선언과 동시에 값 할당 (대입)

// 변수 선언 (한글, 학습 과정에서는 권장)
let 가지고_있는_사과_개수 = 4;
let 추가_구매힌_사과_개수 = 27;
// 변수 선언 (영어, 권장)
let apples_count = 4;
let ac; //applescount

// console.log("가지고_있는_사과_개수: ", 가지고_있는_사과_개수);
// console.log("추가_구매힌_사과_개수: ", 추가_구매힌_사과_개수);
// console.log("apples_count: ", apples_count);

// truthy ❌ referenceerror: truthy is not defined
// 변수 이름으로 truthy를 사용하면 ✅
let truthy = true;
let falsy = false;
let yes = true;
let no = false;
let 할게요 = true;
let 안할게요 = false;

console.log("truthy: ", truthy);
console.log("falsy: ", falsy);
console.log("yes: ", yes);
console.log("no: ", no);
console.log("할게요: ", 할게요);
console.log("안할게요: ", 안할게요);

// 변수 값 재할당 가능
truthy = false;
console.log("truthy 변수에 재할당된 값: ", truthy);

// 선언만 하고 나중에 할당
let gamePlayer; // 변수 선언
gamePlayer = "라모스"; // 선언된 변수에 값을 할당
console.log(gamePlayer);

// 여러 변수 동시 선언
// let screen_width = 290;
// let screen_height = 842;
// let screen_height = 842,
//   screen_width = 290;
// console.log(screen_height, screen_width);

// 여러 변수 선언만 (값 없이)
let screen_height, screen_width;

// 이후에 선언된 변수에 값 할당
screen_height = 842;
screen_width = 290;
console.log("screen_width = ", screen_width);
console.log("screen_height = ", screen_height);

// --------------------------------------------------------------------------
// const를 사용한 상수 선언
// --------------------------------------------------------------------------

// 상수 선언과 동시에 값 할당 (필수!)
const 상수 = "고정된 값";

// 상수 = "고정된 값";
// console.log(상수);

// 상수 = "변하는 값";
// console.log(상수);

// 상수는 재할당 불가능
// ❌ 에러 발생! TypeError: Assignment to constant variable.

// 상수는 선언과 동시에 할당 필수
// ❌ 에러 발생! SyntaxError: Missing initializer

// 여러 상수 동시 선언

// --------------------------------------------------------------------------
// var를 사용한 변수 선언 (사용 권장 안함)
// --------------------------------------------------------------------------

// var 변수 선언

// var는 재선언 가능 (문제가 될 수 있음)
// ✅ 에러 없음 (하지만 위험!)

// let은 재선언 불가능
// ❌ 에러 발생! SyntaxError

// --------------------------------------------------------------------------
// 변수 이름 작성 규칙
// --------------------------------------------------------------------------

// ✅ 올바른 변수 이름
let cross_meter;
let fontSize;
let px2rem;
let _private;
let $dollor;

// ❌ 잘못된 변수 이름 (주석 처리)
// * 숫자로 시작 불가
// let 26cm ❌
// * 하이픈(-, #, @, !) 사용 불가
//   let #fontSize ❌
//   let @fontSize ❌
//   let cross-meter ❌
// * 공백 사용 불가
//   let cross meter ❌
// * 예약어 사용 불가
//   let break = '부숴라'

// --------------------------------------------------------------------------
// 변수 이름 작성 형식 (네이밍 컨벤션: Naming Convention)
// --------------------------------------------------------------------------

// 소문자 (lowercase) - 간단한 변수
let email;
// 대문자 (UPPERCASE) - 상수
let ADMINISTRATOR;
// 스네이크 케이스 (snake_case) - 변수 이름 권장
let margin_block_start;
// 카멜 케이스 (camelCase) - 변수 또는 함수 이름 권장
let paddingInlineEnd;
// 파스칼 케이스 (PascalCase) - 클래스, 생성자
let SuperMario;
// 케밥 케이스 (kebab-case) - JavaScript에서 사용 불가 ❌
// ❌ 에러 발생!

// --------------------------------------------------------------------------
// 사용자 정보 관리
// --------------------------------------------------------------------------

{
  // 사용자 기본 정보 (let 사용 - 변경 가능)
  // * 사용자 이름
  let userName = "야무";
  // * 사용자 나이
  let userAge = 89;
  // * 사용자 이메일
  let userEmail = "yamoo9@naver.com";

  console.log("변경 전:", userName, userAge, userEmail);

  // 정보 업데이트
  userName = "지훈";
  userAge = 20;
  userEmail = "yamoog@gmail.com";

  console.log("변경 후:", userName, userAge, userEmail);
}
// 시스템 설정 (const 사용 - 변경 불가)
// * 시스템 이름
const SYSTEM_NAME = "macOS";
// * 시스템 버전
const SYSTEM_VERSION = "15.6.2";
// * 최대 로그인 시도 횟수
// const 최대_로그인_시도_회수 = 5
const MAX_LOGIN_ATTEMPTS = 5;
// * 세션 타임아웃
const SESSION_TIMEOUT = 3000;

// --------------------------------------------------------------------------
// 쇼핑몰 상품 관리
// --------------------------------------------------------------------------

// 상품 정보 (변경 가능한 변수)
// * 상품 이름
let productName = "노트북";
// * 상품 가격
let productPrice = 98_000;
// * 상품 재고
let productInventory = 102;
// * 상품 카테고리
let productCategory = "디지털 기기 / 랩탑";

// 시스템 상수 (변경 불가)
// * 부가세 10%
const SURTAX = 0.1;
// * 무료배송 기준 40,000원
const SHIPPING_FREE = 40_000;
// * 최소 주문 금액 10,000원
const MIN_ORDER_AMOUNT = 10_000;

// --------------------------------------------------------------------------
// let vs const 선택 가이드
// --------------------------------------------------------------------------

// const 사용
// 변경할 필요 없는 값

// let 사용
// 값이 변경될 수 있는 값

// --------------------------------------------------------------------------
// 실습 문제
// --------------------------------------------------------------------------

// 문제 1: 학생 정보를 저장하는 변수를 만드세요.
// - 이름 (변경 가능)
let name = "saminjae";
// - 학년 (변경 가능)
let grade = 3;
// - 학번 (변경 불가)
const gradeNumber = 201913029;
// - 학교 이름 (변경 불가)
const schoolName = "hanshin";

console.log("student is ", name, grade, gradeNumber, schoolName);
// 문제 2: 도서관 책 정보를 저장하는 변수를 만드세요.
// - 책 제목 (변경 불가)
const bookName = "자바스크립트";
// - 저자 (변경 불가)
const authorName = "사민재";
// - 대출 가능 여부 (변경 가능)
let isAvailable = true;
// - 대출 횟수 (변경 가능)
let loanCount = 3;

console.log("book is ", bookName, authorName, isAvailable, loanCount);

// 문제 3: 온라인 쇼핑몰 장바구니를 만드세요.
// - 상품명 (변경 불가)
// - 가격 (변경 불가)
// - 수량 (변경 가능)
// - 총 금액 (변경 가능)

// --------------------------------------------------------------------------
// 요약 및 베스트 프랙티스
// --------------------------------------------------------------------------

/*
✅ let vs const 선택 가이드
1. 기본적으로 const 사용 (변경하지 않을 값)
2. 값이 변경되어야 할 때만 let 사용
3. var는 사용하지 않기 (구식, 문제 많음)

✅ 변수 이름 규칙
1. 의미 있는 이름 사용 (x, y 대신 user_name, totalPrice)
2. 카멜케이스 사용 (JavaScript 표준)
3. 상수는 대문자와 언더스코어 (MAX_COUNT, API_KEY)
4. 숫자로 시작 불가
5. 예약어 사용 불가

✅ 좋은 예시
const MAX_USERS = 100
const API_URL = 'https://api.example.com'
let current_user = 'hong@89'
let itemCount = 0

❌ 나쁜 예시
var x = 100               // 의미 없는 이름, var 사용
let user-name = 'hong@89' // 케밥케이스 사용 불가
let 1user = 'kim'         // 숫자로 시작 불가
*/
