> # **Promise**

- ### Promise란
- ### Promise 사용법

<br>

# **Promise란**

**Promise는 자바스크립트 비동기 처리에 사용되는 객체**이다. 자바스크립트의 비동기 처리란 *특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성*을 의미한다.

## **Promise는 왜 사용할까?**

Promise의 핵심은 내가 아직 모르는 value와 함께 작업할 수 있게 해준다는 점이다.

앞서 말한 것처럼 자바스크립트는 특정 코드의 실행을 기다려주지 않는다. 때문에 필요한 데이터를 다 가져오지 못했더라도 자바스크립트는 다음 코드를 수행한다.

이 과정에서 Promise를 사용하지 않는다면, 아직 가져오지 못한 데이터를 사용할 때 오류를 야기한다.

<br>

# **Promise 사용법**

## **Promise 생성**

Promise의 기본적인 생성은 다음과 같다.

```JS
const print = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "It's running");
});

console.log(print);

setInterval(console.log, 1000, print);

// Promise {<pending>}
// Promise {<pending>}
// Promise {<pending>}
// Promise {<resolved>: "It's running"}
```

여기에서 resolve는 값을 반환해주는 것이고, reject는 에러를 반환해준다.
