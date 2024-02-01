import React from "react";
import Text from "@components/Text";
export interface BusinessCardProps {
  thumbnail: string;
  name: string;
}
const BusinessCard = () => {

  return (
    <div className="relative flex flex-row items-center justify-center">
      <div className="relative w-[480px] h-[300px] shadow-sm hover:shadow-xl hover:shadow-gray-50 shadow-gray-500 rounded-lg p-2 transition-all hover:-translate-y-2">
        <div className="w-full h-full border-4 border-dotted rounded-lg border-gray-500"></div>
        <div id="front" className="absolute w-full h-full flex flex-col items-center py-6 px-4 top-0">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-green-400 border-white border-4"></div>
          <Text className="text-xl pt-2">vidi</Text>
          <Text className="dark:text-gray-500">BUSINESS SOFTWARE DEVELOPER</Text>
          <Text as="blockquote" className="text-gray-500 text-center pt-2 px-4 block italic">
          “I am a software developer who is passionate about creating technology to elevate people, and building community.”
          </Text>
        </div>
        <div id="back" className="absolute"></div>
      </div>
    </div>
  )
}

export default BusinessCard;