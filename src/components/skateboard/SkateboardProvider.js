import React, { useState } from 'react';

export const ProviderContext = React.createContext();

export const SkateboardProvider = () => {
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
}