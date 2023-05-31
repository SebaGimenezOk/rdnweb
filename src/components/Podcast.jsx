import React from 'react'
import { FaYoutube } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
// import { SlSocialSoundcloud } from 'react-icons/sl'
import soundfly from '../assets/general/soundfly.jpg'
import sinlimites from '../assets/general/sinlimites.jpg'
import delatora from '../assets/general/delatora.jpg'
import libertad from '../assets/general/libertad.jpg'
import fusiontotal from '../assets/general/fusiontotal.jpg'




const Podcast = () => {
    const podcasts = [
        {
            id: 1,
            child: (<>
                <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVrmbnKFFBQCM40wwU--4rGs',
            src: delatora,

        },
        {
            id: 2,
            child: (<>
                <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVr_msXx0WPSoM7-yLUPfXBx',
            src: fusiontotal,
        }, {
            id: 3,
            child: (<>
                <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVoP6bS3xux6LG6vPkHCJNmg',
            src: sinlimites,
        }, {
            id: 4,
            child: (<>
                <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVo9-CFmjqMxuHtyT5L1Ddfk',
            src: libertad,
        }, {
            id: 5,
            child: (<>
                <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVr6ZXKbc9KEeu7Wdu6L-prU',
            src: soundfly,

        },
    ]

    // const soundclouds = [
    //     {
    //         id: 1,
    //         child: (<>
    //             EL ARCA DE LA CULTURA <SlSocialSoundcloud size={50} />
    //         </>),
    //         href: 'https://soundcloud.com/radiogrote/sets/el-arte-de-la-cultura?si=86458d33b4ea47dda8e558a2fd217eea&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    //     },
    //     {
    //         id: 2,
    //         child: (<>
    //             EN CLAVE GROTE <SlSocialSoundcloud size={50} />
    //         </>),
    //         href: 'https://soundcloud.com/radiogrote/sets/en-clave-grote?si=99b9990aa42d4c45b7c009abb88f16ef&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    //     }, {
    //         id: 3,
    //         child: (<>
    //             GUARDIANES DE LA MEMORIA <SlSocialSoundcloud size={50} />
    //         </>),
    //         href: 'https://soundcloud.com/radiogrote/sets/guardianes-de-la-memoria?si=db060ee6733d484eae64a45b66fc45cd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    //     }, {
    //         id: 4,
    //         child: (<>
    //             UP TOWN DE CAMARINES <SlSocialSoundcloud size={50} />
    //         </>),
    //         href: 'https://soundcloud.com/radiogrote/sets/up-town-de-camarines?si=4edb535c89704a3892d5db5a983f757f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    //     },

    // ]

    return (

        <div name='Podcasts' className='bg-gradient-to-br from-red-700 from-10% via-red-600 via-30% to-red-800 to-90%  w-full h-screen  text-white'>
            <div className='max-w-screen-lg mx-3 flex items-center justify-center  h-full px-4 md:flex-row'>
                <div className='pb-5 '>
                    <p className='text-5xl  gap-4 mx-16 font-semibold'>Videocast </p>
                    <p className='py-6  font-normal mx-16 '>programas de RDN que estan en Youtube</p>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-5 gap-5 sm:px-0'>
                    {podcasts.map(({ id, src, href, child }) => (
                        <div key={id}>
                            <img src={src} alt="re" className='rounded-lg duration-200 hover:scale-105' />
                            <div className='flex justify-center '>
                                <button className='px-6 py-2 m-2 duration-200 hover:scale-105'>
                                <a href={href}  target='_blank' rel='noreferrer' >
                                        {child}
                                    </a> <ImYoutube2 size={60} />

                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>









        // <div name='Podcasts' >
        //     <div className='px-2 py-5 bg-slate-950 '>
        //         <div name='hero1' className=' bg-gradient-to-t from-red-700 to-red-600 w-full rounded-xl py-4 my-3  text-white md:h-screen'>

        //             <h2 className='text-white text-5xl font-semibold '>
        //                 Videocasts de RDN en Youtube
        //             </h2>
        //             <div className='text-white'>
        //                 <ul className='grid sm:grid-cols-2 justify-items-center md:grid-flow-row'>
        //                     {podcasts.map(({ id, href, child }) => (
        //                         <li key={id} className='' >
        //                             <a href={href} className='text-white' target='_blank' rel='noreferrer' >
        //                                 {child}
        //                             </a>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //         </div>
        //         <div name='hero2' className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full   bg-gradient-to-t from-orange-500 to-orange-600 rounded-xl'>
        //             <h2 className='text-white text-5xl font-semibold  mb-12 mx-2 py-4'>
        //                 Podcasts de RDN en SoundCloud
        //             </h2>
        //             <div>
        //                 <div className='text-white'>
        //                     <ul className='flex align-top  mt-12 mb-12'>
        //                         {soundclouds.map(({ id, href, child }) => (
        //                             <li key={id} className='flex flex-col content-center mx-auto'>
        //                                 <a href={href} className=' text-white' target='_blank' rel='noreferrer' >
        //                                     {child}
        //                                 </a>
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 </div> 
        //             </div>
        //         </div>
        //         <div name='hero3' className=' bg-green-700 rounded-xl py-4 mb-5 '>
        //             <h2 className='text-white text-5xl font-semibold mx-2 py-8 px-3'>
        //                 Podcasts de RDN en Spotify
        //             </h2>
        //             <div className='px-3'>
        //                 <iframe src="https://open.spotify.com/embed/episode/0533PBkeZ67Glm9LwEDGjD?utm_source=generator" title='cleep' width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        //             </div>
        //             <div className='px-3 my-3 '>
        //                 <iframe src="https://open.spotify.com/embed/episode/0533PBkeZ67Glm9LwEDGjD?utm_source=generator" title='cleep' width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Podcast

