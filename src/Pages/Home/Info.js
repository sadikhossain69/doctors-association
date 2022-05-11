import React from 'react';
import InfoCard from './InfoCard'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const info = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 '>
                <InfoCard bgclassName='bg-gradient-to-r from-cyan-500 to-blue-500' cardTitle='Opening Hours!' img={clock} />
                <InfoCard bgclassName='bg-accent' cardTitle='Visit Our Location!' img={marker} />
                <InfoCard bgclassName='bg-gradient-to-r from-cyan-500 to-blue-500' cardTitle='Contact Us Now!' img={phone} />
            </div>
        </>
    );
};

export default info;