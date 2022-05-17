import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('https://gentle-mountain-57996.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-2xl text-center text-green-600">Total Doctors : {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map( (doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                            /> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;