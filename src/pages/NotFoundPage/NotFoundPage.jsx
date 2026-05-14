import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-6xl font-extrabold text-[#244D3F]">404</h1>

                <h2 className="text-2xl font-semibold mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mt-2 max-w-md">
                    Looks like this friendship link is broken.The page you are
                    looking for doesn’t exist or has been removed.
                </p>

                <button className="mt-6 px-5 py-2 bg-[#244D3F] text-white rounded-lg cursor-pointer btn">
                     <Link to={'/'}>Back to Home</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;