import React from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignInClick = () => navigate("/SignIn");
  return (
    <>
      <section className="h-screen bg-cover bg-center bg-[url('/images/SignInBackground.jpeg')]">
        <div className="container mx-auto py-5 h-full">
          <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-4xl">
              <div className="bg-white rounded-3xl shadow-md text-black">
                <div className="flex flex-wrap">
                  {/* Right Section */}
                  <div className="w-full lg:w-1/2 bg-gradient-to-r from-orange-400 via-red-500 to-purple-700 hidden md:flex items-center text-white p-8 rounded-br-lg rounded-tr-lg">
                    <div className="px-6 lg:px-12">
                      <h4 className="mb-4 text-2xl font-bold">
                        We are more than a Metro App
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  {/* Left Section */}
                  <div className="w-full lg:w-1/2 p-6">
                    <div className="text-center mb-6">
                      <img
                        src="/images/MetroLogo5.png"
                        alt="logo"
                        className="w-44 mx-auto"
                      />
                      <h4 className="mt-4 mb-6 text-xl font-bold">
                        We Are The IMRS (India Metro Rail Saathi)
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4 text-gray-700">
                        Please login to your account
                      </p>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-gray-600 font-medium"
                        >
                          Username
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Phone number or email address"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-gray-600 font-medium"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>

                      <div className="text-center mb-6">
                        <button
                          type="button"
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition duration-200"
                        >
                          Log in
                        </button>
                        <a
                          href="#!"
                          className="block mt-3 text-sm text-gray-500"
                        >
                          Forgot password?
                        </a>
                      </div>

                      <div className="flex justify-center items-center space-x-2">
                        <p className="text-gray-600">Don't have an account?</p>
                        <button
                          type="button"
                          className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition duration-200"
                          onClick={handleSignInClick}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpPage;
