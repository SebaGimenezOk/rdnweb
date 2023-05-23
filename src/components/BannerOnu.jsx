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
            src:Oms,
            href: 'https://www.who.int/es'


        },
        {
            id: 2,
            child: (<>
                OIEA
            </>),
            src:Oiea,
            href: 'https://www.iaea.org/es'

        },
        {
            id: 3,
            child: (<>
                REFUGIADOS UCRANIA
            </>),
            src:unrwa,
            href: 'https://unrwa.es/'

        },
        {
            id: 4,
            child: (<>
                PNUD
            </>),
            src:onuDesarrollo,
            href: 'https://www.undp.org/es/argentina'

        },
        {
            id: 5,
            child: (<>
                DERCHOS HUMANOS
            </>),
            src:onuDerechosHumanos,
            href: 'https://www.ohchr.org/es/ohchr_homepage'

        },
        {
            id: 6,
            child: (<>
                CAMBIO CLIMATICO
            </>),
            src:onuClimatico,
            href: 'https://unfccc.int/es'

        },
        {
            id: 7,
            child: (<>
                FONDO DE POBLACION
            </>),
            src:onuFondoOblacion,
            href: 'https://www.unfpa.org/es'

        },
        {
            id: 8,
            child: (<>
                CONTRA DROGAS
            </>),
            src:onuDrogaDelito,
            href: 'https://www.unodc.org/unodc/es/index.html'
        },
    ]

    return (
        <div name='banneronu' className='bg-slate-950 w-full text-white md:h-screen'>
            <div className=' max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'>
                <div className='pb-5 mt-56'>

                    <p className='text-5xl  font-semibold inline border-b-4 border-red-500 '>
                        Unidos por un mundo mejor
                    </p>
                    <p className='py-6  font-normal '>
                        Toda la información de Naciones Unidas, de primera mano. Cada área importante esta aqui
                    </p>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-4 mb-44  gap-8 px-12 sm:px-0'>
                    {onusections.map(({ id, src, title, child, href }) => (
                        <div key={id}>
                            <img src={src} alt="re" className='rounded-md duration-200 hover:scale-105' /> 
                            <div className='flex items-center justify-center '>
                                <button className='px-6 py-3 m-4 duration-200 hover:scale-105'>{title}
                                <a href={href} className='text-white' target='_blank' rel='noreferrer' >
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