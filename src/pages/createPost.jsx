import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null); // Change initial state for file to null
  const [text, setText] = useState("");
  const [loader, setLoader] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false); // Correct variable naming

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("content", text);
    if (file) {
      data.append("file", file); // Use append to add the file to FormData
    }

    try {
      const response = await fetch("http://localhost:4000/Post", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setPostSuccess(true);
        setTitle("");
        setText("");
        setFile(null);
        console.log("Redirecting...");
        window.location.replace("/");
      } else {
        console.log("Post creation failed");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <section>
      {loader ? (
        <Loader />
      ) : (
        <div className="post-container">
          <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
            New Post
          </div>
          <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <form
              action="/create"
              method="post"
              className="flex flex-col"
              onSubmit={submitHandler}
            >
              <input
                className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                spellCheck="false"
                placeholder="Title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                spellCheck="false"
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]); // Capture the file onChange
                }}
              />
              <div>
                <ReactQuill
                  className="rounded border-4 border-zinc-800 w-full "
                  value={text}
                  onChange={(value) => {
                    setText(value);
                  }}
                  modules={modules}
                />
                <button
                  className="hover:bg-gray-700 blue-gradient_text mb-5 mt-10  rounded-md px-7 py-3 mx-2"
                  type="submit"
                >
                  Publish blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreatePost;
