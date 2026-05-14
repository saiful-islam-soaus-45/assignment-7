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
        </div>
    );
};

export default Banner;