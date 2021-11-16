import React, { useEffect, useContext } from 'react';
import { SkateboardContext } from './SkateboardProvider';
import { Skateboard } from './Skateboard';
import './Skateboard.css'

export const SkateboardList = () => {
    const { skateboards, getSkateboards } = useContext(SkateboardContext); 

    useEffect(() => {
        getSkateboards()
    }, [])

    return (
        <div className = 'skateboards'>
        {
            skateboards.map(brd => <Skateboard key = {brd.id} board={brd} />)
        }
        </div>
    )
}