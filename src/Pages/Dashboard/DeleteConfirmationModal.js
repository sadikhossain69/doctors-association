import React from 'react';
import toast from 'react-hot-toast';

const DeleteConfirmationModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {

    const { name, email } = deletingDoctor

    const handleDelete = () => {

        fetch(`https://gentle-mountain-57996.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Doctor Deleted Successfully", { id: 'Doctor Deleted Successfully' })
                    setDeletingDoctor(null)
                    refetch()
                }
                else {
                    toast.error('Failed to Delete Doctor', { id: "Failed to Delete Doctor" })
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are You Sure?You Want To Delete {name} !</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className='text-center space-x-2'>
                        <button onClick={() => handleDelete()} className='btn btn-error' >Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmationModal;