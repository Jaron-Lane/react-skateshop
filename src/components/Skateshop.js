import React from "react";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { SkateboardProvider } from "./skateboard/SkateboardProvider";
import { SkateboardList } from "./skateboard/SkateboardList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import "./Skateshop.css";

export const Skateshop = () => (
    <>
        <h2>Nashville Skateshop</h2>
        <small>Tricks N Stuff.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Skateboards</h2>
        <SkateboardProvider>
            <SkateboardList />
        </SkateboardProvider>

        <h2>Employees</h2>
        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>
    </>
)