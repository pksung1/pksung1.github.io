import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import React from 'react'

const Icon:React.FC<FontAwesomeIconProps> = ({icon}) => (
    <div className="w-8 h-8 flex items-center justify-center bg-violet-100 rounded-full">
        <FontAwesomeIcon icon={icon} className="text-lg"/>
    </div>
)

export default Icon