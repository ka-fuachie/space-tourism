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
                <p><span className="text-light" style={{ marginRight: "2em" }}>rgb</span> {rgb}</p>
                <p><span className="text-light" style={{ marginRight: "2em" }}>hsl</span> {hsl}</p>
            </div>
        )
    }

    return (
        <div className="container bg-dark flow text-white" style={{
            paddingBlock: '3em',
        }}>
            <h1 className="uppercase" >Design system</h1>

            {/* Colors */}
            <div>
                <h2 className="uppercase">01 colors</h2>
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

            {/* Typography */}
            <div className="flow">
                <h2 className="uppercase">02 typography</h2>
                <div className="uppercase">
                    <h1 className="ff-serif fs-900">Earth</h1>
                    <h2 className="ff-serif fs-800">Venus</h2>
                    <h3 className="ff-serif fs-700">{"Jupiter & saturn"}</h3>
                    <h4 className="ff-serif fs-600">{"Uranus, neptune & pluto"}</h4>
                    <h5 className="ff-sans-cond fs-500 text-light" style={{letterSpacing: "0.3rem"}}>So you want to travel to space</h5>
                </div>
                <div className="flow">
                    <h6 className="ff-serif fs-500 uppercase">384,400 km</h6>
                    <h6 className="ff-sans-cond fs-300 uppercase" style={{letterSpacing: "0.15rem"}}>Avg. distance</h6>
                    <p className="ff-sans-cond fs-400 uppercase" style={{letterspacing: "0.17rem"}}>Europa</p>
                    <p className="ff-sans fs-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                </div>
            </div>

        </div>
    )
}

export default DesignSystem