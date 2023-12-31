import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const BlogPage = () => {
  

  return (
    <section>
      
        <>
          <div className="max-w-screen-lg mx-auto">
            <main className="mt-10">
              <div className="mb-4 md:mb-0 w-full mx-auto relative">
                <div className="px-4 lg:px-0">
                  <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                    some title
                  </h2>
                  <p className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
                    some user name
                  </p>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                  className="w-full object-cover lg:rounded"
                />
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-12">
                <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                  <p className="pb-6">some text</p>
                </div>
              </div>
            </main>
          </div>
        </>
      
    </section>
  );
};

export default BlogPage;
