// 문서에서 .practice 요소 찾기 (변수에 참조: 기억하기 위해)
const practice = document.querySelector('.practice')
// console.log(practiceElement)

// 실습 진행을 위한 메서드 이름 변수 작성
let methodName = 'add', activeClassName = 'text-indigo-600'

// .practice .item-add 요소 찾기 (기억된 상위 요소를 통해)
const itemAdd = practice.querySelector('.item-add')
// console.log(itemAdd)

// itemAdd 요소(객체)가 활성 클래스 이름을 가지고 있다면?
// 활성 클래스 이름을 제거해야 하니까 methodName 값을 'remove'로 변경
if (itemAdd.classList.contains(activeClassName)) methodName = 'remove'
// console.log('methodName =', methodName)

itemAdd.classList[methodName](activeClassName)