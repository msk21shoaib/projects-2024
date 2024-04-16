import React from "react";

function NewsLetter(){
    return(
        <div className='bg-[#2699fb] p-4 py-16 text-white px-4' >
            <div className="max-w-[1240px] mx-auto md:flex justify-between ">
                <div className=" h-[300px] m-[2] "  >
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to learn latest I.T skills?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className=" h-[300px]"  >
                    <input type="text" className="border rounded  p-3 mr-2 text-slate-400" placeholder="Email" />
                    <button className="bg-black text-white p-3 rounded" >Get Started</button>
                    <br />
                    <p className="text-white" >We care bout the protection of your data Read our <br/>
                        <a href="" className="text-black" >Privacy Policy</a>
                    </p>
                </div>
                
            </div>
        </div>
    )
}
export default NewsLetter