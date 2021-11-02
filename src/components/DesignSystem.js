const DesignSystem = () => {

    // Color display card component
    const ColorCard = ({ hex, rgb, hsl, style }) => {
        return (
            <div className="text-white uppercase flow" style={{ flex: 1 }}>
                <div className={`${style} flex`} style={{
                    border: '1px solid white',
                    height: '5rem',
                    padding: '1rem',
                    alignItems: 'flex-end',
                }}>
                    <p>{hex}</p>
                </div>
                <p><span className="text-light" style={{marginRight: "2em"}}>rgb</span> {rgb}</p>
                <p><span className="text-light" style={{marginRight: "2em"}}>hsl</span> {hsl}</p>
            </div>
        )
    }

    return (
        <div className="container bg-dark flow" style={{
            paddingBlock: '3em'
        }}>
            <h1 className="text-white" >Design system</h1>
            <div className="flex">
                <ColorCard
                    hex="#0b0d17"
                    rgb="11, 13, 23"
                    hsl="230, 35%, 7%"
                    style="text-white bg-dark"
                />
                <ColorCard
                    hex="#dod6f9"
                    rgb="208, 214, 249"
                    hsl="231, 77%, 90%"
                    style="text-dark bg-light"
                />
                <ColorCard
                    hex="#ffffff"
                    rgb="255, 255, 255"
                    hsl="0, 0%, 100%"
                    style="text-dark bg-white"
                />
            </div>

        </div>
    )
}

export default DesignSystem