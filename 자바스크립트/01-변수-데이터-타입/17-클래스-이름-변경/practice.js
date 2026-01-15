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


const itemMultiple = practice.querySelector('.item-multiple')
console.log(itemMultiple);

itemMultiple.classList.add(
  'bg-yellow-100', 
  'text-green-500', 
  'font-semibold'
)

// 4. 교체 해보셈 
const itemReplace = practice.querySelector('.item-replace')
itemReplace.classList.replace('text-red-500', 'text-green-500')

function replaceElementClasses(targetElement, removeClass, ...addClasses) {
  targetElement.classList.remove(removeClass)
  targetElement.classList.add(...addClasses)
}

replaceElementClasses(
  itemReplace, 
  'text-red-500', 
  'text-purple-500', 'font-bold', 'text-lg'
)

// 5. 없는 클래스를 다른 클래스로 바꿀때? 
 
const itemSafeReplace = practice.querySelector('.item-safe-replace')

const result = itemSafeReplace.classList.replace('unkown-class', 'text-blue-500')

if (!result) {
  console.warn('요소에 없는 클래스 이름임요');
}

