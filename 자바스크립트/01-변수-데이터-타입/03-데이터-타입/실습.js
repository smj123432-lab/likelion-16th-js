// --------------------------------------------------------------------------
// 실습: 데이터 타입
// --------------------------------------------------------------------------
// * 기본 타입 (Primitive Types)
//   - String (문자): 텍스트 데이터
//   - Number (숫자): 실수 또는 정수, 소수 데이터
//   - Boolean (논리): true 또는 false
//   - Null (널): 의도적으로 비어있는 값
//   - Undefined (언디파인드): 값이 할당되지 않음
//   - Symbol (심볼): 고유한 식별자
//   - BigInt (빅인트): 매우 큰 정수
// * 참조 타입 (Reference Types)
//   - Object (객체): 키-값 쌍의 집합
//   - Array (배열): 여러 값의 목록
//   - Function (함수): 실행 가능한 코드 블록
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 문자 (String)
// --------------------------------------------------------------------------

// 작은따옴표로 문자열 생성
const 작은_따옴표 = '작은 따옴표';
// 큰따옴표로 문자열 생성
const 큰_따옴표 = "큰 따옴표";
// 역따옴표로 문자열 생성
const 역따옴표 = `역 따옴표`;
// 문자열 안에 따옴표 사용
let greeting = 'i\'m fine.'
// 이스케이프 문자
// * \n = new line
let escapeSrtingN = '줄바꿈\n문자'
console.log(escapeSrtingN);
// * \t = tab. 
console.log('탭\t문자');

// 문자 + 문자
const materialType = '아이언'
const heroGender = '맨'
const hero = materialType + heroGender
console.log(hero);
console.log('java' + 'script');

// --------------------------------------------------------------------------
// 숫자 (Number)
// --------------------------------------------------------------------------

// 정수

// 실수 (정수 + 소수)
console.log(823+0.73);
// 음수
console.log(-100);

// 과학적 표기법
// 2.5 x 10^6 = 2,500,000
console.log(2.5e6);

// 큰 숫자 1_000_000_000
console.log(1e9);

// 과학적 표기법
// 2.5 × 10^6 = 2,500,000

// 특수 숫자 값
// * Infinity
// * -Infinity
// * NaN

// 숫자 데이터 타입 & 산술 연산자 ( +, -, *, /)
// 수학 산술 연산자 ( +, -, *, /)
// 프로그래밍 산술 연산자 ( +, -, *, /)
// 산술 연산 (숫자 값끼리 연산)
// * 덧셈 연산(add)
console.log(9 + 1);
console.log(100 + -20);
console.log(0.9 + 0.2);
// * 뺄셈 연산(subtract)
console.log(9 - 1);
console.log(100 - -20); 
console.log(0.9 - 0.2);
// * 곱셈 연산(multiply)
console.log(9 * 1);
console.log(100 * -20);
console.log(0.9 * 0.2);    
// * 나눗셈 연산
console.log(9 / 1);
console.log(100 / 20);
console.log(0.9 / 0.2);

// 나머지 연산
console.log(9 % 1);
console.log(100 % 20);
console.log(31 % 5);

// --------------------------------------------------------------------------
// 불리언 (Boolean)
// --------------------------------------------------------------------------

// true 값
console.log(true);
console.log(3 == '3');

// false 값
console.log(false);
console.log(3 === '3');
// --------------------------------------------------------------------------
// 널 (Null)
// --------------------------------------------------------------------------

// null 값 - 의도적으로 비어있음
// 예시:
// * 선택된 인덱스
let selectedIndex = null
console.log(selectedIndex);
selectedIndex = 3
console.log(selectedIndex);
selectedIndex = 1 
console.log(selectedIndex);
// * 로그인 사용자
let logInUser = null
console.log('로그인 유저: ', logInUser);

// 로그인 시도 
// 로그인 성공 
logInUser = '사민재'
console.log('로그인 유저: ', logInUser);
// 로그아웃
logInUser = null
console.log('로그인 유저: ', logInUser);

// --------------------------------------------------------------------------
// 언디파인드 (Undefined)
// --------------------------------------------------------------------------

// 선언만 하고 값을 할당하지 않음
// 1 선언 
// 2 초기화: 의도적으로 값을 할당하지 않음
let memoryStick

console.log(memoryStick);

// undefined vs null 비교
// undefined → 값이 없음 (자동)
// null     → 값이 없음 (의도적)

// --------------------------------------------------------------------------
// 심볼 (Symbol)
// --------------------------------------------------------------------------

// 심볼 생성 - 항상 고유한 값
// const productAIdString = 'abc', 
// productBIdString = 'abc' 
// const productAIdSymbol = Symbol('abc'),
// productBIdSymbol = Symbol('abc')

// 고유한 값인가? (조건: productAId와 productBId가 값이 달라야 한다. )
// 두 값이 같다. true 불리언 평가 (고유하지 않다.)
// console.log('문자를 사용할 때 고유하지 않다? ', productAIdString == productBIdString);
// console.log('심볼를 사용할 때 고유하지 않다? ', productAIdSymbol == productBIdSymboll);
      // 설명이 있는 심볼

// --------------------------------------------------------------------------
// 빅인트 (BigInt)
// --------------------------------------------------------------------------

// 일반 숫자의 한계
// * Number.MAX_SAFE_INTEGER
// * +1 한계 초과  9007199254740992
// * +2 정확하지 않음 9007199254740992

// BigInt 생성 - 숫자 뒤에 n 붙이기
const bigIntLiteral = 1000n
console.log(bigIntLiteral);
// BigInt() 사용
const bigInt = BigInt(1000)
console.log(bigInt);
// BigInt와 Number는 섞을 수 없음
// ❌ 숫자와 빅인트를 더할 경우 에러!
// ✅ 빅인트끼리 더할 경우 가능

// --------------------------------------------------------------------------
// 참조 타입 (Reference Types)
// --------------------------------------------------------------------------

// 함수 (기능, 작업 정의)
function 커미_만들기(원두, 물) {
      // 절차
      // 1. 갈기
      // 2. 물 끓이기
      // 3. 커피 추출
      // 4. 커피 제조
      // 5. 완성 커피 내보내기
      console.log('1. 원두 갈기');
      console.log('2. 물 끓이기');
      console.log('3. 커피 추출');
      console.log('4. 커피 제조');
      console.log('5. 완성 커피 내보내기');
      
}

// 기능 사용(실행, 호출)
커피_만들기('케냐', '뜨거운 물', false)



// 객체
const 커피_메뉴 = {
      이름: '아인슈페너',
      가격: 6_700,
      용량: 'large',
      핫음료: true,
      재료: ['에스프레서', '물', '크림'],
      제조자: '사민재'
}

// 배열


// --------------------------------------------------------------------------
// typeof 연산자
// --------------------------------------------------------------------------

// 기본 타입
// * null
// * undefined
// * String
// * Number
// * Boolean
// * BigInt
// * Symbol

// 참조 타입
// * Object
// * Array
// * Function
