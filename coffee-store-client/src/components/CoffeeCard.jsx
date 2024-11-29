import { FaIdeal, FaRegEye  } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
    const { name, chef,  test,  photoUrl, _id } = coffee || {}

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/coffee/${id}` , {
            method: 'DELETE' ,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className='bg-[#F5F4F1]'>
            <div className=" h-full content-center flex justify-between shadow-xl p-5  gap-5">
                <div>
                    <img className='w-40 object-cover ' src={photoUrl} alt="" />
                </div>
                <div className="">
                    <h1 className="text-2xl">Name: {name}</h1>
                    <p>Chef: {chef}</p>
                    <p>Test: {test}</p>
                </div>
                <div className="h-full flex flex-col justify-center items-center gap-5 mr-3">
                    <button className="btn btn-circle bg-yellow-300  text-xl"><FaRegEye /></button>
                    <Link to={`/update/${_id}`} className="btn btn-circle bg-black text-white  text-xl"><FaEdit /></Link>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-circle bg-red-500 text-white  text-xl"><MdDeleteSweep /></button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard
