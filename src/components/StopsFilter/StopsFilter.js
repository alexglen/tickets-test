import React, {useContext, useState} from "react";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {CurrencyContext} from "../../Context/CurrencyContext";
import {stopsObject} from "../../data";

export const StopsFilter = () => {
    const {setCurrency, currency: {stops}} = useContext(CurrencyContext);

    const [value, setValue] = useState({
        zero: true,
        one: true,
        two: true,
        three: true,
    });

    const setStopsFilter = ({target: {name, checked}}) => {
        if (!checked) {
            const index = stops.indexOf(stopsObject[name]);
            const newStopsArray = [...stops.slice(0, index), ...stops.slice(index + 1)];
            setCurrency(currency => ({
                ...currency, stops: newStopsArray
            }));
        } else {
            setCurrency(currency => ({
                ...currency, stops: [...currency.stops, stopsObject[name]]
            }));
        }
        setValue({
            ...value,
            [name]: checked,
        });
    };

    const {zero, one, two, three} = value;

    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox/>} label="Без пересадок" name="zero" checked={zero}
                                  onChange={setStopsFilter}/>
                <FormControlLabel control={<Checkbox/>} label="1 пересадка" name="one" checked={one}
                                  onChange={setStopsFilter}/>
                <FormControlLabel control={<Checkbox/>} label="2 пересадки" name="two" checked={two}
                                  onChange={setStopsFilter}/>
                <FormControlLabel control={<Checkbox/>} label="3 пересадки" name="three" checked={three}
                                  onChange={setStopsFilter}/>
            </FormGroup>
        </div>
    )
}