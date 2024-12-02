import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const loaderUsers = useLoaderData()
    const [users, setUsers] = useState(loaderUsers);

    const handleUpdate = (id) => {

        fetch(`https://coffee-store-server-beta-one.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    const handleDelete = (id) => {
        fetch(`https://coffee-store-server-beta-one.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }
            })
    }

    return (
        <div>
            <div className="w-11/12 p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Invoice#</th>
                                <th className="p-3">User Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">LogIn Time</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr key={user._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{user._id}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{user.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{user.email}</p>
                                    </td>
                                    <td className="p-3">
                                        {user?.lastSignInTime}
                                    </td>
                                    <td className="p-3 space-x-1 text-right">
                                        <span onClick={() => handleUpdate(user._id)} className="px-3 py-1 font-semibold rounded-md cursor-pointer dark:bg-violet-600 dark:text-gray-50">
                                            <span>Update</span>
                                        </span>
                                        <span onClick={() => handleDelete(user._id)} className="px-3 py-1 font-semibold rounded-md cursor-pointer dark:bg-red-600 dark:text-gray-50">
                                            <span>Delate</span>
                                        </span>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users
