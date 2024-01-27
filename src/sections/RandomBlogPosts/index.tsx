import React, { useMemo } from "react";
import Text from "@components/Text"

const posts  = [
  {
    title: "React 깊게 이해하기 - 1",
    description: "Fiber의 동작원리를 알아보자",
    thumbnail: ""
  },
  {
    title: "엄청 긴 제목의 경우 얼마나 길게 나올까??? 두줄까지 보여주고 나머지는 숨길생각임",
    description: "Fiber의 동작원리를 알아보자",
    thumbnail: ""
  },
  {
    title: "진짜 짧은 제목",
    description: "대신 설명이 엄청 긴데, 3줄까지 보여주고 숨길거임 텍스트 ㅎㅎ, 대신 설명이 엄청 긴데, 3줄까지 보여주고 숨길거임 텍스트 ㅎㅎ, 대신 설명이 엄청 긴데, 3줄까지 보여주고 숨길거임 텍스트 ㅎㅎ",
    thumbnail: ""
  }
  
]

const RandomBlogPosts = () => {

  return (
    <div className="bg-green-500 py-10">
      <div className="flex flex-row gap-4">
        {posts.map((post) => <PostCard {...post} key={post.title} />)}
      </div>
    </div>
  )
}


interface PostCardProps {
  title?: string;
  thumbnail?: string;
  description?: string;
}
const PostCard = ({ title, thumbnail, description}: PostCardProps) => {

  return (
    <div className="border border-white w-[250px] rounded-md flex flex-col">
      <div className="h-[160px] bg-white">{thumbnail}</div>
      <div className="p-2 bg-gray-900 rounded-bl-lg rounded-br-lg flex-1">
        <Text as="h3" className="text-lg font-bold mb-1">{sliceText(title ?? "", 27)}</Text>
        <Text as="p">{sliceText(description ?? "", 32) }</Text>
      </div>
    </div>
  )
}

const sliceText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}

export default RandomBlogPosts;