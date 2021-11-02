const NavBar = ({children}) => {
    return (
        <nav>
            <ul className="tab-navigation nav-text">
                {children}
            </ul>
        </nav>
    )
}

export const NavEement = ({children, className, href}) => {
    return (
        <li className={className}><a href={href} className="numbered-text">{children}</a></li>
    )
}

export default NavBar