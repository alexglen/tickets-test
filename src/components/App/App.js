import React, {useState} from "react";
import {Filters} from "../Filters/Filters";
import {Logo} from "../Logo/Logo";
import {Tickets} from "../Tiskets/Tickets";
import {CurrencyContext} from "../../Context/CurrencyContext";
import "./App.scss";

export const App = () => {
    const [currency, setCurrency] = useState({
        currentCurrency: "rub",
        usd: null,
        eur: null,
        stops: [1, 2, 3, 4]
    });

    return (
        <CurrencyContext.Provider value={{currency, setCurrency}}>
            <Logo/>
            <main className="app">
                <Filters/>
                <Tickets/>
            </main>
        </CurrencyContext.Provider>
    )
}