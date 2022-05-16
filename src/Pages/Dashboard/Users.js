import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, error } = useQuery('users', () => fetch(`http://localhost:5000/user`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        toast.error(error, { id: 'dashboard all users error' })
    }

    return (
        <div>
            <h2 className="text-2xl text-center">
                All Users {users.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;