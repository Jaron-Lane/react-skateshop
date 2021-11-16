import React, { useEffect, useContext } from 'react';
import { SkateboardContext } from './SkateboardProvider';
import { Skateboard } from './Skateboard';
import './Skateboard.css'

export const SkateboardList = () => {
    const { skateboards, getSkateboards } = useContext(SkateboardContext); 

    useEffect(() => {
        getSkateboards()
    }, [])

    useEffect(() => {
        console.log(skateboards)
    }, [skateboards])

    console.log(skateboards)

    return (
        <div className = 'skateboards'>
        {
            skateboards.map(brd => <Skateboard key = {brd.id} skateboard={brd} />)
        }
        </div>
    )
}