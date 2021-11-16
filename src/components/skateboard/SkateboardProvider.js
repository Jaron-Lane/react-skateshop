import React, { useState } from 'react';

export const SkateboardContext = React.createContext();

export const SkateboardProvider = (props) => {
    const [ skateboards, setSkateboards ] = useState([]);

    const getSkateboards = () => {
        return fetch("http://localhost:8088/skateboards")
            .then(res => res.json())
            .then(setSkateboards)
    }

    const addSkateboard = (skateboard) => {
        return fetch("http://localhost:8088/skateboards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(skateboard)
        })
        .then(res => res.json())
        .then(getSkateboards)
    }

    return (
        <SkateboardContext.Provider value = {{
            skateboards, getSkateboards, addSkateboard
        }}>
            {props.children}
        </SkateboardContext.Provider>
    ) 
}