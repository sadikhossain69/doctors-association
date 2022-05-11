import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-7'>
            <div className='flex-1 hidden lg:block md:hidden'>
                <img className='mt-[-100px]' src={doctorSmall} alt="" />
            </div>
            <div className='flex-1 text-white space-y-5 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl font-semibold'>Make an appointment Today!</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page!
                </p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppoinment;