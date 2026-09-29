import React from 'react'
import Animated from '../components/Animated'

const Timing = () => {
  return (
    <section id='timing' className='px-auto mt-44'>
        <Animated scale={0.8} y={0} className="w-full max-w-5xl h-162.5 rouned-3xl bg-cover bg-center flex items-center justify-center md:justify-start px-6 md:px-14 overflow-hidden mx-auto bg-[url('/assets/restro-timing.png')]">

        {/* white card overlay */}
        <div className='bg-white rounded-3xl p-8 w-full max-w-xs'></div>

        </Animated>
    </section>
  )
}

export default Timing