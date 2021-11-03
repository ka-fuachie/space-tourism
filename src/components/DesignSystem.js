import LargeBtn from "./LargeBtn"
import NavBar, {NavElement} from "./NavBar"
import TabBar from "./TabBar"
import SliderBar from "./SliderBar"

const DesignSystem = () => {

    // Color display card component
    const ColorCard = ({ hex, rgb, hsl, className }) => {
        return (
            <div className="text-white ff-serif uppercase flow" style={{ flex: 1 }}>
                <div className={`${className} flex`} style={{
                    border: '1px solid white',
                    height: '5rem',
                    padding: '1rem',
                    alignItems: 'flex-end',
                }}>
                    <p>{hex}</p>
                </div>
                <p><span className="text-light ff-sans" style={{ marginRight: "2em" }}>rgb</span> {rgb}</p>
                <p><span className="text-light ff-sans" style={{ marginRight: "2em" }}>hsl</span> {hsl}</p>
            </div>
        )
    }

    return (
        <div className="container bg-dark flow text-white body-text" style={{
            paddingBlock: '3em',
            boxSizing: 'content-box',
        }}>
            <h1 className="uppercase ff-serif fs-700" >Design system</h1>

            {/* Colors */}
            <div className="flow">
                <h2 className="numbered-title"><span>01</span>colors</h2>
                <div className="flex">
                    <ColorCard
                        hex="#0b0d17"
                        rgb="11, 13, 23"
                        hsl="230, 35%, 7%"
                        className="text-white bg-dark"
                    />
                    <ColorCard
                        hex="#dod6f9"
                        rgb="208, 214, 249"
                        hsl="231, 77%, 90%"
                        className="text-dark bg-light"
                    />
                    <ColorCard
                        hex="#ffffff"
                        rgb="255, 255, 255"
                        hsl="0, 0%, 100%"
                        className="text-dark bg-white"
                    />
                </div>
            </div>

            {/* Typography */}
            <div className="flow">
                <h2 className="numbered-title"><span>02</span>typography</h2>
                <div className="flex" style={{gap: "1em"}}>
                    <div className="uppercase" style={{flex: 1}}>
                        <h1 className="heading-1">Earth</h1>
                        <h2 className="heading-2">Venus</h2>
                        <h3 className="heading-3">{"Jupiter & saturn"}</h3>
                        <h4 className="heading-4">{"Uranus, neptune & pluto"}</h4>
                        <h5 className="heading-5">So you want to travel to space</h5>
                    </div>
                    <div className="flow" style={{flex: 1}}>
                        <h6 className="sub-heading-1">384,400 km</h6>
                        <h6 className="sub-heading-2">Avg. distance</h6>
                        <p className="nav-text">Europa</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                    </div>
                </div>
            </div>

            {/* Interactive elements */}
            <div className="flow">
                <h2 className="numbered-title"><span>03</span>interactive elements</h2>
                {/* <NavBar>
                    <NavElement href="#" className="active"><span>01</span>active</NavElement>
                    <NavElement href="#"><span>02</span>hover</NavElement>
                    <NavElement href="#"><span>03</span>idle</NavElement>
                </NavBar> */}
                <TabBar/>
                <LargeBtn/>
                <SliderBar type="dot" />
                <SliderBar />
            </div>

        </div>
    )
}

export default DesignSystem