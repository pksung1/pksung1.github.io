---
title: 게츠비 블로그 만들기
date: "2022-01-30"
description: "나만의 글쓰기용 블로그"
category: 'gatsby-blog'
tags: ["gatsby"]
---

나만의 블로그를 만들고 싶었다.

다른 블로그는 jekyll 로 많이 만들어져있으나, 커스터마이징 하기에는 루비를 배워야 했다.

리액트로 블로그를 만들수 없을까 하다가 찾아낸게 [gatsby](https://www.gatsbyjs.com/)이다.

나의 요구사항은 아래와 같았다.

- 리액트같은 SPA 기능
- 직접 코드 작성하기 쉬움
- Markdown으로 글을 쓰고싶음
- Canvas로 인터렉티브한 화면을 넣을수 있어야함
- tailwindcss 쓰고싶다

위 다섯가지 조건을 만족하는게 gatsby였다.

거기에 데이터는 graphql로 제공받을수 있어 내가 원하는 정보만 쿼리를 통해 가져올수도 있다.

지금 이글을 쓰는 시점이 이미 페이지나 라우팅을 다 작업해놓은 상태여서 몇가지 개발할때 참고할만한 포인트만 작성해놓으려 한다.


블로그를 위해 사용할것이라면 이 스타터로 시작하는걸 추천한다.

https://github.com/gatsbyjs/gatsby-starter-blog

대부분의 블로그 기능들이 들어가있고, graphql을 보며 분석하면 쉽게 블로그를 구현할수 있다.


### gatsby-config
```js
{
    resolve: `gatsby-source-filesystem`,
    options: {
    path: `${__dirname}/content/blog`,
    name: `blog`,
    },
},
```
여기서 blog글들을 모두 찾는다

나중에 나는 TIL이란 글을 추가할건데, 이건 아래와같이 추가하면된다.
```js
 {
    resolve: `gatsby-source-filesystem`,
    options: {
    path: `${__dirname}/content/TIL`,
    name: `TIL`,
    },
},
```
gatsby-node.js 파일이 있는데 여기서 markdown 파일들을 생성한다.

폴더별로 분류해서 게시물을 가져오기 위해 graphql filter를 사용했다.

```graphql
allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    filter: {fileAbsolutePath: {regex: "/\/blog\//"}}
) {
    nodes {
        excerpt
        fields {
            slug
        }
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
        }
    }
}
```

