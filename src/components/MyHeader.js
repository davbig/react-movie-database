const MyHeader = (props) => {
    return ( 
        <header>
            <h1>{props.title}</h1>
            <nav>
                <a href="https://www.super-code.de">Menu</a>
                <a href="https://www.super-code.de">Menu 2</a>
            </nav>
        </header>
     );
}

export default MyHeader;