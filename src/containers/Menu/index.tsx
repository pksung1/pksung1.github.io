import React from "react"
import Avatar from "../../components/Avatar"

const Menu = () => {

    return (
        <div className="hidden sm:flex w-56 justify-center h-screen fixed left-0 bg-violet-900 pt-32">
            <div className="mb-30">
                <Avatar />
                <ul className="items-center flex flex-col mt-10">
                    <li><a href="#Home" className="text-violet-100 text-lg">Home</a></li>
                    <li className="mt-4"><a href="#AboutMe" className="text-violet-100 text-lg">About Me</a></li>
                    <li className="mt-4"><a href="#Blog" className="text-violet-100 text-lg">Blog</a></li>
                    <li className="mt-4"><a href="#Contact" className="text-violet-100 text-lg">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu