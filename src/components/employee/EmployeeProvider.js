import React, { useState, createContext } from 'react';

export const EmployeeContext = React.createContext();

export const EmployeeProvider = (props) => {


    return (
        <EmployeeContext.Provider value = {{
            employees, getEmployees, addEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}