import React from 'react'

const Contact = () => {
    return (
        <div name='Contact' className='h-screen w-full bg-slate-950 text-white '>
            <div className='flex flex-col p-4 mb-8 max-w-screen-lg mx-auto h-full'>
                <div className='py-3 flex flex-col justify-center items-center'>
                    <p className='text-5xl  font-semibold inline'>Contacto</p>
                    <p className='py-6 text-lg font-normal'>Dejanos un mensaje con tus inquietudes! </p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='tu nombre' className=' my-3 p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none' />
                        <input type="text" name='mail' placeholder='tu correo' className='my-3 p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none' />
                        <textarea name="mensaje" rows="10" placeholder='tu mensaje' className=' my-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-12 py-3 my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Hablemos </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact