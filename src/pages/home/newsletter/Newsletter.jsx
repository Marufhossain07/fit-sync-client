

const Newsletter = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div className="news-bg">
            <div className="text-center text-white rounded-lg mt-5 py-16 bg-opacity-90 bg-[#DA3C3D]">
                <h3 className="text-4xl mb-10 font-bold uppercase">Subscribe <span className=" border-b border-white ">Fit<span className="text-[#003049]">Sync</span></span> Now</h3>
                <p className="font-inter mb-10">Stay connected with our vibrant community and be the first to know about <br /> exciting developments  at FitSync. FitSync is here to support and motivate you every step of the way.</p>
                <div>
                    <form className="flex gap-5 items-center justify-center" onSubmit={handleSubmit}>
                        {/*    <!-- Component: Plain large input with helper text --> */}
                        <div className="relative my-6">
                            <input
                                id="id-l04"
                                type="text"
                                name="name"
                                placeholder="your name"
                                required
                                className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                            />
                            <label
                                htmlFor="id-l04"
                                className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Your name
                            </label>

                        </div>
                        {/*    <!-- Component: Plain large invalid input  --> */}
                        <div className="relative my-6">
                            <input
                                id="id-l10"
                                type="email"
                                name="email"
                                placeholder="Your email"
                                required
                                className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4 text-white placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                            />
                            <label
                                htmlFor="id-l10"
                                className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 text-xs text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Your email
                            </label>
                        </div>
                        {/*    <!-- End Plain large invalid input --> */}

                        {/*<!-- Component: Large outline basic button --> */}
                        <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:border-black hover:text-black focus: focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
                            <span>Subscribe</span>
                        </button>
                        {/*<!-- End Large outline basic button --> */}


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;