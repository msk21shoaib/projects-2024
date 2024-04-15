import React from 'react'
import { ReactTyped } from "react-typed";

function Banner() {
    return(
        <div className='bg-[#2699fb] w-full py-[80px]' >
            <div className='max-w-[1240px] py-[100px]  mx-auto text-center font-bold' >
                <div className=' text-[20px] md:text-4xl md:p-[24px]' >
                    Learn with us
                </div>    
                <h2 className='text-white text-4xl md:text-[80px] md:p-[24px] ' >Grow with us</h2>
                <div className='text-[20px] md:text-[60px] md:p-[24px] text-white'>
                    Learn
                    <ReactTyped 
                        strings={["Web Development","Digital Marketing","Ethical hacking"]} 
                        typeSpeed={70} 
                        loop={true}
                    />
                </div>
            </div>
            
        </div>
    )
}
export default Banner