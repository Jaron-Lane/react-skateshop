import React from 'react';
import "./Skateboard.css";

export const Skateboard = ({ board }) => (
    <section className = "skateboard">
        <h3 className = "skateboard__name">{board.name}</h3>
        <div className = "skateboard__type">{board.type}</div>
    </section>
)