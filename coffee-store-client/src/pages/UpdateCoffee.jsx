import React from 'react'
import image from '../assets/icons/1.png'
import { Link, useLoaderData } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";


const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const { name, chef, supplier, test, category, details, photoUrl, _id} = coffee || {}

    const handleUpdateCoffee = (event) =>{
        event.preventDefault()
        
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const coffeeDetails = {name , chef , supplier , test , category , details , photoUrl , }

        console.log(coffeeDetails)

        // transfer data for mongoDB server
        fetch(`http://localhost:5000/coffee/${_id}` , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeDetails)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    
    
    return (
        <div className='w-10/12 mx-auto my-20 '>
            <div className="">
                <Link to={'/'} className='flex items-center mb-5 text-2xl'><IoMdArrowBack /><span className='text-3xl font-default'>Back to Home</span></Link>
                <div className="bg-[#F5F4F1] p-5 rounded-xl">
                    <div className="flex-col content-center">
                        <h1>Update Existing Coffee Details</h1>
                        <p className='w-10/12 mx-auto text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <div className="">
                        <form onSubmit={handleUpdateCoffee} >
                            <div className="grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input defaultValue={name} type="text" name='name' placeholder="Americano coffee" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <input defaultValue={chef} type="text" name='chef' placeholder="Mr. Matin Paul" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input defaultValue={supplier} type="text" name='supplier' placeholder="Mr. Matin Paul" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Test</span>
                                    </label>
                                    <input defaultValue={test} type="text" name='test' placeholder="Mr. Matin Paul" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input defaultValue={category} type="text" name='category' placeholder="Mr. Matin Paul" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">details</span>
                                    </label>
                                    <input defaultValue={details} type="text" name='details' placeholder="Mr. Matin Paul" className="input input-bordered" required />
                                </div>
                                <div className="col-span-2 form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input defaultValue={photoUrl} type="text" placeholder="Mr. Matin Paul" name='photoUrl' className="input input-bordered" required />
                                    <button className='flex text-center mt-10 content-center bg-[#E3B577] px-4 py-2 gap-3 font-default text-white text-xl rounded-sm border-2 border-red-950'>Add Coffee <img className='w-5 h-5 bg' src={image} alt="" /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCoffee



