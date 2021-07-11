import { faGithub } from "@fortawesome/free-brands-svg-icons"
import React from "react"
import Avatar from "../../components/Avatar"
import Icon from "../../components/Icon"

const Menu = () => {

    return (
        <div className="hidden sm:flex w-56 justify-center h-screen fixed left-0 bg-violet-900 pt-32">
            <div className="mb-30">
                <div className="flex-col">
                    <Avatar />
                    <div className="flex justify-center mt-5 align-center">
                        <a href="https://github.com/pksung1">
                            <Icon icon={faGithub}/>
                        </a>
                    </div>
                </div>
                
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