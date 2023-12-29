import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const CreatePost = () => {
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
      ) : (
        <div className="post-container">
          <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
          <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <form action="/create" method="post" className="flex flex-col">
              <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" />
              <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="file" type="file" />
              <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here"></textarea>
              <div className="buttons flex mt-3">
                <input className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto" value={'Cancel'} href={'/'} />
                <input className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" value={'Post'} />
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreatePost;
