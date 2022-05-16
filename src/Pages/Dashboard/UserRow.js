import React from 'react';

const UserRow = ({user, index}) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td><button className="btn btn-xs">Make Admin</button></td>
            <td><button className="btn btn-xs">Delete User</button></td>
        </tr>
    );
};

export default UserRow;