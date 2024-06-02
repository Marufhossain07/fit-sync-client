import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="container mx-auto form-bg rounded-md py-20">
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-transparent text-white dark:text-gray-800">
                <h3 className=" text-3xl md:text-3xl lg:text-5xl text-center text-white font-bold font-sedan dark:text-white mb-5">Fit<span className="text-[#d62828]">Sync</span></h3>
                <h1 className="text-2xl font-medium font-inter border-b border-white pb-1 text-center">Welcome! Please Register</h1>
                <form noValidate="" action="" className="space-y-6">
                    <div className="relative my-6">
                        <input
                            id="id-l04"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                        />
                        <label
                            htmlFor="id-l04"
                            className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Your Name
                        </label>

                    </div>
                    <div className="relative my-6">
                        <input
                            id="id-l04"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                        />
                        <label
                            htmlFor="id-l04"
                            className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Your Email
                        </label>

                    </div>
                    <div className="relative my-6">
                        <input
                            id="id-l04"
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            required
                            className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                        />
                        <label
                            htmlFor="id-l04"
                            className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Photo URL
                        </label>

                    </div>
      <div className="relative my-6">
        <input
          id="id-l13"
          type={showPassword ? "text" : "password"}
          name="id-l13"
          placeholder="your password"
          className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

        />
        <label
          htmlFor="id-l13"
          className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Your password
        </label>
        {showPassword ? (
          <svg
            onClick={() => setShowPassword(!showPassword)}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-3 right-4 h-6 w-6 cursor-pointer  peer-disabled:cursor-not-allowed text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-labelledby="title-8 description-8"
            role="graphics-symbol"
          >
            <title id="title-8">Check mark icon</title>
            <desc id="description-8">Icon description here</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setShowPassword(!showPassword)}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-3 right-4 h-6 w-6 cursor-pointer peer-disabled:cursor-not-allowed text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-labelledby="title-8d description-8d"
            role="graphics-symbol"
          >
            <title id="title-8">Check mark icon</title>
            <desc id="description-8">Icon description here</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        )}
      </div>

                    <button className="inline-flex w-full h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:border-red-600 hover:text-red-500 focus: focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
                        <span>Register</span>
                    </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 dark:text-gray-600">Register with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                        </svg>
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                    </button>
                </div>
                <p className=" text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login'><a rel="noopener noreferrer" className="underline dark:text-gray-800">Login</a></Link>
                </p>
            </div>
        </div>
    );
};

export default Register;