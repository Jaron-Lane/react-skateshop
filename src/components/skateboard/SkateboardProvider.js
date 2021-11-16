import React, { useState } from 'react';

export const SkateboardContext = React.createContext();

export const SkateboardProvider = (props) => {
    const [ skateboards, setSkateboards ] = useState([]);

    const getSkateboards = () => {
        return fetch("http://localhost:8088/skateboards")
        .then(res => res.json())
        .then(setSkateboards)
    }

    const addSkateboard = () => {
        return fetch("http://localhost:8088/skateboards", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(skateboards)
        })
        .then(res => res.json())
        .then(getSkateboards)
    }

    return (
        <ProviderContext.Provider value = {{
            skateboards, getSkateboards, addSkateboard
        }}>
            { props.children }
        </ProviderContext.Provider>
    ) 
}