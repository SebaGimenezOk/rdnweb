import React from 'react'
import euronews from '../assets/general/Euronews.png'
import parliament from '../assets/general/logoParliament.png'
import onublanco from '../assets/general/logoazul.svg'


const Institucional = () => {
  return (
    <div name='Institucional' className='py-4 h-96 w-full bg-slate-950'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4 md:flex-row'>
        <div className=''>
          <h2 className='text-white text-5xl py-3 my-3'>Institucional</h2>
          <p className='text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus, consectetur repellat nostrum corrupti dolores qui aliquam nesciunt sapiente,
            ipsa et iste praesentium ullam commodi amet laborum voluptatum, ex dicta quia.</p>
          <div className='flex my-4  text-white'>
            <button  href='https://www.parlamentointernacional.org/historia' className='rounded-sm  p-2 mx-auto'>  <img src={parliament} alt="parlamento" width={'50%'} height={'50%'} className=' rounded-md' /> Parlamento Internacional </button>
            <button  href='https://es.euronews.com/' className='rounded-sm  p-2 mx-auto'>  <img src={euronews} alt="euronews" className='h-5 w-auto' />Las noticias de Europa</button>
            <button  href='https://www.un.org/' className='rounded-sm  p-2 mx-auto'>   <img src={onublanco} alt="onu" className='h-15 w-auto'/>  naciones unidas</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Institucional