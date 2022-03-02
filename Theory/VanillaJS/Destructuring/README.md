> # **구조 분해 할당**

- ### Object Destructuring
- ### Array Destructuring
- ### Function Destructuring

<br>

# **Object Destructuring**

## **사용 이유**

```JS
const settings = {
    notification: {
        follow: true,
        alerts:true,
        unfollow: false,
    },
    color: {
        theme: "dark"
    }
};
```

위처럼 객체가 생성된 경우, follow를 불러오고자 할 때, 다음과 같이 불러올 수 있다.

```JS
if(settings.notification.follow){
    console.log("run");
}
```

이 방식은 다음 두가지의 문제점을 가진다.

- object의 depth가 깊어질수록 코드가 너무 길어질 수 있다
- follow나 notification처럼 특정한 값이 없는 경우가 있을 수 있다.

이때 필요한 것이 `구조 분해 할당`이다.

## **사용 방법**

구조 분해 할당에서는 `follow`와 `color`를 불어오고자 할때 다음과 같이 불러올 수 있다.

```JS
const {
    notification: {follow},
    color
} = setting;

console.log(follow); /// true
console.log(color); /// theme: "dark"
```

`follow`와 `color`가 **변수로써 선언이 되는 것**이다.

```JS
console.log(notification); ///error
```

`notification`은 변수로써 선언되는 것이 아니라 follow를 가져오기 위한 수단으로 쓰인 것이기 때문에 변수로써 사용할 수 없다.

<br>

이제 `follow` 혹은 `notification`처럼 특정한 요소가 없는 경우를 생각해보자.
마찬가지로 오류 혹은 undefined를 야기할 것이다.

이를 해결하기 위해서 우리는 `default` 값을 다음과 같이 설정해야 한다.

```JS
const { notification: {follow = false} = {} } = setting;

///no follow
console.log(follow); /// false

///no notification
console.log(notification); /// {}
```

위와 같이 default 값을 설정하면, 특정 요소가 없는 경우에도 오류없이 값을 가져올 수 있게 된다.
