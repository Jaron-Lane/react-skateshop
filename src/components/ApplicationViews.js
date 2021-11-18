import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LocationProvider } from './location/LocationProvider';
import { LocationList } from './location/LocationList';
import { SkateboardProvider } from './skateboard/SkateboardProvider';
import { SkateboardList } from './skateboard/SkateboardList';
import { CustomerProvider } from './customer/CustomerProvider';
import { CustomerList } from './customer/CustomerList';
import { EmployeeProvider } from './employee/EmployeeProvider';
import { EmployeeList } from './employee/EmployeeList';


export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <Routes>
                    <Route exact path = "" element={<LocationList />} />
                    <Route exact path = "/locations" element={<LocationList />} />
                </Routes>
            </LocationProvider>

            <SkateboardProvider>
                <Routes>
                    <Route path = "/skateboards" element={<SkateboardList />} />
                </Routes>
            </SkateboardProvider>

            <CustomerProvider>
                <Routes>
                    <Route path = "/customers" element={<CustomerList />} />
                </Routes>
            </CustomerProvider>

            <EmployeeProvider>
                <Routes>
                    <Route path = "/employees" element={<EmployeeList />} />
                </Routes>
            </EmployeeProvider>
        </>
    )
}