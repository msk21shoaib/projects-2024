import React from 'react'

function Header(){
    return(
        <div className='bg-[#2699fb] p-4' >
            <div className='max-w-[1240px] items-center py-[15px] mx-auto flex justify-between ' >
                <div>
                    MsK
                </div>
                <ul className='flex text-white gap-5' >
                    <li>
                        Home
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header