import { Link } from "react-router-dom"

const NavBar = ({children, expanded}) => {
    return (
        <nav id="main-navigation" data-expanded = {expanded}>
            <ul className="tab-navigation nav-text">
                {children}
            </ul>
        </nav>
    )
}

export const NavElement = ({children, className, to}) => {
    return (
        <li className={className}><Link to={to} className="numbered-text">{children}</Link></li>
    )
}

export default NavBar