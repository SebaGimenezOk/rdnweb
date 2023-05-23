import React from 'react'
import { FaYoutube } from 'react-icons/fa';
import { SlSocialSoundcloud } from 'react-icons/sl'




const Podcast = () => {
    const podcasts = [
        {
            id: 1,
            child: (<>
                La Delatora <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVrmbnKFFBQCM40wwU--4rGs',

        },
        {
            id: 2,
            child: (<>
                Fusion Total <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVr_msXx0WPSoM7-yLUPfXBx',

        }, {
            id: 3,
            child: (<>
                Sin Limites <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVoP6bS3xux6LG6vPkHCJNmg',

        }, {
            id: 4,
            child: (<>
                La Libertad Avanza <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVo9-CFmjqMxuHtyT5L1Ddfk',

        }, {
            id: 5,
            child: (<>
                SoundFly <FaYoutube size={60} />
            </>),
            href: 'https://youtube.com/playlist?list=PL4QrFOsg1mVr6ZXKbc9KEeu7Wdu6L-prU',

        },
    ]

    const soundclouds = [
        {
            id: 1,
            child: (<>
                El Arca de la Cultura <SlSocialSoundcloud size={50} />
            </>),
            href: 'https://soundcloud.com/radiogrote/sets/el-arte-de-la-cultura?si=86458d33b4ea47dda8e558a2fd217eea&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
            id: 2,
            child: (<>
                En Clave Grote <SlSocialSoundcloud size={50} />
            </>),
            href: 'https://soundcloud.com/radiogrote/sets/en-clave-grote?si=99b9990aa42d4c45b7c009abb88f16ef&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        }, {
            id: 3,
            child: (<>
                Guardianes de la Memoria <SlSocialSoundcloud size={50} />
            </>),
            href: 'https://soundcloud.com/radiogrote/sets/guardianes-de-la-memoria?si=db060ee6733d484eae64a45b66fc45cd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        }, {
            id: 4,
            child: (<>
                Up Town de Camarines <SlSocialSoundcloud size={50} />
            </>),
            href: 'https://soundcloud.com/radiogrote/sets/up-town-de-camarines?si=4edb535c89704a3892d5db5a983f757f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },

    ]

    return (
        <div name='Podcasts'>
            <div className='px-2 py-5 bg-slate-950'>
                <div name='hero1' className=' bg-gradient-to-t from-red-700 to-red-600 rounded-xl py-4 my-3'>
                    
                    <h2 className='text-white text-5xl font-semibold  mx-2  px-4 py-4'>
                        Videocasts de RDN en Youtube
                    </h2>
                    <div className='text-white'>
                        <ul className='flex mb-12'>
                            {podcasts.map(({ id, href, child }) => (
                                <li key={id} className='flex flex-col place-items-center mt-12 mx-auto '>
                                    <a href={href} className='text-white' target='_blank' rel='noreferrer' >
                                        {child}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div name='hero2' className=' bg-gradient-to-t from-orange-500 to-orange-600 rounded-xl py-4 mb-3'>
                    <h2 className='text-white text-5xl font-semibold  mb-12 mx-2 py-4'>
                        Podcasts de RDN en SoundCloud
                    </h2>
                    <div>
                        <div className='text-white'>
                            <ul className='flex align-top  mt-12 mb-12'>
                                {soundclouds.map(({ id, href, child }) => (
                                    <li key={id} className='flex flex-col content-center mx-auto'>
                                        <a href={href} className=' text-white' target='_blank' rel='noreferrer' >
                                            {child}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div name='hero3' className=' bg-green-700 rounded-xl py-4 mb-5 '>
                    <h2 className='text-white text-5xl font-semibold mx-2 py-8 px-3'>
                        Podcasts de RDN en Spotify
                    </h2>
                    <div className='px-3'>
                        <iframe src="https://open.spotify.com/embed/episode/0533PBkeZ67Glm9LwEDGjD?utm_source=generator" title='cleep' width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div className='px-3 my-3 '>
                        <iframe src="https://open.spotify.com/embed/episode/0533PBkeZ67Glm9LwEDGjD?utm_source=generator" title='cleep' width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Podcast

