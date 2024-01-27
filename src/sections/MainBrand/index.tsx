import BusinessCard from "@components/BusinessCard";
import React from "react";
import Text from "@components/Text"

const MainBrand = () => {

  return (
    <section className="w-full flex flex-row items-center justify-center py-10 px-10 gap-8">
      <div className="max-w-screen-lg flex lg:flex-row flex-col items-center md:gap-8 lg:gap-24">
        <div className="flex-1 items-center flex justify-center">
          <Text className="text-[82px]">HELLO,<br />ANYONE.</Text>
        </div>
        <div className="flex flex-1">
          <BusinessCard />
        </div>
      </div>
    </section>
  )
}

export default MainBrand;