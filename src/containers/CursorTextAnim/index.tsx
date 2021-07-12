import React, { HTMLAttributes, ReactChild, useState } from 'react'
import { useMemo } from 'react'

interface ICursorTextAnim {
    texts: Array<string>
    delay: number
    className: string
}

const CursorTextAnim:React.FC<ICursorTextAnim> = ({texts, delay, ...props}) => {

    const [index, setIndex] = useState(0)
    const className = useMemo(() => props.className ? `${props.className} cursor-text-anim` : `cursor-text-anim`, [props])



    return (
        <p {...props} className={className}></p>
    )
}

export default CursorTextAnim