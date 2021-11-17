import React, { useState } from 'react';

export const CustomerContext = React.createContext();

export const CustomerProvider = (props) => {
    const [ customers, setCustomer ] = useState([]);

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomer)
    }

    const addCustomer = (customer) => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: "Content-Type: application/json",
            body: JSON.stringify(customer)
        })
        .then(getCustomers)
    }

    console.log( "display my customers", customers )

    return (
        <CustomerContext.Provider value = {{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}