import React from 'react';
import { useAuth } from '../../store/auth';

const Contact = () => {
    const { adminContact } = useAuth();
    console.log("ContactAdmin >> ", adminContact);

  return (
    <>
        <div>Contact</div>

        {/* make a table to show data */}
        <table className="table table-hover" border={2}>
            <thead>
                <tr>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                </tr>
            </thead>
            <tbody>
                {adminContact && adminContact.map((user, index) => (
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.message}</td>
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

export default Contact;