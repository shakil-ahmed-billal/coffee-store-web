import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import image from '../assets/icons/1.png';
import CoffeeCard from '../components/CoffeeCard';

const Products = () => {
  const coffees = useLoaderData()

  return (
    <div className='bg-hero-product bg-cover '>
      <div className="w-10/12 mx-auto">
        <div className="content-center flex-col">
          <p>---Sip & Savor---</p>
          <h1>Our Popular Products</h1>
          <Link to={'/coffee'} className='flex bg-[#E3B577] px-4 py-2 gap-3 font-default text-white text-xl rounded-sm border-2 border-red-950'>Add Coffee <img className='w-5 h-5 bg' src={image} alt="" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default Products
