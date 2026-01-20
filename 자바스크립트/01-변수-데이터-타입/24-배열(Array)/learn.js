// --------------------------------------------------------------------------
// 실습: Array 호텔 운영 시스템 (Array Basics)
// --------------------------------------------------------------------------
// * 배열(Array) : 데이터의 목록을 저장하는 특별한 객체
// * 인덱스(Index) : 호텔의 방 번호와 같으며, 반드시 '0'부터 시작함
// * .length : 호텔에 체크인한 총 손님의 수
// * .at() : 뒤에서부터 방을 찾을 수 있는 만능 마스터 키
// --------------------------------------------------------------------------

const members = [101, 201];

console.log(members.length);

let shoppingCart = ["두부", "양파", "오아", "김치", "참치"];
console.log(shoppingCart);

// 자바스크립트 생성자 함수 (Constructor: 객체 생성하는 함수)
// 요구사항: 배열 객체를 생성하고 싶다
// 정석적인 방법: new 생성자_함수()
// 그동안 사용했던 생성자 함수
// String() or ''
// Number() + '10'
// Boolean() or !!
// new BigInt(10) or 10n

const likeLionMember = new Array("야무", "파랑", "노랑");
console.log(likeLionMember);

const likeLionMembersArray = ["야무", "피랑", "노랑"];
console.log(likeLionMembersArray);
likeLionMember[1] = "민재";
console.log(likeLionMember);

// =-------------------------------------------------------------------------
// 다양한 값 담기
// =-------------------------------------------------------------------------

const allData = [
  2026, // 숫자
  "2026", // 문자
  true, //논리
  null, // null
  undefined, // undefined
  Symbol(), // symbol
  BigInt(3), // bigint
  {}, // 오브젝트 -> 생성된 객체
  [], // 배열 -> 생성된 배열
  function () {}, // 함수,
];
console.log(allData.length);
console.log(allData[6]);

// --------------------------------------------------------------------------
// [시나리오 01] 손님 체크인과 방 배정
// --------------------------------------------------------------------------

// 호텔 주인 관장님의 조언: "첫 번째 방은 0번이라네!"

console.log(allData[9]); // [퀴즈] 지율 지배인이 첫 번째 손님을 부르려면 어떻게 해야 할까요?

// --------------------------------------------------------------------------
// [시나리오 02] 마지막 손님 찾기 (전통적 방식 vs 최신 방식)
// --------------------------------------------------------------------------

// 장부 확인 (총 인원)
const lastData = allData[allData.length - 1];
// ⚠️ 잘못된 접근: rooms[3]은 빈 방(undefined)입니다. 인덱스는 0, 1, 2뿐이기 때문이죠.

// 방법 A: 전통적인 계산 방식 (총 인원 - 1)
console.log(lastData);
console.log(typeof lastData);
// 방법 B: 만능 마스터 키 at() 사용 (추천)
console.log(allData.at(-1));
// --------------------------------------------------------------------------
// [시나리오 03] 방 정보 수정 및 주의사항
// --------------------------------------------------------------------------

// 1번 방 손님이 바뀌었습니다.
allData[0] = 44;
// ⚠️ 안티 패턴 주의: 중간 방을 비워두지 마세요!
// rooms[10] = '새 손님' // 이렇게 하면 중간에 7개의 유령 방(empty/undefined)이 생깁니다.
console.log(allData[0]);
allData[allData.length] = "나무아미타불";
console.log(allData[10]);

// --------------------------------------------------------------------------
// 핵심 요약! (Array Mindset)
// --------------------------------------------------------------------------
// 1. 배열은 대괄호 []를 사용하여 만드는 것이 가장 대중적입니다.
// 2. JavaScript의 숫자는 0부터 시작한다는 점을 잊지 마세요 (Zero-based indexing).
// 3. 존재하지 않는 인덱스를 호출하면 에러 대신 undefined를 돌려받습니다.
// 4. const로 선언한 배열이라도 그 내부의 손님(항목)은 언제든 바꿀 수 있습니다.
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 린터(Linter) 점검 실습: 아래 코드의 '빨간 줄' 원인을 찾아보세요.
// --------------------------------------------------------------------------

// const shoppingCart = ['두부', '양파', '대파']

// // ⚠️ 여기서 린터가 'no-const-assign' 경고를 보냅니다.
// shoppingCart = ['계란', '우유']

// JS 객체 -> 수정 가능, 가변(mutable)
// JS 기본 값 -> 수정 가능하지 않은, 불변(immutable)
// 변수 상수 개념으로 접근
//

const list = ["one", "four"];
list[9] = "아홉이요~";
console.log(list);
console.log(list[list.length]);
list[list.length] = "zz";
console.log(list);

list[14] = 1;
list;

const cart = ["두부", "양파", "김치"];
cart.length = 0;
console.log(cart);

cart[0] = 1;
cart[1] = 2;
console.log(cart);

const instructors = ["야무", "슬비"];
instructors[0] = "yamoo";
instructors[1] = "김데레사";
console.log(instructors);
instructors.length = 0;
console.log(instructors);
instructors[0] = "yamoo";
instructors[1] = "김데레사";
console.log(instructors);

const webTechniques = ["html", "css", "js"];
webTechniques[0] = "HTML";
webTechniques[1] = "CSS";
webTechniques[2] = "JS";
console.log(webTechniques);
webTechniques.length = 0;
webTechniques[webTechniques.length] = "마크업";
webTechniques[webTechniques.length] = "꾸미기";
webTechniques[webTechniques.length] = "동적인 기능";

console.log(webTechniques);
