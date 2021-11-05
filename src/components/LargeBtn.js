const LargeBtn = ({children, onClick}) => {
    return (
        <button className="large-btn text-dark bg-white heading-4" onClick={onClick}>{children}</button>
    )
}

export default LargeBtn