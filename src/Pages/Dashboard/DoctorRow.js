import React from 'react';
import toast from 'react-hot-toast';

const DoctorRow = ({ doctor, index, refetch }) => {

    const { name, speciality, img, email } = doctor

    const handleDelete = email => {

        const proceed = window.confirm("Are You Sure?")

        if (proceed) {
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
                        refetch()
                    }
                    else {
                        toast.error('Failed to Delete Doctor', { id: "Failed to Delete Doctor" })
                    }
                })
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='w-16 rounded-full ring-2 ring-green-500' src={img} alt="" /></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>{email}</td>
            <td><button onClick={() => handleDelete(email)} className='btn btn-xs btn-outline btn-error' >Delete</button></td>
        </tr>
    );
};

export default DoctorRow;