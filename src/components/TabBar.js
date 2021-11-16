const TabBar = ({children}) => {
    return (
        <div role="tablist" className="tab-navigation nav-text text-white">
            {children}
        </div>
    )
}

export const TabElement = ({children, controls, selected, onClick}) => {
    return <button role="tab" aria-controls={controls} aria-selected={selected} onClick={() => !selected && onClick(children)}>{children}</button>
}

export default TabBar