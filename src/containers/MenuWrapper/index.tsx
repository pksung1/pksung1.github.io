import React from "react"
import Menu from "../Menu"

const MenuWrapper: React.FC = ({children}) => {
    return (
        <div className="flex flex-row">
            <Menu />
            <div className="sm:ml-56 flex-1">
                {children}
            </div>
        </div>
    ) 
}
export default MenuWrapper