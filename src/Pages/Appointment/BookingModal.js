import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, footer, setTreatment }) => {

    const [user, loading, error] = useAuthState(auth);


    const { _id, name, slots } = treatment

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        console.log(_id, name, slot);
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-center text-secondary">Booking For: {name}!</h3>
                    <form onSubmit={handleBooking} className=' text-center space-y-3'>
                        <input type="text" value={footer.props.children[1]} readOnly className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, index) => <option key={index} value={slot} >{slot}</option>)
                            }
                        </select>
                        
                        <input name='name' type="text" value={user?.displayName} className="input input-bordered w-full" readOnly required />

                        <input name='email' type="email" value={user?.email} className="input input-bordered w-full" readOnly required />

                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" required />

                        <input className=' bg-accent rounded-md text-white py-2 hover:bg-slate-600 hover:duration-300 cursor-pointer w-full uppercase' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;