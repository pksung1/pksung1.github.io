import React from "react";
import Text from "@components/Text"

const KeywordList: KeywordCardProps[] = [
  {title: "For Product",
description: "제품을 위해 일합니다.\n제품이 잘되기 위해서 다양한 실험을 하며, 지표로 결론을 냅니다."},
  {title: "Solved Problem", description: "비즈니스/기술의 문제를 해결합니다. 우리가 무엇을 할수있고, 어떤역량이 있으며, 어떻게 문제를 해결하고 사용자에게 도달할수 있을까를 고민합니다."},
  {title: "Efficiency", description: "제품을 만드는 과정에서 효율을 찾습니다. 24시간을 투자해 168시간을 줄일수 있다면 행동합니다."},
  {title: "Stability", description: "안정적이고, 확장가능한 구조를 고민합니다. 내 제품을 내가 책임지고 키우고 확장할수 있도록 고민하며 개발합니다."},
]

const MainKeyword = () => {
  return (
    <div className="flex items-center lg:justify-center py-10 px-5  overflow-scroll">
      <div className="flex w-laptop flex-row gap-5 shrink-0">
        {KeywordList.map((keyword) => <KeywordCard {...keyword} key={keyword.title} />)}
      </div>
    </div>
  )
}

interface KeywordCardProps {
  title: string;
  description?: string;
}
const KeywordCard = ({
  title,
  description
}: KeywordCardProps) => {
  return (
    <div className="flex-1 border border-gray-200 p-4 rounded-lg">
      <Text as="p" className="text-xl font-bold mb-2.5">{title}.</Text>
      <Text as="p" className="text-sm">{withNewline(description ?? "")}</Text>
    </div>
  )
}

const withNewline = (text: string) => text.split('\n').map(text => <>{text}<br/></>)

export default MainKeyword;