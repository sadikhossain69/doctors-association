import React from 'react';

const DoctorRow = ({doctor, index}) => {

    const {name, speciality, img, email} = doctor

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='h-16 rounded-full ring-2 ring-green-500' src={img} alt="" /></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>{email}</td>
            <td><button className='btn btn-xs btn-outline btn-error' >Delete</button></td>
        </tr>
    );
};

export default DoctorRow;