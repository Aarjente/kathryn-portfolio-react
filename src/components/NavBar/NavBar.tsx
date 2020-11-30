import React from "react";
import "./NavBar.css";

interface NavButtonProps {
    children: React.ReactNode;
}

const NavButton = ({children}: NavButtonProps): JSX.Element => {
    return <span className="navButton">{children}</span>
}

const navButtons = ["Home", "About", "Sketchbook"]

export const NavBar = (): JSX.Element => {
    return <div className="container">
        <div className="siteHeader">Portfolio</div>
        <div className="navButtonContainer">
            {navButtons.map(button => <NavButton>{button}</NavButton>)}
        </div>
    </div>
}

// #62727b - light grey
// #102027 - dark grey

