import { faCircle, faSquareCheck, faX, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'

function OutPut() {
    const {output,error} = useSelector(state=>state.problemDetails)
  return (
    <div className={`bg-[#262626] w-full rounded-xl overflow-hidden   border border-gray-500 h-full ${error ? "border-red-500 ": "border-gray-500 "}`}>
        <div className='bg-[#333333] py-2  px-4 flex items-center'>
           <div className='flex items-center gap-x-3 capitalize'> 
            <FontAwesomeIcon icon={faSquareCheck} className='text-green-600 text-sm'/>
            <p className='text-sm'>test Case Result</p>
            </div>
           
        </div>

        <div className='px-4'>
           <div className='flex py-3 gap-x-4 '>
                <button className='btn btn-ghost btn-active btn-sm flex items-center gap-x-1'>
                    <FontAwesomeIcon icon={error? faX:faCircle} className={`${error? "text-red-600 text-[10px]" :"text-green-600 text-[5px]"}`}/>
                     case 1
                </button>
                <button className='btn btn-ghost btn-active btn-sm flex items-center gap-x-1'>
                    <FontAwesomeIcon icon={error? faX:faCircle} className={`${error? "text-red-600 text-[10px]" :"text-green-600 text-[5px]"}`}/>

                     case 1
                </button>
           </div>
            <p className={`${error? "text-red-500":""}`}>{output?.run ? output?.run?.output : 'Click "Run Code" to see the output'}</p>
        </div>
     
    </div>
  )
}

export default OutPut