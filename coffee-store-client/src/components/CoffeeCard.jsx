import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";


const CoffeeCard = ({ coffee , handleDelete}) => {



    const { name, chef, test, photoUrl, _id } = coffee || {}

    return (
        <div className='bg-[#F5F4F1]'>
            <div className="flex content-center justify-between h-full gap-5 p-5 shadow-xl ">
                <div>
                    <img className='object-cover w-40 ' src={photoUrl} alt="" />
                </div>
                <div className="">
                    <h1 className="text-2xl">Name: {name}</h1>
                    <p>Chef: {chef}</p>
                    <p>Test: {test}</p>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-5 mr-3">
                    <button className="text-xl bg-yellow-300 btn btn-circle"><FaRegEye /></button>
                    <Link to={`/update/${_id}`} className="text-xl text-white bg-black btn btn-circle"><FaEdit /></Link>
                    <button onClick={() => handleDelete(_id)} className="text-xl text-white bg-red-500 btn btn-circle"><MdDeleteSweep /></button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard
