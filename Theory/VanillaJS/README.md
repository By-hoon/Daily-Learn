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

> # **클래스**

- ### 클래스와 기본 문법

<br>

> > ## **클래스와 기본 문법**

## **기본 문법**

_클래스는 다음과 같은 기본 문법을 사용해 만들 수 있다._

```JS
class MyClass {
  // 여러 메서드를 정의할 수 있음
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

이렇게 클래스를 만들고, new MyClass()를 호출하면 내부에서 정의한 메서드가 들어 있는 객체가 생성된다.

객체의 기본 상태를 설정해주는 생성자 메서드 constructor()는 new에 의해 자동으로 호출되므로, 특별한 절차 없이 객체를 초기화 할 수 있다.

예시:

```JS
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// 사용법:
let user = new User("John");
user.sayHi();
```

`new User("John")`를 호출하면 다음과 같은 일이 일어난다.

- 새로운 객체가 생성된다.
- 넘겨받은 인수와 함께 constructor가 자동으로 실행된다. 이때 인수 "John"이 this.name에 할당된다.

  이런 과정을 거친 후에 `user.sayHi()` 같은 객체 메서드를 호출할 수 있다.

> > 클래스와 관련된 표기법은 객체 리터럴 표기법과 차이가 있다. 클래스에선 메서드 사이에 쉼표를 넣지 않아도 된다.

<br>

## **클래스란**

_자바스크립트에서 클래스는 함수의 한 종류이다._

```JS
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// User가 함수라는 증거
alert(typeof User); // function
```

class User {...} 문법 구조가 진짜 하는 일은 다음과 같다.

- `User`라는 이름을 가진 함수를 만든다. 함수 본문은 생성자 메서드 `constructor`에서 가져온다. 생성자 메서드가 없으면 본문이 비워진 채로 함수가 만들어진다.
- `sayHi`같은 클래스 내에서 정의한 메서드를 `User.prototype`에 저장한다.

`new User`를 호출해 객체를 만들고, 객체의 메서드를 호출하면 메서드를 프로토타입에서 가져온다. 이 과정이 있기 때문에 객체에서 클래스 메서드에 접근할 수 있다.

코드로 확인하면,

```JS
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// 클래스는 함수입니다.
alert(typeof User); // function

// 정확히는 생성자 메서드와 동일합니다.
alert(User === User.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
alert(User.prototype.sayHi); // alert(this.name);

// 현재 프로토타입에는 메서드가 두 개입니다.
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
```

## **클래스는 단순한 편의 문법이 아니다.**

_어떤 사람들은 `class`라는 키워드 없이도 클래스 역할을 하는 함수를 선언할 수 있기 때문에 클래스는 '편의 문법’에 불과하다고 이야기한다._

> > 참고로 기능은 동일하나 기존 문법을 쉽게 읽을 수 있게 만든 문법을 편의 문법(syntactic sugar, 문법 설탕)이라고 한다.

```JS
// class User와 동일한 기능을 하는 순수 함수를 만들어보겠습니다.

// 1. 생성자 함수를 만듭니다.
function User(name) {
  this.name = name;
}
// 모든 함수의 프로토타입은 'constructor' 프로퍼티를 기본으로 갖고 있기 때문에
// constructor 프로퍼티를 명시적으로 만들 필요가 없습니다.

// 2. prototype에 메서드를 추가합니다.
User.prototype.sayHi = function() {
  alert(this.name);
};

// 사용법:
let user = new User("John");
user.sayHi();
```

위 예시처럼 순수 함수로 클래스 역할을 하는 함수를 선언하는 방법과 `class` 키워드를 사용하는 방법의 결과는 거의 같기 때문에, `class`가 단순한 편의 문법이라고 생각된다.

하지만 두 방법에는 중요한 차이가 몇 가지 있다.

- `class`로 만든 함수엔 특수 내부 프로퍼티인 `[[FunctionKind]]:"classConstructor"`가 이름표처럼 붙는다. 이것만으로도 두 방법엔 분명한 차이가 있음을 알 수 있다.

  자바스크립트는 다양한 방법을 사용해 함수에 [[FunctionKind]]:"classConstructor"가 있는지를 확인한다. 이런 검증 과정이 있기 때문에 클래스 생성자를 new와 함께 호출하지 않으면 에러가 발생한다.

  ```JS
  class User {
  constructor() {}
  }

  alert(typeof User); // function
  User(); // TypeError: Class constructor User cannot be invoked without 'new'
  ```

  대부분의 자바스크립트 엔진이 클래스 생성자를 문자열로 표현할 때 'class…'로 시작하는 문자열로 표현한다는 점 역시 다르다.

  ```JS
  class User {
  constructor() {}
  }

  alert(User); // class User { ... }
  ```

- 클래스 메서드는 열거할 수 없다(non-enumerable). 클래스의 `prototype` 프로퍼티에 추가된 메서드 전체의 `enumerable` 플래그는 `false`이다.

  `for..in`으로 객체를 순회할 때, 메서드는 순회 대상에서 제외하고자 하는 경우가 많으므로 이 특징은 꽤 유용하다.

- 클래스는 항상 `엄격 모드`로 실행된다`(use strict)`. 클래스 생성자 안 코드 전체엔 자동으로 엄격 모드가 적용된다.

## **클래스 표현식**

_함수처럼 클래스도 다른 표현식 내부에서 정의, 전달, 반환, 할당할 수 있다._

클래스 표현식은 다음과 같다.

```JS
let User = class {
  sayHi() {
    alert("Hello");
  }
};
```

기명 함수 표현식(Named Function Expression)과 유사하게 클래스 표현식에도 이름을 붙일 수 있다.

클래스 표현식에 이름을 붙이면, 이 이름은 오직 클래스 내부에서만 사용할 수 있다.

```JS
// 기명 클래스 표현식(Named Class Expression)
// (명세서엔 없는 용어이지만, 기명 함수 표현식과 유사하게 동작합니다.)
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass라는 이름은 오직 클래스 안에서만 사용할 수 있습니다.
  }
};

