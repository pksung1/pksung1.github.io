import React from "react"
import Menu from "../Menu"

const MenuWrapper: React.FC = ({children}) => {
    return (
        <div className="flex flex-row">
            <Menu />
            <div className="md:ml-56 sm:ml-40 flex-1 overflow-hidden">
                {children}
            </div>
        </div>
    ) 
}
export default MenuWrapper