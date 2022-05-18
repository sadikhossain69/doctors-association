import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots, price } = service

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body mx-auto text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length 
                    ? 
                    <span>{slots[0]}</span>
                    : 
                    <span className=' text-red-500'>No Slots Available Now!</span>
                }</p>
                <p className=' text-sm'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                    htmlFor='booking-modal'
                    onClick={ () => setTreatment(service) }
                    disabled={slots.length === 0} className="btn btn-primary text-white bg-gradient-to-r bg-secondary w-48 border-0">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;