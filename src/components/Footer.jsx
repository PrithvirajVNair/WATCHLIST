import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#000000ff"}}>
      <div className='w-100 h-auto text-center text-white p-5'>
      <h2>Contact Us</h2>
      <h6 className='mt-4 fs-4'><MdEmail /> mywatchlist@gmail.com</h6>
      <p className='mt-3'>Designed & Build with ❤️ using React</p>
      </div>
    </div>
  )
}

export default Footer