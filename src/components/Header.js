import { useState } from "react"
import NavBar, {NavElement} from "./NavBar"
import logo from "../assets/shared/logo.svg"
import menu from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"

const Header = ({active}) => {
    const [expanded, setExpanded] = useState(false)

    const toggleMenu = () => {
        setExpanded((prevState) => !prevState)
    }

    return (
        <header className="main-header">
            <img src={logo} alt="logo" className="logo" />
            <button className="mobile-nav-toggle" aria-controls="main-navigation" aria-expanded={expanded} onClick={toggleMenu}>
                <span className="sr-only">menu</span>
                <img src={expanded? close: menu} alt="menu" />
            </button>
            <NavBar expanded={expanded}>
                <NavElement to="/" className={active === "home" ? "active": ""}><span>00</span>home</NavElement>
                <NavElement to="/destination" className={active === "destination" ? "active": ""}><span aria-hidden="true">01</span>destination</NavElement>
                <NavElement to="/crew" className={active === "crew" ? "active": ""}><span aria-hidden="true">02</span>crew</NavElement>
                <NavElement to="/technology" className={active === "technology" ? "active": ""}><span aria-hidden="true">03</span>technology</NavElement>
            </NavBar>
        </header>
    )
}

export default Header
