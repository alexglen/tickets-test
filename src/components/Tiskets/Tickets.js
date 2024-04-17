import React, {useContext} from "react";
import {CurrencyContext} from "../../Context/CurrencyContext";
import data from "../../tickets.json";
import {Ticket} from "../Tisket/Tisket";
import {filteredData, getDataWithCurrentCurrency} from "../../helpers";
import "./Tickets.scss";

export const Tickets = () => {
    const {currency} = useContext(CurrencyContext);
    const {tickets} = data;

    const ticketsInCurrentCurrency = getDataWithCurrentCurrency(tickets, currency);

    return (
        <div className="tickets">
            {filteredData(ticketsInCurrentCurrency, currency).map(ticket => <Ticket key={ticket.id} {...ticket}/>)}
        </div>
    )
}