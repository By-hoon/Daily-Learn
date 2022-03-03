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

구조 분해 할당에서는 `follow`와 `color`를 불러오고자 할때 다음과 같이 불러올 수 있다.

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

<br>

# **Array Destructuring**

## **사용 이유**

```JS
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
```

위처럼 배열이 생성된 경우, 월요일, 화요일, 수요일을 추출하여 출력하는 방법은 다음과 같다.

```JS
const mon = days[0];
const tue = days[1];
const wed = days[2];_

console.log(mon, tue, wed);
```

배열의 구조가 간단한 경우는 위와 같은 방법에 큰 어려움이 없지만, 배열이 복잡해지면 항상 인덱스로 값을 찾기에는 어려움이 따른다.

## **사용 방법**

구조 분해 할당에서는 월요일, 화요일, 수요일을 불러오고자 할때 다음과 같이 불러올 수 있다.

```JS
const [mon, tue, wed] = days;

console.log(mon, tue, wed);
```

위 방법은 코드도 더욱 간단하게 표현할 수 있으며, 값의 할당에도 유리하다.

<br>

    array destructuring은 정보의 수정이 object destructuring에 비해 불편하기 때문에, 가져온 정보를 조작하지 않을 때 쓰기 좋다.

<br>
