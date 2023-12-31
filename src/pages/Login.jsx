import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      alert(data.message); // Show the message received from the server
    } catch (error) {
      console.error('There was an error!', error);
      // Handle error - Show error message to the user or perform other actions
    }
  };
  

  return (
    <section>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="h-screen bg-white relative flex flex-col space-y-10 justify-center items-center">
            <div className="bg-white md:shadow-lg shadow-none rounded w-96">
              <h1 className="text-3xl font-bold leading-normal blue-gradient_text">
                Login
              </h1>
              <p className="text-sm leading-normal">LogIn to explore more</p>
              <form onSubmit={loginHandler} className="space-y-5 mt-5">
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

                <button
                  type="submit"
                  className="w-full text-center bg-blue-700 hover:bg-blue-900 rounded-full text-white py-3 font-medium"
                >
                  Sign in
                </button>
              </form>
            </div>
            <p>
              New to HuntingCoder?
              <a
                className="blue-gradient_text font-bold p-2 rounded-full"
                href="/signup"
              >
                Join now
              </a>
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Login;
