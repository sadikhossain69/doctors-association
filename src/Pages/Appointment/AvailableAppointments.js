import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date, setDate }) => {

    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>Available Appointments on {format(date, 'PP')}.</p>;
    }

    const formattedDate = footer.props.children[1]

    const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () => fetch(`https://gentle-mountain-57996.herokuapp.com/available?date=${formattedDate}`)
    .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    // useEffect(() => {
    //     axios.get(`https://gentle-mountain-57996.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => {
    //             setServices(res.data);
    //         })
    // }, [formattedDate])

    return (
        <div>
            <h3 className=' text-center text-xl text-secondary font-semibold mb-5'>{footer}</h3>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} footer={footer} data={date} treatment={treatment} refetch={refetch} />}
        </div>
    );
};

export default AvailableAppointments;