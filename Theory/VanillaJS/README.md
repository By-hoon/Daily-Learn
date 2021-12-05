<h1 align="middle">VanillaJS <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png" width="25px" height="auto" alt="JSIcon"></img></h1>

> # **함수 정의 방법**

- ### 함수 선언식
- ### 함수 표현식
- ### Function 생성자 함수
- ### 화살표 함수(ES6)

<br>

# **함수 선언식과 함수 표현식**

## **함수 선언식**

_가장 기본적인 함수 선언 방식_

```JS
function add(x, y){
    return x+y;
}
```

## **함수 표현식**

_JS에서의 함수는 **객체 타입**의 값으로, 객체 리터럴을 통해 객체를 생성하듯이 함수를 생성할 수도 있다._

```JS
const add = function b(x, y){
	return x+y;
}
```

<br>

## **함수 선언식 vs 함수 표현식**

함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.

> > 호이스팅: 선언한 변수나 함수를 코드의 가장 상단으로 끌어올리는 것

따라서 함수 선언식은 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

<br>

예로, 아래의 코드를 실행할 때

```JS
printNumber();
sumNumbers();

function printNumber() {
    return 10;
}

const sumNumbers = function() {
    return 1+1;
};
```

호이스팅에 의해 자바스크립트 해석기는 코드를 아래와 같이 인식한다.

```JS
function printNumber() {
    return 10;
}

var sumNumbers;

printNumber(); // 10
sumNumbers();  // Uncaught TypeError: sumNumbers is not a function

var sumNumbers = function() {
    return 1+1;
};
```

함수 표현식 sumNumbers 에서 var 도 호이스팅이 적용되어 위치가 상단으로 끌어올려졌다.
<br><br>하지만 실제 sumNumbers 에 할당될 function 로직은 호출된 이후에 선언되므로, sumNumbers 는 함수로 인식하지 않고 변수로 인식한다.

    let과 const로 선언한 변수도 호이스팅 대상이지만, var와 달리 호이스팅 시 undefined로 변수를 초기화하지는 않습니다. 따라서 변수의 초기화를 수행하기 전에 읽는 코드가 먼저 나타나면 예외(ReferenceError)가 발생합니다.

---

<br>

# **Function 생성자 함수**

## **생성자 함수란**

_재사용 가능한 코드를 묶음으로 사용하는 것 외에 객체를 생성하기 위한 방법_

객체를 생성하기 위해서는 직접 객체를 반환해도 되지만, **new 키워드**를 사용하여 함수를 호출하게 되면 return문 없이도 새로운 객체를 반환시킨다.

그리고 함수에서 **this를 사용하여 반환되는 객체의 초기 상태와 행위를 정의**할 수 있는데 이렇게 객체를 생성하는 역할을 하는 함수를 **생성자 함수**라고 한다.

    생성자 함수는 new 키워드를 사용하지 않으면 일반적인 함수와 동일하게 동작하여 새로운 객체를 반환하지 않는다.

    그렇기 때문에 함수명을 대문자로 시작한다.

> > 객체에 타입이 적용되면 해당 객체는 그 타입의 **인스턴스** 라고 부른다. 그래서 new 키워드로 만들어진 객체는 해당 타입의 instance라고 칭한다.

```JS
function Teacher(name, age, subject) {
  this.name = name
  this.age = age
  this.subject = subject
  this.teach = function (student) {
    console.log(`${student}에게 ${this.subject}를 가르칩니다`)
  }
}
const jay = new Teacher("jay", 30, "javascript")
console.log(jay)
jay.teach("fran")

console.log(jay.constructor)
console.log(jay instanceof Teacher)

const jay2 = Teacher("jay", 30, "Javascript")
console.log(jay2)
console.log(age)

//output
// Teacher {
//     name: 'jay',
//     age: 30,
//     subject: 'javascript',
//     teach: [Function]
// }
// fran에게 javascript를 가르칩니다
// [Function: Teacher]
// true
// undefined
// 30
```

## **요약**

_생성자 함수의 new 호출을 통한 객체 생성 과정은 다음과 같다._

- 빈 객체를 만든다.
- 만든 빈 객체를 this에 할당한다.
- 생성자 함수 바디에 코드를 실행하기 위해 this에 속성 및 메소드를 추가
- 만든 빈 객체의 proto에 생성자 함수의 prototype 속성을 대입한다.
- this를 생성자의 반환값으로 변환한다.

<br>

# **화살표 함수(ES6)**

## **화살표 함수의 선언**

_화살표 함수는 function 키워드 대신 화살표(=>)fmf 사용하여 보다 간략한 방법으로 함수를 선언할 수 있다._

_하지만 모든 경우 화살표 함수를 사용할 수 있는 것은 아니다._

다음은 화살표 함수의 기본 문법이다.

```JS
// 매개변수 지정 방법
    () => { ... } // 매개변수가 없을 경우
     x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
(x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

// 함수 몸체 지정 방법
x => { return x * x }  // single line block
x => x * x             // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

() => {           // multi line block.
  const x = 10;
  return x * x;
};
```

<br>

## **화살표 함수의 호출**

화살표 함수는 익명 함수로만 사용할 수 있다. 따라서 화살표 함수를 호출하기 위해서는 함수 표현식을 사용한다.

```JS
// ES5
var pow = function (x) { return x * x; };
console.log(pow(10)); // 100
```

```JS
// ES6
const pow = x => x * x;
console.log(pow(10)); // 100
```

또는 콜백 함수로 사용할 수 있다. 이 경우 일반적인 함수 표현식보다 표현이 간결하다.

```JS
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) { // x는 요소값
  return x * x;
});

console.log(pow); // [ 1, 4, 9 ]
```

