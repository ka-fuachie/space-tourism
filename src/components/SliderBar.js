import React from 'react'

const SliderBar = ({ type, children }) => {
    return (
        <>
            {type === 'dot' ?
                <div className="dot-slider" role="tablist" >
                    {children}
                </div>
                :
                <div className="numbered-slider heading-4" role="tablist" >
                    {children}
                </div>
            }
        </>
    )
}

export const DotElement = ({children, selected, onClick}) => {
    return <button role="tab" aria-selected={selected} onClick={() => onClick(children)}><span className="sr-only">{children}</span></button>
}

export const NumberElement = ({children, selected}) => {
    return <button role="tab" aria-selected={selected}>{children}</button>
}


export default SliderBar
