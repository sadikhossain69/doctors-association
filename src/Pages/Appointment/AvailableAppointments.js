import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

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
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;