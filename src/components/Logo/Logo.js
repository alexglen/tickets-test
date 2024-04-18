import React, {memo} from "react";
import logo from "../../images/logo.png";
import "./Logo.scss";

export const Logo = memo(() => (
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        </header>
    )
)