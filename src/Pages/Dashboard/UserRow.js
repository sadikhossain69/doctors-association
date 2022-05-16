import React from 'react';

const UserRow = ({user, index}) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
        </tr>
    );
};

export default UserRow;