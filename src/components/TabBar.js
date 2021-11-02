const TabBar = () => {
    return (
        <div role="tablist" className="tab-navigation nav-text text-white">
            <button role="tab" aria-selected="true">Moon</button>
            <button role="tab">Mars</button>
            <button role="tab">Europa</button>
        </div>
    )
}

export default TabBar