import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date, setDate }) => {

    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>Available Appointments on {format(date, 'PP')}.</p>;
    }

    useEffect(() => {
        axios.get('services.json')
            .then(res => {
                setServices(res.data);
            })
    }, [])

    return (
        <div>
            <h3 className=' text-center text-xl text-secondary font-semibold mb-5'>{footer}</h3>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} />}
        </div>
    );
};

export default AvailableAppointments;