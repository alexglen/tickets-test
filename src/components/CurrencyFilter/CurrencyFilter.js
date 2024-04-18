import React, {useContext, useState} from "react";
import {ButtonGroup, Button} from "@mui/material";
import {CurrencyContext} from "../../Context/CurrencyContext";

export const CurrencyFilter = () => {
    const [activeButton, setActiveButton] = useState("rub");
    const {setCurrency} = useContext(CurrencyContext);

    const changeCurrency = async ({target}) => {
        setActiveButton(target.name);
        try {
            const data = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
            const {Valute: {USD: {Value: usd}, EUR: {Value: eur}}} = await data.json();
            setCurrency(currency => ({...currency, eur, usd, currentCurrency: target.name}));
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <ButtonGroup>
            <Button variant={activeButton === "rub" ? "contained" : "outlined"} name="rub"
                    onClick={changeCurrency}>RUB</Button>
            <Button variant={activeButton === "usd" ? "contained" : "outlined"} name="usd"
                    onClick={changeCurrency}>USD</Button>
            <Button variant={activeButton === "eur" ? "contained" : "outlined"} name="eur"
                    onClick={changeCurrency}>EUR</Button>
        </ButtonGroup>
    )
}