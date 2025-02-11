import { faBolt, faBug, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Hero() {
  return (
    <div className='lg:container md:mx-auto min-h-[85vh] pt-36  '>
        <h1 className=' text-4xl md:text-6xl capitalize font-bold mb-8 text-white text-center'>transform the way you <br/> code with code fix</h1>
        <p className='mb-8 text-center px-3 text-lg'>let problem improve your coding skills , reducing error and saving hours of your work</p>
        <div className='text-center'>
            <button className='btn bg-mainColor text-whiteText capitalize text-lg border-mainColor transition-all ease-in '>get started</button>
        </div>
        <div className='grid md:grid-cols-3 gap-x-5 lg:gap-x-16 mt-28 gap-y-5 md:gap-y-0 px-9 md:px-0'>
            <div className='p-4 bg-background rounded-md'>
               <div className=' h-full border-l-4 px-4' style={{ borderImage: 'linear-gradient(to bottom, var(--mainColor), var(--textColor)) 1' }}>
                    
                    <div className='flex gap-x-4 items-center mb-4'>
                        <FontAwesomeIcon icon={faLightbulb} className='text-mainColor text-2xl '/>
                        
                        <h3 className='text-whiteText md:text-lg lg:text-2xl capitalize'>code suggestions</h3>
                    </div>
                    <p className='capitalize'>code smarter not harder</p>
                    
               </div>
            </div>
            <div className='p-4 bg-background rounded-md'>
               <div className=' h-full border-l-4 px-4' style={{ borderImage: 'linear-gradient(to bottom, var(--mainColor), var(--textColor)) 1' }}>
                    
                    <div className='flex gap-x-4 items-center mb-4'>
                        <FontAwesomeIcon icon={faBug} className='text-mainColor text-2xl '/>
                        
                        <h3 className='text-whiteText md:text-lg lg:text-2xl capitalize'>error detection</h3>
                    </div>
                    <p className='capitalize'>spol errers before they happen</p>
                    
               </div>
            </div>
            <div className='p-4 bg-background rounded-md'>
               <div className=' h-full border-l-4 px-4' style={{ borderImage: 'linear-gradient(to bottom, var(--mainColor), var(--textColor)) 1' }}>
                    
                    <div className='flex gap-x-4 items-center mb-4'>
                        <FontAwesomeIcon icon={faBolt} className='text-mainColor text-2xl '/>
                        
                        <h3 className='text-whiteText md:text-lg lg:text-2xl capitalize'>time-saving automation </h3>
                    </div>
                    <p className='capitalize'>save hours of manual coding</p>
                    
               </div>
            </div>
        
       

        </div>
    </div>
  )
}

export default Hero