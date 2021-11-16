import React from 'react';
import "./Skateboard.css";

export const Skateboard = ({ skateboard }) => (
    <section className = "skateboard">
        <h3 className = "skateboard__name">{ skateboard.name }</h3>
        <div className = "skateboard__type">{ skateboard.type }</div>
    </section>
)