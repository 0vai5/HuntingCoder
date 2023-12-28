import React from 'react'

const Profile = () => {
  return (
    
<div>
   <div className="md:grid grid-cols-4 grid-rows-2  bg-white gap-2 p-4 rounded-xl">
        <div className="md:col-span-1 h-48 shadow-xl ">
                <div className="flex w-full h-full relative">
                    <img src="https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png" className="w-44 h-44 m-auto" alt="" />

                </div>
        </div>
        <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 p-3">
                <div >
                    <label
                        className="text-sm font-bold uppercase rounded-l px-4 py-2  whitespace-no-wrap w-2/6">Username:</label>
                    <input 
                        className="border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm w-4/6"
                        type="text" value="Ismael Contreras"  readonly/>
                </div>
                <div>
                    <label
                        className="text-sm bg-blue-50 font-bold uppercase rounded-l px-4 py-2  whitespace-no-wrap w-2/6">Email:</label>
                    <input 
                        className=" border-l-0 cursor-default  rounded-md rounded-l-none w-4/6"
                        type="text" value="myemail@server.com"  readonly/>
                </div>
        </div>
        <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 hidden md:block">
            <h3 className="font-bold uppercase"> My <span className='blue-gradient_text'>bLOGS</span></h3>
            
        </div>
            
    </div>
</div>
  )
}

export default Profile