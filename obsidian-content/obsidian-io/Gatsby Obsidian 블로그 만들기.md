
> Gatsby로 Obsidian 블로그를 만들어가는 여정

# 진행상황


# 왜 블로그를 처음부터 만들어보게 되었을까
글을 쓰는것을 좋아한다. 사람들에게 내 지식을 공유하고 도움이 된다면 정말 기쁜일이라고 생각한다.

그러나 몇가지 맘에 안드는 부분이 있어 블로그에 글을 잘 안쓰게된다.
- 이미지를 올리면 해당 도메인에 종속되어버린다
- 무조건 인터넷이 되야한다. 오프라인을 지원하는 플랫폼도 있지만, 없는 플랫폼도 많다.
- Markdown으로  글쓰는게 편하다. 예전의 블로그글쓰기 툴로 쓰기 귀찮다..
- 만약 서비스가 종료된다면, 내 글은 다시볼수없다.
- 유니크하지않다. 다 똑같다.

물론 유입이나 그런걸 생각하면 네이버나 미디엄같은 플랫폼에 글을쓰는게 좋지만 아무렴어때
유입을 위해서 쓰는게 아닌 나를위해, 그리고 방문한 누군가를 위해 쓰는것이기 때문에 상관없다고 생각한다.

또 다른 이유는 개발자로서의 욕심도 있다.
- 알아온 지식을 바탕으로 블로그를 구축하고싶다
- 나만의 유니크한 블로그를 구축하고싶다.


# 어떻게 개발할지 idea 내보기
조건은 다음과 같다.
- 시간이 많이 안들고 틈틈히 개선할수있어야한다.
- 웹 화면은 직접 개발할수 있어야한다.
- markdown으로 글을 쓰고 배포할수 있어야한다


## 블로그 기술스택 정하기
서칭해봤을때 jeykll과 gatsby가 SSG로 유명한것같았다.
대부분 github.io 기술블로그도 둘중 하나로 구축하는것같고 nextjs..? 로도 구축하는것같다.

**그중에서 나는 gatsby를 선택했다.**

일단 React로 이루어진 Typescript기반이다 (버전5는 타입스크립트를 지원한다). 

jekyll은 ruby도 조금 알고써야 자유롭게 쓸수있어서 시간비용이 더 들것같다.

typescript기반의 nextjs와 gatsby를 비교한다면, gatsby는 graphql등 여러 플러그인으로 쉽게 SSG를 구축할수 있는 환경이 마련되어있다.

또한 markdown을 읽어오는 플러그인도 준비되어있어 개발시간을 단축할수 있을거라 생각했다.

## CMS 정하기
블로그 글을 쓰기위해 editor까지 만드는것은 시간이 오래걸리기도하고, 매번 서버를 실행해서 글을 써야한다는게 맘에 들지 않았다.

핵심은 어디서든 글을 쓰고, 어디서든 배포할수 있어야한다.

그래서 로컬에서 마크다운으로 글쓰기 편한 Obsidian으로 구축하면 좋을것같다고 생각헀다.
Obsidian은 파일이 md로 쓰이기도 하고 에디터도 편하다.

## 배포
github.io로 배포한다. 나중에 도메인연동하면 SEO지수는 올라가겠지만 일단 무료배포로 운영하는게 먼저다.

github.io로 운영하는것도 나쁘지않을지도..?



# 플랫폼을 정했다면, 다음은 개발가능 여부 확인


## 블로그 라우팅 정의
- / 블로그 메인페이지
- /post : 블로그 글 목록을 볼수있다
- /post/:id : 블로그 상세글을 볼수있다.
- /about-me: 내 소개페이지

위 네가지 페이지를 만들고자한다.
gatsby에서는 페이지를 만들때 정말 쉽다. nextjs랑 비슷한 라우팅구조를 가지고있다.

pages폴더에 정의하면 라우팅페이지가 완성된다 ([gatsby pages](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#page-components))

![[Pasted image 20240204150613.png]]


## 옵시디언글 가져오기

[gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) 플러그인으로 마크다운파일을 분석할것이다.
[remark](https://remark.js.org/) 를 활용해 마크다운을 파싱할수 있는 플러그인으로, AST tree로 변환하여 처리가 가능한 라이브러리이다.

글을 가져오는건 [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/) 으로 로드할수있다.
로컬파일 시스템에서 Gastby로 데이터를 소싱할수있다. (불러들일수 있음)

gatsby-source-filesystem이 gatsby-transformer-remark로 노드로 변환해줄수 있다.
아래와같이 gatsby-config를 세팅한다.
```json
// gatsby-config.ts
[
	// ...
	"gatsby-transformer-remark",
	{
	  resolve: 'gatsby-source-filesystem',
	  options: {
		"name": "obsidian-content",
		"path": `${__dirname}/obsidian-content`
	  },
	  __key: "obsidan"
	},
]
```

/obsidan-content를 vault를 하나 만들고 글을 쓰게되면 markdown글이 불러오지도록 할 준비가 된것이다.

이제 상세글을 볼수있는 templates를 하나 정의하자. ([gatsby project structure](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/))

## 블로그 상세글을 볼수있는 templates 정의하기
[gatsby template component](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#page-template-components)
/templates/blog-post.tsx 를 하나 생성하였다.
블로그 포스트 상세글을 볼수있는 페이지이다.

마크다운글을 불러오기떄문에, 마크다운을 분석하는 react-markdown을 추가하고 components를 자체 컴포넌트로 정의하였다.

이처럼 직접 정의하고, Markdown을 그릴수 있도록 하였다.
```tsx

const components: Options['components'] = {
  h1: (props: any) => <Text as="h2" className="text-2xl mt-6 mb-4 font-semibold" {...props} />,
  h2: (props: any) => <Text as="h2" className="text-xl mt-2 mb-3 font-bold" {...props} />,
  h3: (props: any) => <Text as="h3" className="text-lg mb-3 font-bold" {...props} />,
  h4: (props: any) => <Text as="h4" className="text-md mb-3 font-bold" {...props} />,
  h5: (props: any) => <Text as="h5" className="text-md mb-3 font-bold" {...props} />,
  h6: (props: any) => <Text as="h6" className="mb-3" {...props} />,
  p: (props: any) => <Text as="p" className="mb-1" {...props} />,
  a: (props: any) => <Text as="a" className="mb-1" {...props} />,
  pre: (props: any) => <CodeBlock as="pre" className="" {...props} />,
  table: (props: any) => <table className="table-auto dark:text-white dark:border-white" {...props} />,
  ul: (props: any) => <ul className="p-2" {...props} />,
  ol: (props: any) => <ol className="p-2" {...props} />,
  li: (props: any) => <li className="list-disc ml-4 dark:text-white mb-2" {...props} />,
}

// ...

<Markdown remarkPlugins={[remarkGfm]} components={components}>{pageContext.page.body}</Markdown>
```


아래와같이 글을 볼수있게 되었다.
![[Pasted image 20240204152847.png]]

## 블로그 상세 페이지의 slug는 어떻게 정의하는가?

slug는 페이지파일을 lowercase로 바꾸고 스페이스를 -로 바꿔 연결하는 식으로 하고자했다.
옵시디안 파일명도 중복이 안되고, 페이지를 직접 접근할때도 페이지명이라는걸 알고있다면 옵시디언 파일목록만 봐도 slug를 유추할수 있기 때문에 위처럼할 생각이다.

단 이방식은 프로그래밍 방식으로 페이지를 생성해야한다.

한 페이지에서 nodejs를 활용하는방법은 graphql밖에 없는데, 단순한 쿼리로는 slug를 생성할수 없기 때문에 직접 코드로 페이지를 생성하게 되었다.

gastby-node를 쓸때가 됬다.

## [Gastby Node](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)에서 페이지생성하기

Gatsby Node API는 웹사이트를 구축을 위한 API가 정의되어있다.

빌드 수명주기때 특별한수행이 가능한데, 지금 필요한것은 페이지를 생성할때 내 블로그글의 슬러그도 함께 생성하는것이기 때문에 페이지생성 API를 활용해야한다.


### 작성중...


## 게시물 목록 pagination 적용하기



## Obsidian의 embding 문법 \[\[]] 처리하기
블로그가 Obsidian을 기반으로 블로그를 구축하다보니, 실제 기능이 동작 가능한지는 확인해봐야 한다.

Obsidian에 올린 asset은 어떻게 처리할거고, \[\[]] 이 대괄호 두개는 어떻게 처리할건지도 고민해봐야한다.
직접 파서를 만들어야하는걸까? 이런 걱정도 있었지만 먼저 자료조사를 진행하였다.


관련 개발글은 [[gatsby 라이브러리]]에 작성했다.


# 개발기능여부를 확인했다면, 다음은 디자인
디자인을 하기위해 인프런 피그마 강의를 하나 결제했다
똥손이기때문에 디자인은 솔직히 자신없다..
그래도 해보고싶으니까 피그마 강의 할인이벤트때 결제하고 하나씩 공부해보고 있다.



---
[gastby-starter-garden](https://www.gatsbyjs.com/starters/juxtdesigncc/gatsby-starter-obsidian-garden)


