import React from 'react'

const SliderBar = ({ type }) => {
    return (
        <>
            {type === 'dot' ?
                <div className="dot-slider">
                    <button aria-selected="true"><span className="sr-only">item</span></button>
                    <button><span className="sr-only">item</span></button>
                    <button><span className="sr-only">item</span></button>
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
