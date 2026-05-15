const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className=" flex flex-col items-center text-center px-5 py-20 bg-slate-50">


                <h1 className="text-[#1F2937] text-2xl md:text-5xl lg:text-5xl font-bold max-w-3xl mb-6">
                    Friends to keep close in your life
                </h1>


                <p className="text-gray-500 text-md md:text-md lg:text-md max-w-2xl mb-10">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.
                </p>


                <button className="btn flex items-center gap-2 bg-[#244D3F] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a382e] transition-colors">
                    <span className="text-xl">+</span> Add a Friend
                </button>
            </div>

            {/* count system */}

            <div className="bg-[#F8FAFC] p-2 ">
            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                
                <div className="bg-white py-5 px-2 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-hover hover:shadow-md">
                    <h2 className="text-5xl font-bold text-[#244D3F] mb-4">12</h2>
                    <p className="text-gray-500 font-medium text-md">Total Friends</p>
                </div>

                
                <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-hover hover:shadow-md">
                    <h2 className="text-5xl font-bold text-[#244D3F] mb-4">3</h2>
                    <p className="text-gray-500 font-medium text-md">On Track</p>
                </div>

                <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-hover hover:shadow-md">
                    <h2 className="text-5xl font-bold text-[#244D3F] mb-4">6</h2>
                    <p className="text-gray-500 font-medium text-md">Need Attention</p>
                </div>

                <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-hover hover:shadow-md">
                    <h2 className="text-5xl font-bold text-[#244D3F] mb-4">12</h2>
                    <p className="text-gray-500 font-medium text-md">Interactions This Month</p>
                </div>

            </div>
        </div>
        </div>



    );
};

export default Banner;