import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
        <div>
            <Image src="/logo3.png.png" alt='LOGO' width={180} height={180} className='mx-auto'/>
        </div>
        <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white  '>
           <Link href="#"> <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white  cursor-pointer after:h-[3px]
                    after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Home.</div></Link>
           <Link href="#services"> <div className='cursor-pointer after:h-[3px] flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white 
                    after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Services.</div></Link>
            <Link href="#projects"><div className='cursor-pointer after:h-[3px] flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white 
                    after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Projects.</div></Link>
            <Link href="#reviews"><div className='cursor-pointer after:h-[3px] flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white 
                    after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Reviews.</div></Link>
            <Link href="#contact"><div className='cursor-pointer after:h-[3px] flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white 
                    after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>Contact.</div></Link>
        </div>
        <p className='text-white text-opacity-60 mt-6 text-center'> &copy; 2024 All Rights Rerved.My Personal Portfolio</p>
      
    </div>
  )
}

export default Footer
