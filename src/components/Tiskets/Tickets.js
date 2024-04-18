import React, {useContext} from "react";
import {Ticket} from "../Tisket/Tisket";
import Card from "@mui/material/Card";
import {CurrencyContext} from "../../Context/CurrencyContext";
import data from "../../tickets.json";
import {filteredData, getDataWithCurrentCurrency} from "../../helpers";
import "./Tickets.scss";

export const Tickets = () => {
    const {currency} = useContext(CurrencyContext);
    const {tickets} = data;

    const ticketsInCurrentCurrency = getDataWithCurrentCurrency(tickets, currency);

    return (
        <div className="tickets">
            {filteredData(ticketsInCurrentCurrency, currency).length > 0 ? filteredData(ticketsInCurrentCurrency, currency).map(ticket =>
                <Ticket key={ticket.id} {...ticket}/>) : <Card className="empty-card"><h2>Билеты не найдены!</h2>
            </Card>}
        </div>
    )
}