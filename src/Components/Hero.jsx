import React from 'react'
import profile from '../assets/image/about.jpg';
export default function Hero() {
  return (
    <div className='p-4 lg:-mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:p-8'>
                    <img src={profile} alt="profile picture" height={300} width={300} className='' />

                </div>
            </div>
        </div>

    </div>
  )
}
