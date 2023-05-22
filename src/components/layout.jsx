import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"


const Layout = ({children}) => {
    return (
        <main>
            {children}
        </main>
    )
}


export default Layout