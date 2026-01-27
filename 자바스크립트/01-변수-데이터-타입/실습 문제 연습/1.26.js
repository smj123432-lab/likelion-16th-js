function sumToUp(n) {
  let i = 1;
  let total = 0;
  while (i <= n) {
    total = total + i;
    i++;
  }
  return total;
}
console.log(sumToUp(5));

const sumArray = function (n) {
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total = total + n[i];
  }
  return total;
};
console.log(sumArray([1, 2, 3, 4]));

const countZero = function (count) {
  let fo = 0;
  for (let i = 0, array = count.length; i < array; i++) {
    if (count[i] === 0) {
      fo++;
    }
  }
  return fo;
};
console.log(countZero([1, 0, 2, 0, 3]));
// 11번
const countZero1 = function (n) {
  let count = 0;
  for (i of n) {
    if (i === 0) count++;
  }
  return count;
};
console.log(countZero1([1, 0, 2, 0, 3]));

// 12번
const findMaxInArray = function (n) {
  let maximum = n[0];
  // maximum = 10
  for (max of n) {
    if (max > maximum) {
      // 현재 번호 10 -> 10보다 크면 첫 번째
      // 50이 들어옴 10보다 큼 두 번쨰
      // 20이 들어옴 50보다 작음 교체 x 세 번째
      // 30이 들어옴 50보다 작음 교체 x 네 번째
      maximum = max;
      // 맥시멈을 해당 번호로 교체
      // 아직 10인 상태 첫 번쨰
      // 50으로 교체 두 번째
      // 그대로 50 세 번째
      // 그대로 50 네 번째
      // 반복 끝
    }
  }
  return maximum;
  // 50 반환
};
console.log(findMaxInArray([10, 50, 20, 30]));

const maxArray = function (n) {
  let maxNumber = n[0];
  // 10인 상태
  for (let i = 0; i < n.length; i++) {
    // n의 길이만큼 반복 4번, 4보다 작으면 i에 플러스
    // 1플러스 돼서 1, 1번째 배열인 50이 들어옴
    if (n[i] > maxNumber) {
      // i 번쩨가 10보다 크면
      // 50이 10보다 큼
      maxNumber = n[i];
      // i로 교체
      // 50으로 교체
      // 해당 과정 반복
      // 50보다 큰 게 없음
    }
  }
  return maxNumber;
  // 그대로 50 반환
};
console.log(maxArray([10, 50, 20, 30]));

// 14번
function introduce(array) {
  const name = array.name;
  const age = array.age;
  const result = "저는 " + age + "살 " + name + "입니다";
  return result;
}

console.log(introduce({ name: "민재", age: 20 }));

const login = function (id, pw) {
  if (id === "admin" && pw === "1234") {
    return true;
  } else {
    return false;
  }
};
console.log(login("admin", "1234"));

// 13번
const hideEmail = function (email) {
  const result = email[0] + email[1] + "****";
  return result;
};
console.log(hideEmail("shin@naver.com"));

// 16
const hasNegative = function (n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      return true;
      break;
    }
  }
  return false;
};
console.log(hasNegative([1, 2, 3]));
console.log(hasNegative([1, -2, 3]));

// 17번
const countChat = function (word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count;
};
console.log(countChat("banana", "a"));
console.log(countChat("banana", "n"));

// 18
const maskPhone = function (phonNumber) {
  const phNb = phonNumber.split("-");
  const first = phNb[0];
  const second = phNb[1];
  const result = first + "-" + second + "-****";
  return result;
};
console.log(maskPhone("010-1234-5678"));
