import React from 'react'

const SliderBar = ({ type }) => {
    return (
        <>
            {type === 'dot' ?
                <div className="dot-slider">
                    <button aria-selected="true"></button>
                    <button></button>
                    <button></button>
                </div>
                :
                <div className="numbered-slider heading-4">
                    <button aria-selected="true">1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            }
        </>
    )
}

export default SliderBar
