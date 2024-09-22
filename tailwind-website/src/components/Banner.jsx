import React from 'react'
import { ReactTyped } from "react-typed";

function Banner() {
    return(
        <div className='bg-[#2699fb] w-full py-[50px]' >
            <div className='max-w-[1250px] py-[100px]  mx-auto text-center font-bold' >
                <div className=' text-[20px] md:text-4xl md:p-[20px]' >
                    Learn with us
                </div>    
                <h2 className='text-white text-4xl md:text-[80px] md:p-[24px] ' >Grow with us</h2>
                <div className='text-[20px] md:text-[60px] md:p-[24px] text-white'>
                    Learn
                    <ReactTyped className='pl-3'
                        strings={["Web Development","Digital Marketing","Ethical hacking"]} 
                        typeSpeed={40} 
                        loop={true}
                        backSpeed={30}
                    />
                </div>
                <button className="bg-black text-white p-3 rounded" >Get Started</button>
            </div>
            
        </div>
        
    )
}
export default Banner