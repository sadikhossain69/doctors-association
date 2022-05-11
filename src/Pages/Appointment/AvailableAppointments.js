import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({date, setDate}) => {

    const [services, setServices] = useState([])

    useEffect( () => {
        axios.get('services.json')
        .then(res => {
            setServices(res.data);
        })
    }, [] )

    return (
        <div>
            <h3 className=' text-center text-xl text-secondary font-semibold'>Available Appointments on {format(date, 'PP')}</h3>
        </div>
    );
};

export default AvailableAppointments;