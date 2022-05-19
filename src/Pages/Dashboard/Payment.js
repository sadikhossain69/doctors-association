import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0q9uHZj0Xrm17hnHQItw0oVuscyz2DwBUiDjqiUKVWHKdzuiIAwGEXpp4p0P1w8yJxu6oxgvBT9yTrQWILHfCQ00K5BuLSky');

const Payment = () => {

    const { id } = useParams()
    // console.log(id);

    const url = `https://gentle-mountain-57996.herokuapp.com/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    // console.log(appointment);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='space-y-3'>
            <div className="card max-w-md bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <p className="text-success">Hello, {appointment.patientName}</p>
                    <h2 className="card-title">Pay For {appointment.treatment}</h2>
                    <p>Your Appointment: {appointment.date} at {appointment.slot}</p>
                    <p>Please Pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card max-w-md shadow-2xl bg-base-100 mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;