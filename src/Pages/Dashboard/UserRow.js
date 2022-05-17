import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ user, index, refetch }) => {

    const { email, role } = user

    const makeAdmin = () => {
        fetch(`https://gentle-mountain-57996.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403) {
                    toast.error('Failed to make an Admin', {id: 'failed to make an admin'})
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    console.log(data);
                    return toast.success("Successfully make Admin", { id: 'admin toast' })
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role !== 'admin'
                    ?
                    <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
                    :
                    <button className='btn btn-xs bg-blue-500 border-0 hover:bg-blue-500'>Already Admin</button>
            }</td>
            <td><button className="btn btn-xs">Delete User</button></td>
        </tr>
    );
};

export default UserRow;