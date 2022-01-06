<h1 align="middle">CSS</h1>

> # **BEM 방법론**

- ### BEM의 기본구조
- ### Block / Element /Modifier
- ### 예시

<br>

## **BEM의 기본구조**

_BEM은 `block`, `Element`, `Modifier`를 뜻한다._

이 세가지로 구성된 이름을 짓는 것. 그리고 각각 `__`와 `--`로 구분한다.

```CSS
.header__navigation--navi-text {
	color:red;
}
```

위 코드에서 `header`는 **Block**, `navigation`은 **Element**, `navi-text`는 **Modifier**가 된다.

    BEM은 기본적으로 ID를 사용하지 않으며, class만을 사용한다.

또 '어떻게 보이는가'가 아니라 '**어떤 목적인가**'에 따라 이름을 짓는다.
예를 들어, 에러메세지를 띄우는 P 태그에게는 `.red`가 아닌, `.error`라는 이름을 줘야한다. 이름을 연결할때는 `block-name`과 같이 하이픈 하나만 써서 연결한다.

<br>

## **Block / Element /Modifier**

## Block

_재사용이 가능한 기능적으로 독립적은 페이지 컴포넌트를 블럭이라고 부른다._

블럭은 블럭을 감쌀 수 있다. `.header > .logo`는 header라는 블럭 안에 logo라는 블럭이 들어간 형태이다.

## Element

_엘리먼트는 블럭을 구성하는 단위_

블럭은 독립적인 형태인 반면, 엘리먼트는 **의존적인 형태**이다. 자신이 속한 블럭 내에서만 의미를 가지기 때문에 블럭 안에서 떼어다 다른데 쓸 수 없다.

```css
<form class="search-form">
	<input class="search-form__input" />
	<button class="search-form__button">Search</button>
</form>
```

위 예시에서 `.search-form`은 블럭이고, `.search-form__input`과 `.search-form__button`은 엘리먼트이다.

저 search-form이란 블럭은 떼어내서 여기저기 마음껏 붙여도 된다. 하지만 내부의 input과 button은 검색을 위한 인풋창이자 버튼이기 때문에, search-form안에서만 존재 의미가 있는 엘리먼드다.

엘리먼트 또한 중첩이 가능하다. `.block > .block__element1 > .block__element2`도 가능하다.

BEM은, `.block_element2`를 `.block_element1`의 하위 엘리먼트로 보지 않고 둘 다 똑같이 `.block`의 엘리먼트로 취급한다는 점이 같다. 그래서 **클래스네임에 캐스케이딩을 여러번 표시할 필요가 없다**.

따라서 BEM은 아래와 같이 사용하지 않는다.

```css
<form class="search-form">
	<div class="search-form__content" >
		<input class="search-form__content__input" />
		<button class="search-form__content__button">Search</button>
	</div>
</form>
```

## Modifier

_Modifier는 블럭이나 엘리먼트의 속성을 담당한다. 생긴게 조금 다르거나, 다르게 동작하는 블럭이나 엘리먼트를 만들때 사용하면 된다._

```css
<ul class="tab">
	<li class="tab__item tab__item--focused">탭 01</li>
	<li class="tab__item">탭 02</li>
	<li class="tab__item">탭 03</li>
</ul>
```

위 코드에서 `--focused`가 수식어에 해당한다. 저렇게 작성된걸 **불리언(boolean)타입**이라고 하는데, 그 값이 true라고 가정하고 사용한다.

**키-밸류(key-value)** 타입도 있다. 이것은 하이픈으로 **성질-내용**을 작성한다.

```css
<div class="column">
	<strong class="title">일반 로그인</strong>
	<form class="form-login form-login--theme-normal">
		 <input type="text" class="form-login__id" />
		 <input type="password" class="form-login__password" />
	</form>
</div>
<div class="column">
	<strong class="title tile--color-gray">VIP 로그인 (준비중)</strong>
	<form class="form-login form-login--theme-special form-login--disalbed">
		 <input type="text" class="form-login__id" />
		 <input type="password" class="form-login__password" />
	</form>
</div>
```

위 예시에서 `color-gray`와 `theme-normal`은 `key-value`타입에 해당한다.

<br>

## 예시

<br>

```css
<div class="header">
	<div class="header__inner">
		<div class="tabzilla"></div>
		<div class="header__logo"></div>
		<div class="header__auth"></div>
		<div class="nav"></div>
		<div class="header__search"></div>
	</div>
</div>
```

위 코드에서 .`header`는 블럭이며, `.header__`로 시작하는 태그들은 모두 엘리먼트에 해당한다.

한편, `.tabzilla`와 `.nav`는 엘리먼트가 아닌 블럭. **다른곳에서 독립적으로 쓸 수 있기 때문에 블럭으로 지정한 것이다**.
