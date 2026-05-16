import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
        <div className="bg-[#1F5A46] text-white py-16">
            <div className="w-11/12 mx-auto text-center">

                <h1 className="text-5xl font-bold mb-4">
                    Keen<span className="font-semibold">Keeper</span>
                </h1>

                <p className="text-gray-300 max-w-2xl mx-auto text-sm mb-8">
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                </p>

                <h3 className="font-semibold mb-4 text-lg">
                    Social Links
                </h3>

                <div className="flex justify-center gap-4 mb-10">
                    <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                        <GrInstagram />
                    </div>

                    <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                        <FaFacebookSquare />

                    </div>

                    <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                       <BsTwitterX />

                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
                    <p>
                        © 2026 KeenKeeper. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;