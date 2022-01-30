---
title: Blog Composer Project (1)
date: "2022-01-30"
description: "First My Project"
category: 'Blog-Composer'
tags: ['계획', 'Blog-Composer']
---

# Blog Composer Project

첫 개인 프로젝트이자, 직접 운영해보고 싶은 프로젝트이다.

다른 블로그와 동일하게 markdown으로 글을 쓰고, 다른 블로그플랫폼에 게시글을 배포할수 있는 플랫폼이다.

기술스택은 아래와 같다.

## FrontEnd
- NextJS
- SWR
- AWS Amplify

## Backend
- express
- AWS DynamoDB
- AWS S3
- AWS ECS
- Docker

## 기능 요구사항

### 프론트엔드 요구사항
- [ ] 로그인 페이지
- [ ] 글 목록보기 페이지
- [ ] 글 상세보기 페이지
- [ ] 글 작성 페이지
    - [ ] 마크다운 에디터 구현
    - [ ] 이미지 드래그 앤 드롭
    - [ ] 자동저장 기능 구현

### Backend 요구사항
- [ ] 드래그앤 드랍한 이미지 업로드
- [ ] 글 목록 보기
- [ ] 글 상세 보기
- [ ] 특정 시간에 published 하기
- [ ] published 성공/실패 여부 slack 알림주기
- [ ] Medium 연동
- [ ] 다른 플랫폼은 방법 고안하기
- [ ] SNS 로그인
