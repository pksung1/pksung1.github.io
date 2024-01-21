import React from "react";
import Text from "@components/Text"

const Navbar = () => {

  return (
    <header className="p-2 justify-center flex flex-row w-full">
      <div className="desktop:max-w-[1100px] w-full flex flex-row items-center justify-between py-2 px-4">
        <Text className="text-2xl">vidilog</Text>
        <ul className="flex flex-row gap-2">
          <li><Text>Home</Text></li>
          <li><Text>Blog</Text></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar;