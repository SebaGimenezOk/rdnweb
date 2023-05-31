import React from 'react'
import Oiea from '../assets/general/oiea.jpg'
import Oms from '../assets/general/oms.jpg'
import unrwa from '../assets/general/unrwa.jpg'
import onuDesarrollo from '../assets/general/onuDesarrollo.jpg'
import onuClimatico from '../assets/general/onuclimatico.png'
import onuDrogaDelito from '../assets/general/onudrogadelito.jpg'
import onuDerechosHumanos from '../assets/general/onudhumanos.jpg'
import onuFondoOblacion from '../assets/general/onufondopoblacion.png'




const Banner2 = () => {


    const onusections = [
        {
            id: 1,
            child: (<>
                OMS
            </>),
            src: Oms,
            href: 'https://www.who.int/es'


        },
        {
            id: 2,
            child: (<>
                OIEA
            </>),
            src: Oiea,
            href: 'https://www.iaea.org/es'

        },
        {
            id: 3,
            child: (<>
                REFUGIADOS UCRANIA
            </>),
            src: unrwa,
            href: 'https://unrwa.es/'

        },
        {
            id: 4,
            child: (<>
                PNUD
            </>),
            src: onuDesarrollo,
            href: 'https://www.undp.org/es/argentina'

        },
        {
            id: 5,
            child: (<>
                DERECHOS HUMANOS
            </>),
            src: onuDerechosHumanos,
            href: 'https://www.ohchr.org/es/ohchr_homepage'

        },
        {
            id: 6,
            child: (<>
                UNFCCC
            </>),
            src: onuClimatico,
            href: 'https://unfccc.int/es'

        },
        {
            id: 7,
            child: (<>
                UNFPA
            </>),
            src: onuFondoOblacion,
            href: 'https://www.unfpa.org/es'

        },
        {
            id: 8,
            child: (<>
                UNDOC
            </>),
            src: onuDrogaDelito,
            href: 'https://www.unodc.org/unodc/es/index.html'
        },
    ]

    return (
        <div name='banneronu' className='w-full text-slate-950 py-12 bg-gradient-to-br from-zinc-300 from-10% via-white via-30% to-zinc-300 to-90% '>
            <div className=' max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full'>
                <div className='pb-5 '>

                    <p className='text-5xl  font-semibold inline border-b-4 border-red-500 '>
                        Unidos por un mundo mejor
                    </p>
                    <p className='py-6 text-lg font-normal '>
                        Toda la información de Naciones Unidas, de primera mano. Cada área importante esta aqui
                    </p>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-4  gap-8 px-12 sm:px-0'>
                    {onusections.map(({ id, src, title, child, href }) => (
                        <div key={id}>
                            <img src={src} alt="re" className='rounded-md mb-4 duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center text-base font-semibold'>
                                <button className='px-6 pb-3  duration-200 hover:scale-105'>
                                    <a href={href} className=' text-slate-950' target='_blank' rel='noreferrer' >
                                        {child}
                                    </a></button>
                            </div>
                        </div>
                    ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Banner2