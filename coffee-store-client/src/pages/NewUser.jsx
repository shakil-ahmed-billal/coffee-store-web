import React from 'react';

const NewUser = () => {
    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const newUser = { name, email, gender, status };

        // create a new users
        fetch('https://coffee-store-server-beta-one.vercel.app/user/new', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div>
            <section className="p-6 dark:text-gray-800">
                <form
                    onSubmit={handleAddUser}
                    className="w-full p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50"
                >
                    <h2 className="w-full text-3xl font-bold leading-tight">New User Add</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            required
                            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1"> Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                        />
                    </div>
                    <div>
                        <h2 className="mb-2">Select Your Gender</h2>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center">
                                <input
                                    name="gender"
                                    type="radio"
                                    value="Male"
                                    className="radio radio-primary"
                                    required
                                />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    name="gender"
                                    type="radio"
                                    value="Female"
                                    className="radio radio-primary"
                                    required
                                />
                                <span className="ml-2">Female</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-2">Status</h2>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center">
                                <input
                                    name="status"
                                    type="radio"
                                    value="Active"
                                    className="radio radio-primary"
                                    required
                                />
                                <span className="ml-2">Active</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    name="status"
                                    type="radio"
                                    value="Inactive"
                                    className="radio radio-primary"
                                    required
                                />
                                <span className="ml-2">Inactive</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">Add User </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default NewUser;
