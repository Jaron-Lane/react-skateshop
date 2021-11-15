import React from "react";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import "./Skateshop.css";

export const Skateshop = () => (
    <>
        <h2>Nashville Skateshop</h2>
        <small>Tricks N Stuff.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)