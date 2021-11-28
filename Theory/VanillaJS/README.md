<h1 align="middle">VanillaJS <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png" width="25px" height="auto" alt="JSIcon"></img></h1>

> # **함수 정의 방법**

- ### 함수 선언식
- ### 함수 표현식
- ### Function 생성자 함수
- ### 화살표 함수(ES6)

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
