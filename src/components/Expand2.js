import React from 'react'
import {useState} from 'react'
import Card2  from "./Card2";
import {Episodes} from "./Episodes"

export const Expand2 = () => {

    const [isOpen, setIsOpen] = useState(false)
   
  return (
    <>
    
    {!isOpen ? 
    //is not open
     (<button onClick={() => setIsOpen (!isOpen)}>
        <Card2/>
        
     </button>
     
     ) : 
     
     //is open
     (
    <div className='h-full w-[1440px] relative'>
        <div className = ' w-full flex top-0 right-0'>
            <button onClick={() => setIsOpen (!isOpen)}> 
                <Episodes className=' h-[621px] '/> 
            </button>
        </div>   
    </div>
    )}
    </>
  )
}
