import React from 'react'
import { SiWorldhealthorganization } from 'react-icons/si'


const Borrador = () => {
  return (
    <div className="h-96 w-full bg-cover bg-center relative">
      <img className='w-full h-full object-cover absolute mix-blend-overlay'
        src="https://images.pexels.com/photos/3184418/\pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='prop' />
      <div className='p-24 '>
        <h1 className='text-red-700 text-4xl font-semibold'>texto uno</h1>
        <p> Radio de las Naciones es parte de las emisoras asociadas a naciones unidas.</p>
        <h1 className=' text-red-700 text-4xl font-semibold'>texto dos </h1>
        <span className='group-hover:rotate-90 duration-300'>
          <SiWorldhealthorganization size={65} className='ml-1 text-white' />
        </span>
      </div>
      <img className='w-full h-full object-cover mt-6 absolute '
        src="https://cdn.pixabay.com/photo/2018/04/20/11/30/forward-3335740_1280.jpg" alt='proptr' />
    </div>
  )
}

export default Borrador