import React from 'react';
import { useAuth } from '../../store/auth';

const User = () => {
    const { adminUser } = useAuth();
    console.log("adminUser >> ", adminUser);

  return (
    <>
        <div>User</div>

        {/* make a table to show data */}
        <table className="table table-hover" border={2}>
            <thead>
                <tr>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {adminUser && adminUser.map((user, index) => (
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default User