import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Payment = () => {

    const { id } = useParams()
    console.log(id);

    const url = `https://gentle-mountain-57996.herokuapp.com/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    console.log(appointment);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='space-y-3'>
            <div class="card max-w-md bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <p className="text-success">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Pay For {appointment.treatment}</h2>
                    <p>Your Appointment: {appointment.date} at {appointment.slot}</p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card max-w-md shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;