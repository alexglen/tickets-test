import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import logo from "../../images/turkishairlines.svg";
import ticketIcon from "../../images/ticketIcon.png";
import {styled} from "@mui/material/styles";
import {blue} from "@mui/material/colors";
import {formatDate, getWordWithCountOfStopsInRightCase} from "../../helpers";
import "./Ticket.scss";

const BuyTicketButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(blue[500]),
    height: 45,
    backgroundColor: blue[500],
    "&:hover": {
        backgroundColor: blue[700],
    },
}));

export const Ticket = (props) => {
    const {
        price,
        origin_name: originName,
        destination,
        origin,
        destination_name: destinationName,
        departure_date: departureDate,
        departure_time: departureTime,
        arrival_date: arrivalDate,
        arrival_time: arrivalTime,
        carrier,
        stops,
        type
    } = props;

    const currencySymbol = (type === "rub") ? "₽" : (type === "usd") ? "$" : "€";

    return (
        <Card className="ticket">
            <CardContent>
                <article>
                    <div className="ticket-interface">
                        <div className="ticket-interface-company-name">
                            TURKISH <br/>
                            AIRLINES
                            <div className="ticket-interface-company-name-logo">
                                <img src={logo} alt="turkish airlines logo"/>
                            </div>
                        </div>
                        <div className="ticket-interface-buy-ticket-button">
                            <BuyTicketButton variant="contained"
                                             size="medium">{`Купить за ${price} ${currencySymbol}`} </BuyTicketButton>
                        </div>
                    </div>
                    <section className="ticket-flight">
                        <div className="ticket-flight-info">
                            <p className="ticket-flight-info-time">
                                {departureTime}
                            </p>
                            <p className="ticket-flight-info-place">
                                {origin}, {originName}
                            </p>
                            <p className="ticket-flight-info-date">
                                {formatDate(departureDate)}
                            </p>
                        </div>

                        <div className="ticket-flight-stops">
                            <div>
                                {stops !== 0 ? `${stops} ${getWordWithCountOfStopsInRightCase(stops)}` : "БЕЗ ПЕРЕСАДОК"}
                            </div>
                            <div className="ticket-flight-stops-line">
                                <div className="ticket-flight-stops-line-contour"></div>
                                <img alt="ticket icon" src={ticketIcon}/>
                            </div>
                        </div>

                        <div className="ticket-flight-info">
                            <p className="ticket-flight-info-time">
                                {arrivalTime}
                            </p>
                            <p className="ticket-flight-info-place">
                                {destinationName}, {destination}
                            </p>
                            <p className="ticket-flight-info-date">
                                {formatDate(arrivalDate)}
                            </p>
                        </div>
                    </section>

                </article>
            </CardContent>
        </Card>
    )
}