import React, { useContext, useEffect } from 'react';
import { LocationContext } from './LocationProvider';
import { Location } from './Location';
import './Location.css';

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext);

    useEffect(() => {
        console.log("initial render before data")
        getLocations()
    }, [])

    useEffect(() => {
        console.log("After the location state has changed")
        console.log(locations)
    }, [locations])

    return (
        <div className = "locations">
        {
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
    )
}