import React from "react";
import {CurrencyFilter} from "../CurrencyFilter/CurrencyFilter";
import {StopsFilter} from "../StopsFilter/StopsFilter";
import Card from "@mui/material/Card";
import "./Filters.scss";

export const Filters = () => {
    return (
        <Card className="filters">
            <h4>
                ВАЛЮТА
            </h4>
            <CurrencyFilter/>
            <h4>
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </h4>
            <StopsFilter/>
        </Card>
    )
}