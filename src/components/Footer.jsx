import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>
                    Solutions
                </h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Organic Packages</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>
                    About
                </h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Organic Packages</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>
                    Marketing
                </h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Organic Packages</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>
                    Organic Packages
                </h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Organic Packages</li>
                    
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Interested? Leave your email</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" /> 
                    <button className='p-2 mb-4'>Chat with Us</button>
                </form>
        
            </div>
            
        </div>
        <div className='flex max-w-[1240] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500'>
            <p>2022 AVA. All rights reserved</p>
        </div>
        
    </div>
  )
}

export default Footer