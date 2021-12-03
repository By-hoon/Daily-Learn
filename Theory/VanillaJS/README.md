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
