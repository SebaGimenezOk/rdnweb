import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'


const Icons = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5
        text-center  pt-7 text-gray-400  pb-7">
            <ul className='flex justify-center items-center p-3 gap-2' >
                <span>@949RDN</span>
                <li><FaFacebook size={20} /></li>
                <li><FaTwitter size={20} /></li>
                <li><FaInstagram size={20} /></li>
                <li><FaWhatsapp size={20} /></li>
                <li><FaMapMarkerAlt size={20} /></li>
                <li><FaPhoneAlt size={20} /></li>
                <li><MdMail size={20} /></li>
            </ul>
        </div>
    )
}

export default Icons