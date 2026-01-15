// --------------------------------------------------------------------------
// 실습: 클래스 이름을 이용한 스타일 조작 (classList API)
// --------------------------------------------------------------------------
// * 지팡이(JavaScript)로 직접 색칠하기보다 옷(CSS Class)을 갈아입히는 것이 효율적입니다.
// * add / remove / replace / contains / toggle 주문을 익혀봅시다.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 1. 클래스 이름 추가 (add)
// --------------------------------------------------------------------------

// .prose
const prose = document.querySelector('.prose')
console.log(prose);

// prose 요소 안에서 h1 요소 찾기
const proseHeading = prose.querySelector('h1')
console.dir(proseHeading);

// element.style //cssStyleDeclaration {item, length, ... }
// element.classList // DOMTokenList{add, remove, replace, contain, toggle}
// proseHeading.classList.add('color-gold')

// [연습] 'text-primary' 클래스를 추가하세요.
proseHeading.classList.add('text-primary', 'font-bold')

// [연습] 'text-primary'와 'font-bold' 클래스를 동시에 추가하세요.


// 설명:
// classList.add()는 기존 클래스를 유지하면서 새로운 클래스를 덧입힙니다.


// --------------------------------------------------------------------------
// 2. 클래스 이름 제거 (remove)
// --------------------------------------------------------------------------

// [연습] 위에서 추가했던 'text-primary' 클래스를 제거하세요.
console.log(proseHeading.classList); //
// proseHeading.classList.remove('text-primary') // DOMTokenList{add, remove, replace, contain, toggle}
// proseHeading.classList.remove('font-bold') // DOMTokenList{add, remove, replace, contain, toggle}

// [연습] 'text-primary'와 'font-bold' 클래스를 한 번에 제거하세요.
proseHeading.classList.remove('text-primary','font-bold') // DOMTokenList{add, remove, replace, contain, toggle}


// 설명:
// remove() 메서드는 해당 클래스가 존재할 때만 삭제하며, 없어도 에러가 발생하지 않습니다.


// --------------------------------------------------------------------------
// 3. 클래스 이름 교체 (replace)
// --------------------------------------------------------------------------

// ProseHeading 참조 객체 (<h1> -> HTMLHeadingElement)

proseHeading.classList.replace('color-silver', 'font-bold') // DOMTokenList{add, remove, replace, contain, toggle}
// 실습 HTML 예시: <p class="message is-danger">오류 발생</p>


// [연습] 'is-danger' 클래스를 'is-success' 클래스로 교체하세요.
const message = document.querySelector('.message') // 문서 전체, prose.querySelector 은 프로스라는 객체 안에서 찾기
// message.classList.replace('is-danger', 'is-success')

const replace = message.classList.replace('is-danger', 'is-success')
console.log('replacement: ', replace);
if (replace) {
  console.log('교체 성공');
} else {
  console.log('교체 실패');
}

// 설명:
// remove()와 add()를 각각 실행하는 것보다 훨씬 간결하고 안전하게 스타일을 전환합니다.


// --------------------------------------------------------------------------
// 4. 클래스 포함 여부 확인 (contains)
// --------------------------------------------------------------------------

// [연습] target 요소가 'text-primary' 클래스를 가지고 있는지 조건문(if)으로 확인하세요.
// 클래스가 있다면 제거하고, 없다면 추가하는 로직을 작성해 보세요.
const targetElement = prose.querySelector('.target')

// 검토할 클래스 이름을 기억하는 변수
let checkClassName = 'size-xl'

// target 요소에 text-primary 클래스 값을 가지고 있는 지 확인
const hasTextPrimaryClass = targetElement.classList.contains(checkClassName)
// console.log(hasTextPrimaryClass)

// 만약 해당 클래스 이름이 있다면
if (hasTextPrimaryClass) {
  // 해당 클래스 이름 제거
  targetElement.classList.remove(checkClassName)
}
// 만약 해당 클래스 이름이 없다면
else {
  // 해당 클래스 이름 추가
  targetElement.classList.add(checkClassName)
}
// 설명:
// 결과값으로 true/false를 반환하므로 복잡한 조건부 로직을 짤 때 필수적입니다.


// --------------------------------------------------------------------------
// 5. 클래스 이름 토글 (toggle)
// --------------------------------------------------------------------------

// [연습] target 요소에 'active' 클래스를 토글 처리하세요.

// 토글(toggle) => OFF -> ON -> OFF

// 조건문을 사용하는 경우
// classList.contains, classList.remove, classList.add

let activeClassName = 'active'

const hasActiveClass = targetElement.classList.contains(activeClassName)

if (hasActiveClass) {
  targetElement.classList.remove(activeClassName)
} else {
  targetElement.classList.add(activeClassName)
}

// 편의를 위한 toggle() 메서드를 사용하는 경우
targetElement.classList.toggle(activeClassName)


// 설명:
// 다크모드 스위치나 아코디언 메뉴처럼 켰다 껐다(On/Off) 하는 UI 구현 시 가장 많이 쓰입니다.


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. add() / remove() : 가장 기본적인 스타일 입히기와 벗기기
// 2. replace(old, new) : 두 동작을 한 줄로 줄여주는 매끄러운 교체 주문
// 3. contains() : 스타일 존재 유무를 파악하여 다음 마법(로직)을 결정
// 4. toggle() : 상태를 반전시키는 만능 스위치 주문
// 5. 마법사(JS)는 명령만 내리고, 실제 디자인은 옷장(CSS)에서 관리합니다.