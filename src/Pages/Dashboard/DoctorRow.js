import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {

    const { name, speciality, img, email } = doctor

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='w-16 rounded-full ring-2 ring-green-500' src={img} alt="" /></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>{email}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="modal-button btn btn-xs btn-outline btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;