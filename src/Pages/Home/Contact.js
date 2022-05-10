import React from 'react';
import appointment from '../../assets/images/appointment.png'


const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className=' mt-32'>

            <div className='flex justify-center items-center h-screen flex-col'>
                <div className='text-center lg:m-12 m-4'>
                    <h4 className='text-xl font-bold text-primary'>Contact Us</h4>
                    <h2 className='text-4xl font-semibold text-white'>Stay connected with us</h2>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body space-y-5">
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <textarea class="textarea textarea-bordered h-24" placeholder="Your Massage"></textarea>
                        </div>
                        <div>
                            <div className="form-control mt-6 w-32 mx-auto text-white">
                                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;