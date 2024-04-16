import React from "react"
import laptop from "../assets/laptop.jpg"

function Experts() {
    return(
    <div className="max-w-[1240px] mx-auto my-10  md:grid grid-cols-3 gap-[120px] " >
        <div className="  col-span-1 md:w-[90%] text-center " >
            <img src={laptop} alt="" className="inline" />
        </div>
        <div className="  col-span-2 flex flex-col justify-center " >
            <h1 className="text-[#00df9a] font-bold my-2 " >LEARN FROM EXPERTS</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati adipisci deleniti expedita, inventore veritatis blanditiis odit accusamus voluptate, facere deserunt consectetur fuga, laboriosam est eos! Ex odit quaerat laborum illum.
            </p>
            <button className="w-[30%] bg-black text-white p-3 rounded  " >Get Started</button>
        </div>
    </div>
        
    )
}
export default Experts