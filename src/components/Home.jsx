import React from 'react'
import pic from "../pics/profile-pic.jpg"
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { ReactTyped, Typed } from "react-typed";

export default function Home() {
  return (
    <>
    <div className='
    w-full max-w-screen overflow-hidden break-words
    max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2'>
          <span className='text-xl'>Welcome To My Portfolio</span>
          <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1> Hello I'm a </h1>
            {/* <span className='text-orange-600'>Developer</span> */}
            <ReactTyped
              strings={[" Programmer", " Competetive Coder", " Developer"]}
              typeSpeed={60} className='text-purple-600'
              loop={true}
            />
          </div>
          <br />
          <p className='text-sm md:text-md text-justify w-full max-w-screen overflow-hidden break-words'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias accusamus quisquam natus nesciunt repellendus sunt totam et, blanditiis saepe corrupti. Mollitia molestias ipsam officia similique iste quam aut quisquam!
            Quas, odio, voluptatem rem illum delectus consectetur corrupti nisi cumque eius, quo perspiciatis! Provident nam distinctio cum. Ut possimus, fugiat laborum vero harum aliquid tempora porro quia rem aspernatur at.</p>
          <br />
          {/* social media */}
          <div className='flex flex-col items-center md:flex-row w-full justify-between space-y-6 md:space-y-0'>

            <div className='space-y-2 '>

              <h1 className='font-bold'>Available On</h1>
              <ul className='flex space-x-5 '>
                <li className='text-2xl hover:cursor-pointer'>
                  <FaLinkedin />
                </li>
                <li className='text-2xl hover:cursor-pointer'>
                  <FaGithub />
                </li>
                <li className='text-2xl hover:cursor-pointer'>
                  <SiLeetcode />
                </li>
                <li className='text-2xl hover:cursor-pointer'>
                  <SiCodechef />
                </li>
              </ul>

            </div>

            <div className='space-y-2'>

              <h1 className='font-bold '>Working On</h1>
              <div className='flex space-x-5'>
                <FaJava className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <FaReact className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <IoLogoJavascript className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <BsFiletypeSql className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' />
              </div>

            </div>

          </div>


        </div>
        <div className='md:w-1/2  order-1 '>
          <img src={pic} className='rounded-full md:w-[650px] md:h-[650px]' alt="" />
        </div>
      </div>
      </div>
      <br />
      <hr />
    </>
  )
}
