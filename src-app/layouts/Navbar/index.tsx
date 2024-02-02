import React from "react";
import Text from "@components/Text"
import { Link } from "gatsby";

const Navbar = () => {

  return (
    <header className="p-2 justify-center flex flex-row w-full">
      <div className="desktop:max-w-[1100px] w-full flex flex-row items-center justify-between py-2 px-4">
        <Text className="text-2xl">vidilog</Text>
        <ul className="flex flex-row gap-4 text-sm">
          <li><Link to="/"><Text>Home</Text></Link></li>
          <li><Link to="/posts"><Text>Posts</Text></Link></li>
          <li><Link to="/about"><Text>About me</Text></Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar;