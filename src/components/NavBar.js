const NavBar = ({children, expanded}) => {
    return (
        <nav id="main-navigation" data-expanded = {expanded}>
            <ul className="tab-navigation nav-text">
                {children}
            </ul>
        </nav>
    )
}

export const NavElement = ({children, className, href}) => {
    return (
        <li className={className}><a href={href} className="numbered-text">{children}</a></li>
    )
}

export default NavBar