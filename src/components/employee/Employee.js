import React from 'react';
import './Employee.css'

export const Employee = ({ employee }) => (
    <section className = "employee">
        <h3 className = "employee__name">{ employee.name }</h3>
    </section>
)