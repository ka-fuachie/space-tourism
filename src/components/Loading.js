const Loading = ({className}) => {
    const Loader = () => (<div className="lds-facebook"><div></div><div></div><div></div></div>)

    /* styles */
    const loaderBg = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(255, 255, 255, 0.1)',
        opacity: 0.5,
        marginInline: 'auto',
        minWidth: '15em',
        minHeight: className = "technologyLoaderBg" ? '15em': '0px'
    }

    return (
        <div style={loaderBg} className={className}>
            <Loader />
        </div>
    )
}

export default Loading