```JS
// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]
```

## **this**

\_function 키워드로 생성한 일반 함수와 화살표 함수의 가장 큰 차이점은 this이다.

## 일반 함수의 this

자바스크립트의 경우 함수 호출 방식에 의해 `this`에 바인딩할 어떤 객체가 동적으로 결정된다. 다시 말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, **함수를 호출할 때 함수가 어떻게 호출되었는지에 따라** this에 바인딩할 객체가 동적으로 결정된다.

콜백 함수 내부의 this는 전역 객체 window를 가리킨다.

```JS
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // 이 지점에서의 this는 생성자 함수 Prefixer가 생성한 객체, 즉 생성자 함수의 인스턴스(위 예제의 경우 pre)이다.
  return arr.map(function (x) {
    return this.prefix + ' ' + x;
    // 이 지점에서 사용한 this는 아마도 생성자 함수 Prefixer가 생성한 객체(위 예제의 경우 pre)일 것으로 기대하였겠지만, 이곳에서 this는 전역 객체 window를 가리킨다. 이는 생성자 함수와 객체의 메소드를 제외한 모든 함수(내부 함수, 콜백 함수 포함) 내부의 this는 전역 객체를 가리키기 때문이다.
  });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
```

<br>

콜백 함수 내부의 this가 메소드를 호출한 객체(생성자 함수의 인스턴스)를 가리키게 하려면 아래의 3가지 방법이 있다.

```JS
// Solution 1: that = this
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  var that = this;  // this: Prefixer 생성자 함수의 인스턴스
  return arr.map(function (x) {
    return that.prefix + ' ' + x;
  });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
```

```JS
// Solution 2: map(func, this)
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(function (x) {
    return this.prefix + ' ' + x;
  }, this); // this: Prefixer 생성자 함수의 인스턴스
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
```

ES5에 추가된 Function.prototype.bind()로 this를 바인딩한다.

```JS
// Solution 3: bind(this)
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(function (x) {
    return this.prefix + ' ' + x;
  }.bind(this)); // this: Prefixer 생성자 함수의 인스턴스
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
```

## 3.2 화살표 함수의 this

화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 **화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다.** 이를 **Lexical this**라 한다. 화살표 함수는 앞서 살펴본 Solution 3의 Syntactic sugar이다.

> > 화살표 함수의 this 바인딩 객체 결정 방식은 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프와 유사하다.

```JS
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
  return arr.map(x => `${this.prefix}  ${x}`);
};

const pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
```

화살표 함수는 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.

```JS
window.x = 1;
const normal = function () { return this.x; };
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 }));  // 1
```

## **화살표 함수를 사용해서는 안 되는 경우**

_화살표 함수는 Lexical this를 지원하므로 콜백 함수로 사용하기 편리하다. 하지만 화살표 함수를 사용하는 것이 오히려 혼란을 불러오는 경우도 있으므로 주의하여야 한다._

## 메소드

화살표 함수로 메소드를 정의하는 것은 피해야 한다. 화살표 함수로 메소드를 정의하여 보자.

```JS
// Bad
const person = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi(); // Hi undefined
```

위 예제의 경우, 메소드로 정의한 화살표 함수 내부의 this는 메소드를 소유한 객체, 즉 메소드를 호출한 객체를 가리키지 않고 상위 컨택스트인 전역 객체 window를 가리킨다. 따라서 화살표 함수로 메소드를 정의하는 것은 바람직하지 않다.

이와 같은 경우는 메소드를 위한 단축 표기법인 ES6의 축약 메소드 표현을 사용하는 것이 좋다.

```JS
// Good
const person = {
  name: 'Lee',
  sayHi() { // === sayHi: function() {
    console.log(`Hi ${this.name}`);
  }
};

person.sayHi(); // Hi Lee
```

## prototype

화살표 함수로 정의된 메소드를 prototype에 할당하는 경우도 동일한 문제가 발생한다. 화살표 함수로 정의된 메소드를 prototype에 할당하여 보자.

```JS
// Bad
const person = {
  name: 'Lee',
};

Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

person.sayHi(); // Hi undefined
```

화살표 함수로 객체의 메소드를 정의하였을 때와 같은 문제가 발생한다. 따라서 prototype에 메소드를 할당하는 경우, 일반 함수를 할당한다.

```JS
// Good
const person = {
  name: 'Lee',
};

Object.prototype.sayHi = function() {
  console.log(`Hi ${this.name}`);
};

person.sayHi(); // Hi Lee
```

## 생성자 함수

화살표 함수는 생성자 함수로 사용할 수 없다. 생성자 함수는 prototype 프로퍼티를 가지며 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor를 사용한다. 하지만 화살표 함수는 prototype 프로퍼티를 가지고 있지 않다.

```JS
const Foo = () => {};

// 화살표 함수는 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty('prototype')); // false

const foo = new Foo(); // TypeError: Foo is not a constructor
```

## addEventListener 함수의 콜백 함수

addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위 컨택스트인 전역 객체 window를 가리킨다.

```JS
// Bad
var button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log(this === window); // => true
  this.innerHTML = 'Clicked button';
});
```

따라서 addEventListener 함수의 콜백 함수 내에서 this를 사용하는 경우, function 키워드로 정의한 일반 함수를 사용하여야 한다. 일반 함수로 정의된 addEventListener 함수의 콜백 함수 내부의 `this`는 이벤트 리스너에 바인딩된 요소(currentTarget)를 가리킨다.

```JS
// Good
var button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this === button); // => true
  this.innerHTML = 'Clicked button';
});
```

<br>

> # **Array Method**

- ### for each
- ### map

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
