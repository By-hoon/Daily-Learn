<h1 align="middle">Next.js <img src="https://api.iconify.design/cib/next-js.svg" width="22px" height="auto" alt="JSIcon"></img></h1>

> # **Page Rendering**

- ### Pre-rendering
- ### Static Generation
- ### Server-side Rendering
- ### 언제 무엇을 사용하면 좋은가

<br>

## **Pre-rendering**

_Next.js는 기본적으로 모든 페이지에 대해 pre-rendering을 한다._

기존의 `csr(client-side rendering) `방식에서는 client(즉 브라우저)에서 javascript코드를 실행시켜 페이지를 생성하였는데, **Next.js는 각각에 페이지에 대해 미리 HTML을 생성**하여 client에게 넘겨주게 된다. 때문에 **Next.js는 퍼포먼스나 SEO측면에서 큰 장점**을 가지고 있다.

물론 HTML뿐만 아니라 웹페이지가 그 목적대로 동작하기 위해 필요한 최소한의 필수적인 Javascript 코드(버튼 이벤트 등)를 같이 client로 넘기게 되고, 페이지가 브라우저에 로딩됨에 따라 해당 코드를 실행시켜 페이지가 완벽하게 동작하도록 만든다. 이 과정을 `hydration`이라고 한다.

Next.js는 **Static Generation**과 **Server-side Rendering**, 두 종류의 pre-rendering을 할 수 있다. 이 둘의 차이는 HTML을 생성하는 타이밍에 있다.

- Static Generation: HTML이 빌드될 때 생성되고 모든 request(웹페이지 요청)에 재사용된다.
- Server-side Rendering: HTML이 매 request마다 생성된다.

개발자는 각각의 페이지에 대해 어떤 pre-rendering방식을 사용할 것인지 지정할 수 있다.

<br>

**Static Generation**은 빌드될 때 해당 HTML이 만들어지고 매 request마다 해당 HTML을 재사용하기만 하면 되기 때문에 **성능 면에서 Server-side Rendering보다 우수**

**Server-side Rendering**은 사용자의 계정정보, 즉 유저에 따라 닉네임, 좋아요한 영상 목록 등이 다르게 나타나야 하는 등의 상황에서는 유일한 방법이다.

**Client-side Rendering**을 일부 페이지의 client-side의 Javascript 코드에 따라 rerender함으로써 위 두 가지 방법과 함께 사용할 수 있다.

<br>

## **Static Generation**

### Case1. 별도의 External Data가 없는 경우

```JS
function About() {
  return <div>About</div>
}

export default About
```

기본적으로, **Next.js는 페이지를 Static Generation 방식으로 pre-render**한다. 위 코드에서는 어떤 외부 데이터도 가져올 필요가 없습니다. 이런 상황에서는, N**ext.js가 페이지당 하나의 HTML 파일을 빌드 시점(next build)에 생성**한다.

### Case 2. 페이지의 컨텐츠가 External Data를 사용하는 경우

```JS
// 이 페이지가 제 목적대로 렌더링되기 위해선 posts의 데이터를 fetching해야 합니다.
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

// 이 함수는 빌드 시점에 호출됩니다
export async function getStaticProps() {
  // 외부 API의 엔드포인트를 호출해 데이터를 받아옵니다.
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // 이렇게 Blog 컴포넌트의 props 값으 빌드 시점에 넘겨줄 수 있습니다
  return {
    props: {
      posts,
    },
  }
}

export default Blog
```

블로그 페이지를 만든다고 생각해보면, Blog라는 이 컴포넌트(페이지)는 블로그 포스트들의 리스트를 렌더링 전에 받아와야 한다. 이 때 해당 컴포넌트(페이지) 파일에서 **`getStaticProps`라는 비동기 함수를 export 하면, 이 함수는 빌드 시점에 호출되어 해당 페이지에서 필요한 데이터를 fetch한 후 props 값으로 넘겨줄 수 있다.**

<br>

### Case 3. 페이지의 path가 External Data를 사용하는 경우

Next.js는 dynamic routes를 이용해 페이지 라우팅을 할 수 있다. 간단히 예를 들어 위 블로그 예시에서 `pages/posts/[id].js` 라는 파일을 만들면, **posts의 id 값에 기반하여 라우팅을 할 수 있다.**

이 페이지의 path가 API 호출 등으로 얻어온 external data에 기반하여 렌더링되게 하려면, Case 2의 경우처럼`getStaticPaths`라는 비동기 함수를 dynamic page 파일(`pages/posts/[id].js` 와 같은 페이지)에서 export 하면 된다.

```JS
// 이 함수는 빌드 시점에 호출됩니다
export async function getStaticPaths() {
  // 외부 API의 엔드포인트를 호출해 데이터를 받아옵니다
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // posts 데이터에 기반해 paths를 만들어줍니다
  const paths = posts.map((post) => `/posts/${post.id}`)

  return { paths, fallback: false }
}
```

위에서 설명했던 `getStaticProps` 와 마찬가지로 빌드 시점에 자동으로 호출되며, `getStaticProps` 와 동시에 같은 페이지에서 사용할 수도 있다.

<br>

## Server-side Rendering

이 방식은 페이지의 HTML이 매 request마다 생성된다. 해당 페이지의 코드에서 `getServerSideProps` 라는 비동기 함수를 export하면, 서버는 이 함수를 매 request마다 호출한다.

```JS

function Page({ data }) {
  // 데이터 렌더링
}

// 이 함수는 매 request마다 호출됩니다
export async function getServerSideProps() {
  // 외부 API로부터 데이터를 가져옵니다
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // props를 통해 데이터를 넘겨줍니다(getStaticProps와 유사)
  return { props: { data } }
}

export default Page
```

위 코드를 보면 `getServerSideProps` 의 사용이 `getStaticProps` 와 유사한 것을 확인할 수 있는데, 하지만 `getServerSideProps` 는 빌드 시점에 호출되는 것이아닌 매 request 마다 호출된다.

<br>

## **언제 무엇을 사용하면 좋은가**

마케팅 페이지, 블로그 포스트, 이커머스 상품의 리스트, 도큐먼트 등 CDN으로부터 받아 온 데이터를 통해 한 번만 빌드할 수 있다면, 매 request마다 server가 rendering하는 것보다 훨씬 빠르고 적은 리소스를 사용할 수 있다. 만약 이 페이지가 유저의 request 전에 pre-render 될 수 있다면, Static Generation을 통해 퍼포먼스와 SEO 측면에서 많은 이득을 가져갈 수 있다.

하지만 어떤 페이지가 자주 생기거나 업데이트되는 데이터를 다루거나, 페이지의 content가 로그인한 유저의 차이 등의 요인으로 인해 request마다 달라질 여지가 있다면, Static Generation은 좋지 않은 선택일 수 있다. 이런 상황에서는 다음과 같은 두가지 Action을 취할 수 있다.

- **Static Generation을 Client-side Rendering과 함께 사용:** 페이지의 일부분을 pre-rendering하지 않고 그 부분을 client-side에서 Javascript코드를 동작시켜 구성할 수 있다.
- **Server-side Rendering 사용:** 각각의 request마다 페이지를 pre-render하게 할 수 있다. 이는 페이지가 CDN에 의해 캐싱될 수 없기 때문에 느리겠지만, 항상 최신 상태(up-to-date)를 유지한다.
