import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Signup = () => {
  const [loader, setLoader] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

  };

  return (
    <section>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="h-screen bg-white relative flex flex-col space-y-10 justify-center items-center">
            <div className="bg-white md:shadow-lg shadow-none rounded p-6 w-96">
              <h1 className="text-3xl font-bold leading-normal blue-gradient_text">
                SignUp
              </h1>
              <p className="text-sm leading-normal">SignUp to explore</p>
              <form className="space-y-5 mt-5" onSubmit={submitHandler}>
                <div className="mb-4 relative">
                  <input
                    id="username"
                    className="w-full rounded px-3 border border-gray-500 pt-5 pb-2 focus:outline-none input active:outline-none"
                    type="text"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label
                    htmlFor="username"
                    className="label absolute mb-0 -mt-2 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
                  >
                    Username
                  </label>
                </div>
                <div className="mb-4 relative">
                  <input
                    id="fullname"
                    className="w-full rounded px-3 pt-5 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500"
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <label
                    htmlFor="fullname"
                    className="label absolute mb-0 -mt-2 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
                  >
                    Full-Name
                  </label>
                </div>
                <div className="mb-4 relative">
                  <input
                    id="email"
                    className="w-full rounded px-3 pt-5 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="label absolute mb-0 -mt-2 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
                  >
                    Email
                  </label>
                </div>
                <div className="mb-4 relative">
                  <input
                    id="password"
                    className="w-full rounded px-3 pt-5 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="label absolute mb-0 -mt-2 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
                  >
                    Password
                  </label>
                </div>

                <input
                  type="submit"
                  className="w-full text-center bg-blue-700 hover:bg-blue-900 rounded-full text-white py-3 font-medium"
                  value="Sign Up"
                />
              </form>
            </div>
            <p>
              Already have an Account?{" "}
              <a
                className="blue-gradient_text font-bold p-2 rounded-full"
                href="/login"
              >
                LogIn
              </a>
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Signup;
