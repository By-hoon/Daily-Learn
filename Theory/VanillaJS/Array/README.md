> # **Array Method**

- ### for each
- ### map
- ### filter
- ### reduce
- ### find
- ### findIndex
- ### indexOf
- ### every
- ### some

## **for each**

_Array 요소를 제공된 함수로 한 번 실행한다._

콜백 함수를 인자로 받아, 배열의 각 요소에 콜백함수를 실행한다. 아무 값도 반환하지 않는다.

일반적인 `forEach`문은 다음과 같다.

```JS
arr.forEach(function(value, index, arr){
  console.log(value);
})
```

`forEach()` 메소드는 아무것도 리턴하지 않는다.

단지 제공된 함수로 Array 요소를 호출한다. 이 콜백은 호출하는 Array를 변경할 수 있다.

    forEach문은 구문 밖으로 return값을 받지 못한다.

```JS
var arr = [1,2,3,4,5];
var newArr = arr.forEach(function(e, i) {
  return e;
});
// undefined
```

## **Map**

_모든 Array 요소가 제공된 함수로 호출될 때 새로운 array를 생성한다._

기존의 배열을 이용해, 새로운 배열을 생성할 때 사용한다. 콜백 함수를 인자로 받아, 배열의 각 요소에 대해서 실행한 결괏값을 반환한다.

일반적인 `map` 실행 방법은 다음과 같다.

```JS
var newArr = arr.map(function(value, index, arr) {
  return condition;
});
```

    map의 경우 요소가 아닌 새로운 값을 만들어서 return할 수 있다. return값 자체를 반환한다.

```JS
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function(v, i, arr) {
  return v + 1;
});
// 2, 3, 4, 5, 6
```

## **forEach와 Map의 차이점**

`forEach()`는 당신의 Array안에 데이터를 변경하려는 것이 아니라 데이터베이스에 저장하거나 로그아웃하는 것과 같은 작업에 유용할 수 있다.

```JS
var arr = ["a", "b", "c", "d"];

arr.forEach(letter => {
 console.log(letter);
});

// a
// b
// c
// d
```

`map()`은 데이터를 변경할 때 선호될 수 있다. 더 빠를 뿐 아니라 새로운 배열을 반환하며, 이는 다른 메소드들과 함께 사용하는 것 같이 멋진 일을 할 수 있다는 것을 의미한다.

```JS
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(num => num * 2).filter(num => num > 5);

// arr2 = [6, 8, 10]
```

- `map()` 메소드는 Array안에 요소들을 호출한다, `forEach()`와 다른 점은 값을 사용하고 Array와 동일한 사이즈의 새로운 Array를 반환한다.
- 결론적으로 `map()`을 사용하면, 결괏값을 배열로 받을 수 있다. 함수 안의 결괏값을 계산하지 않고, 배열로 받기 위해서는 `map()`을 사용하는 게 유리하다.
- `map()`은 메모리를 할당하고 리턴 값을 저장하지만, `forEach()`는 리턴 값을 버리고 항상 undefined를 리턴한다.
- `forEach()`는 콜백함수로 현재 Array를 변환할 수 있으며, 대신에 `map()`은 새로운 Array를 리턴한다.

## **filter**

_자바스크립트의 filter함수는 배열의 각 요소를 순회하며 callback함수를 실행하며, 조건에 맞는 요소만을 갖는 배열을 반환한다._

```JS
arr.filter(callback(element[, index[, array]])[, thisArg])
```

### **파라미터**

### 1. callback function

- 각 요소의 조건을 판단할 함수로, true를 반환하면 요소를 유지하고 false를 반환하면 제외한다.
- 다음 3가지의 인수를 가진다.
  - element: 배열의 현재 요소
  - index(Optional): 배열의 현재 요소의 인덱스
  - array(Optional): 호출한 배열

### 2. thisArg(Optional

- callback함수를 실행할 때 this로 사용되는 값

### **반환값**

배열을 순서대로 불러 각 요소에 대해 callback 함수을 실행하고 결과가 true인 요소들만으로 이루어진 새로운 배열을 반환한다.

### **예제**

```JS
const numbers = [1, 2, 3, 4, 5]; // 기존 배열

// filter1 - callback함수를 직접 작성
// 현재 요소를 2로 나눈 나머지가 1일 경우 홀수
const filter1 = numbers.filter(currentNumber => currentNumber % 2 === 1);

console.log('filter1 =', filter1);
//filter1= [1, 3, 5]
```

```JS
// filter2 - callback함수 선언 후 이용
function isOdd(currentNumber) {
  return currentNumber % 2 === 1;
}

const filter2 = numbers.filter(isOdd);

console.log('filter2 =', filter2);
//filter2= [1, 3, 5]
```

## **reduce**

_배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다._

map이 배열의 각 요소를 변형한다면 reduce는 배열 자체를 변형합니다. reduce라는 이름은 이 메서드가 보통 배열을 값 하나로 줄이는 쓰이기 때문에 붙었습니다. 예를 들어 배열에 들어있는 숫자를 더하거나 평균을 구하는 것은 배열을 값 하나로 줄이는 동작입니다. 하지만 reduce가 반환하는 값 하나는 객체일 수도 있고, 다른 배열일 수도 있습니다.

