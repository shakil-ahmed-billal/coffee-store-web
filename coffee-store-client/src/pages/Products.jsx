
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import image from '../assets/icons/1.png';
import CoffeeCard from '../components/CoffeeCard';

const Products = () => {

  const coffees = useLoaderData()
  const [coffeeCard, setCoffeeCard] = useState(coffees)


  const handleDelete = (id) => {
    console.log(id)
    fetch(`https://coffee-store-server-beta-one.vercel.app/coffee/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          console.log(data)
          console.log(id)
          const remaining = [...coffeeCard].filter(cof => id !== cof._id)
          console.log("🚀 ~ handleDelete ~ remaining:", remaining)
          setCoffeeCard(remaining)
        }
      })
  }

  return (
    <div className='bg-cover bg-hero-product '>
      <div className="w-10/12 mx-auto">
        <div className="flex-col content-center">
          <p>---Sip & Savor---</p>
          <h1>Our Popular Products</h1>
          <Link to={'/coffee'} className='flex bg-[#E3B577] px-4 py-2 gap-3 font-default text-white text-xl rounded-sm border-2 border-red-950'>Add Coffee <img className='w-5 h-5 bg' src={image} alt="" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {
            coffeeCard?.map(coffee => <CoffeeCard key={coffee._id} handleDelete={handleDelete} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default Products
