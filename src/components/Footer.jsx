import React from 'react'

import Icons from './Icons'



const Footer = () => {




  return (
    <footer className='bg-slate-950 py-2'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center text-center text-gray-400 pt-8 ' >
        <span className='px-7 '>Todos los Derechos Reservados.</span>
        <span className='px-7'>Terminos y Politica de Provacidad</span>
      </div>
      <Icons />
    </footer>
  )
}

export default Footer