<br>
리듀서 함수는 네 개의 인자를 가집니다.

- 누산기accumulator (acc)
- 현재 값 (cur)
- 현재 인덱스 (idx)
- 원본 배열 (src)

<br>

## **find**

_판별 함수를 만족하는 첫 요소를 반환_

- arr.find(callback)
- 반환 타입은 찾은 요소의 타입, 없다면 undefinded
- callback(element, index, array) → 콜백 함수가 받는 인자(각 인자는 find 메서드를 호출한 배열에서 받아온다.)
- 원하는 요소를 찾자마자 메서드를 종료한다.

```JS
const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];
const find1 = arr.find((element, index, array) => {
  // 인덱스 2인 요소를 찾을 때 까지 반복
  console.log('콜백함수를 실행한 배열은? ', array);
  return index == 2;
});

const find2 = arr.find((element, index, arr) => element === 3);
const find3 = arr.find((e) => e > 8);
const find4 = arr.find((e) => e > 10);
console.log('find1:', find1);
console.log('find2:', find2);
console.log('find3:', find3);
console.log('find4:', find4);
```

```JS
콜백함수를 실행한 배열은? [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
콜백함수를 실행한 배열은? [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
콜백함수를 실행한 배열은? [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
find1: 9
find2: 3
find3: 9
find4: undefined
```

<br>

## **findIndex**

_판별 함수를 만족하는 첫 식별자 반환_

- arr.findIndex(callback)
- 반환 타입 number, 없다면 -1
- callback(element, index, array) → 콜백함수가 받는 인자(각 인자는 findIndex 메서드를 호출한 배열에서 받아온다.)
- 원하는 요소를 찾자마자 메서드를 종료한다.

```JS
const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];
const find1 = arr.findIndex((element, index, array) => {
  return index < 7 && index > 5;
  });
const find2 = arr.findIndex((element, index, arr) => element === 3);
const find3 = arr.findIndex((e) => e > 8);
const find4 = arr.findIndex((e) => e > 10);
console.log('findIndex1:', find1);
console.log('findIndex2:', find2);
console.log('findIndex3:', find3);
console.log('findIndex4:', find4);
```

```JS
findIndex1: 6
findIndex2: 5
findIndex3: 2
findIndex4: -1
```

<br>

## **indexOf**

_인자로 받은 값을 찾아 맞는 식별자 반환_

- arr.indexOf(search, fromIndex)
- 반환 타입 number, 없다면 -1
- search 매개변수는 배열에서 찾을 요소를 받는다.
- 원하는 요소를 찾자마자 메서드를 종료한다.

```JS
const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];
const find1 = arr.indexOf(1);
const find2 = arr.indexOf(2);
const find3 = arr.indexOf(3);
const find4 = arr.indexOf(4);
console.log('findIndex1:', find1);
console.log('findIndex2:', find2);
console.log('findIndex3:', find3);
console.log('findIndex4:', find4);
```

```JS
findIndex1: 3
findIndex2: 6
findIndex3: 5
findIndex4: 11
```

<br>

## **every**

- every는 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 모두 true인지 확인합니다.
- 모든 case가 true일때 true를 반환합니다.
- 하나라도 false이면 반환 값은 false입니다.
- 기존 배열 값은 변경되지 않습니다.

```JS
arr.every(function(currentValue, index, array), thisValue))
```

- currentValue: (필수) 배열내에서 순차적으로 입력되는 엘리먼트
- index: (옵션) 현재 엘리먼트의 배열 내 index
- array: (옵션) 현재 엘리먼트가 속한 배열
- thisValue: (옵션) 함수 내부에서 사용될 this에 대한 값

```JS
var objArr = [{name: '철수', age: 10}, {name: '영희', age: 10}, {name: '바둑이', age: 2}]

console.log(objArr.every((item)=> item.age>5)); //false (바둑이 탈락!)
console.log(objArr.every((item)=> item.age>1)); //true
```

<br>

## **some**

- some()은 배열의 각 엘리먼트에 대해서 테스트 함수의 반환 값이 하나라도 true가 있는지 확인합니다.
- 하나라도 true가 발생하면 true를 반환합니다.
- 모두 false인 경우만 false를 반환합니다.
- every가 and 조건이라면 some은 or 조건입니다.
- 기존 배열 값은 변경되지 않습니다.

```JS
arr.some(function(currentValue, index, array), thisValue))
```

- currentValue: (필수) 배열내에서 순차적으로 입력되는 엘리먼트
- index: (옵션) 현재 엘리먼트의 배열 내 index
- array: (옵션) 현재 엘리먼트가 속한 배열
- thisValue: (옵션) 함수 내부에서 사용될 this에 대한 값

```JS
var objArr = [{name: '철수', age: 10},{name: '영희', age: 10}, {name: '바둑이', age: 2}]

console.log(objArr.some((item)=> item.age>5)); //true
console.log(objArr.some((item)=> item.age>10)); //false (모두 탈락!)
```
