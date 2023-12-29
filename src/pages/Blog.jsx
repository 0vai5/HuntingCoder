import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const Blog = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <section>
      {loader ? (
        <Loader />
      ): (
        <>
        <h2 className="text-4xl font-semibold text-gray-800 leading-tight text-center mt-4">
               <span className='blue-gradient_text'>Blogs</span>
             </h2>
      <div className ="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
         <div className="container mx-auto mx-auto p-4">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
             <div className="bg-white rounded-lg border p-4">
               <img
                 src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                 alt="Placeholder Image"
                 className="w-full h-48 rounded-md object-cover"
               />
               <div className="px-1 py-4">
                 <div className="font-bold text-xl mb-2">Blog Title</div>
                 <p className="text-gray-700 text-base">
                   This is a simple blog card example using Tailwind CSS. You can
                   replace this text with your own blog content.
                 </p>
               </div>
               <div className="px-1 py-4">
                 <a href="#" className="text-blue-500 hover:underline">
                   Read More
                 </a>
               </div>
             </div>
             <div className="bg-white rounded-lg border p-4">
               <img
                 src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                 alt="Placeholder Image"
                 className="w-full h-48 rounded-md object-cover"
               />
               <div className="px-1 py-4">
                 <div className="font-bold text-xl mb-2">Blog Title</div>
                 <p className="text-gray-700 text-base">
                   This is a simple blog card example using Tailwind CSS. You can
                   replace this text with your own blog content.
                 </p>
               </div>
               <div className="px-1 py-4">
                 <a href="#" className="text-blue-500 hover:underline">
                   Read More
                 </a>
               </div>
             </div>
             <div className="bg-white rounded-lg border p-4">
               <img
                 src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                 alt="Placeholder Image"
                 className="w-full h-48 rounded-md object-cover"
               />
               <div className="px-1 py-4">
                 <div className="font-bold text-xl mb-2">Blog Title</div>
                 <p className="text-gray-700 text-base">
                   This is a simple blog card example using Tailwind CSS. You can
                   replace this text with your own blog content.
                 </p>
               </div>
               <div className="px-1 py-4">
                 <a href="#" className="text-blue-500 hover:underline">
                   Read More
                 </a>
               </div>
             </div>
             <div className="bg-white rounded-lg border p-4">
               <img
                 src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                 alt="Placeholder Image"
                 className="w-full h-48 rounded-md object-cover"
               />
               <div className="px-1 py-4">
                 <div className="font-bold text-xl mb-2">Blog Title</div>
                 <p className="text-gray-700 text-base">
                   This is a simple blog card example using Tailwind CSS. You can
                   replace this text with your own blog content.
                 </p>
               </div>
               <div className="px-1 py-4">
                 <a href="#" className="text-blue-500 hover:underline">
                   Read More
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
       </>
      )}
   
    </section>
  )
}

export default Blog