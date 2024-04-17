import React from "react";
import logo from "../../images/logo.png";
import "./Logo.scss";

export const Logo = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        </header>
    )
}