new User().sayHi(); // 제대로 동작합니다(MyClass의 정의를 보여줌).

alert(MyClass); // ReferenceError: MyClass is not defined, MyClass는 클래스 밖에서 사용할 수 없습니다.
```

아래와 같이 **필요에 따라 클래스를 동적으로 생성**하는 것도 가능하다.

```JS
function makeClass(phrase) {
  // 클래스를 선언하고 이를 반환함
  return class {
    sayHi() {
      alert(phrase);
    };
  };
}

// 새로운 클래스를 만듦
let User = makeClass("Hello");

new User().sayHi(); // Hello
```

## **getter와 setter**

_리터럴을 사용해 만든 객체처럼 클래스도 getter나 setter, 계산된 프로퍼티(computed property)를 포함할 수 있다._

`get`과`set`을 이용해 `user.name`을 조작하면

```JS
class User {

  constructor(name) {
    // setter를 활성화합니다.
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("이름이 너무 짧습니다.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // 이름이 너무 짧습니다.
```

이런 방법으로 클래스를 선언하면 `User.prototype`에 getter와 setter가 만들어지므로 get과 set을 사용할 수 있다.

## **계산된 메서드 이름 […]**

대괄호 `[...]`를 이용해 계산된 메서드 이름(computed method name)을 만드는 예시는 다음과 같다.

```JS
class User {

  ['say' + 'Hi']() {
    alert("Hello");
  }

}

new User().sayHi();
```

계산된 메서드 이름은 리터럴 객체와 유사한 형태를 띠기 때문에 사용법을 외우기 쉽다는 장점이 있다.

## **클래스 필드**

지금까지 살펴본 예시엔 메서드가 하나만 있다.

'클래스 필드(class field)'라는 문법을 사용하면 어떤 종류의 프로퍼티도 클래스에 추가할 수 있다.

```JS
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!
```

클래스를 정의할 때 '<프로퍼티 이름> = <값>'을 써주면 간단히 클래스 필드를 만들 수 있다.

클래스 필드의 중요한 특징 중 하나는 `User.prototype`이 아닌 개별 객체에만 클래스 필드가 설정된다는 점이다.

```JS
class User {
  name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined
```

아울러 클래스 필드엔 복잡한 표현식이나 함수 호출 결과를 사용할 수 있다.

```JS
class User {
  name = prompt("이름을 알려주세요.", "보라");
}

let user = new User();
alert(user.name); // 보라
```

## **클래스 필드로 바인딩 된 메서드 만들기**

자바스크립트의 함수는 동적인 `this`를 갖는다.

따라서 객체 메서드를 여기저기 전달해 전혀 다른 컨텍스트에서 호출하게 되면 `this`는 원래 객체를 참조하지 않습니다.

관련 예시를 살펴보자.

```JS
class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined
```

이렇게 `this`의 컨텍스트를 알 수 없게 되는 문제를 '잃어버린 `this`(losing this)'라고 한다.

문제를 해결하기 위해 두 개의 방법을 사용할 수 있다.

- setTimeout(() => button.click(), 1000) 같이 래퍼 함수를 전달하기
- 생성자 안 등에서 메서드를 객체에 바인딩하기

클래스 필드는 또 다른 훌륭한 방법을 제공한다.

```JS
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello
```

클래스 필드 `click = () => {...}`는 각 `Button` 객체마다 독립적인 함수를 만들고 함수의 `this`를 해당 객체에 바인딩시켜준다. 따라서 개발자는 `button.click`을 아무 곳에나 전달할 수 있고, `this`엔 항상 의도한 값이 들어가게 된다.

클래스 필드의 이런 기능은 브라우저 환경에서 메서드를 이벤트 리스너로 설정해야 할 때 특히 유용하다.

## **요약**

아래와 같은 기본문법을 사용해 클래스를 만들 수 있다.

```JS
class MyClass {
  prop = value; // 프로퍼티

  constructor(...) { // 생성자 메서드
    // ...
  }

  method(...) {} // 메서드

  get something(...) {} // getter 메서드
  set something(...) {} // setter 메서드

  [Symbol.iterator]() {} // 계산된 이름(computed name)을 사용해 만드는 메서드 (심볼)
  // ...
}
```

MyClass는 constructor의 코드를 본문으로 갖는 함수이다. MyClass에서 정의한 일반 메서드나 getter, setter는 MyClass.prototype에 쓰인다.

<br>

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
