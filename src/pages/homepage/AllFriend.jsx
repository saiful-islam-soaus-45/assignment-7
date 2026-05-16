import { useEffect, useState } from "react";
import { Commet } from "react-loading-indicators";
import { Link } from "react-router";
const AllFriend = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/friends.json");
            const data = await res.json();
            setTimeout(() => {
                setFriends(data);
                setLoading(false);
            }, 1000);
        };

        fetchData();

    }, []);

    const getStatusColor = (status) => {

        const s = status?.toLowerCase();


        if (s === "almost-due") return "text-white bg-[#EFAD44]";
        if (s === "overdue") return "text-white bg-[#EF4444]";
        if (s === "on-track") return "text-white bg-[#244D3F]";

        return "text-white bg-gray-400";
    };

    if (loading) {
        return <div className="flex justify-center"><Commet color="#086408" size="medium" text="" textColor="" /></div>
    }

    return (
        <div className="bg-[#F8FAFC]">
            <div className="w-9/12 mx-auto pt-8 ">

                <p className="text-2xl font-bold ">Your Friends</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-30 cursor-pointer">
                    {
                        friends.map((friend, ind) => {
                            return (

                                <Link
                                    to={`/friend/${friend.id}`} key={ind} className="bg-white  rounded-xl shadow-sm border border-gray-100     overflow-hidden flex flex-col pt-5">
                                    <div className="flex justify-center">
                                        <img
                                            src={friend.picture}
                                            alt={friend.picture}
                                            className="rounded-full w-25" />
                                    </div>
                                    <div className="p-5 flex flex-col grow">
                                        <h2 className="text-xl font-bold text-black mb-2 text-center">{friend.name}</h2>
                                        <p className="text-center rounded-3xl">{friend.email} </p>
                                        <p className="text-gray-500 text-sm mb-4 grow font-semibold text-center">
                                            <span className="">Last contact:</span> {friend.days_since_contact} d ago
                                        </p>
                                        <div className="flex justify-center gap-2 mb-4 text-[#244D3F] font-semibold">
                                            {
                                                friend.tags.map((tag, ind) => (
                                                    <span
                                                        key={ind}
                                                        className="bg-[#CBFADB] text-gray-600 text-xs px-3 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))
                                            }
                                        </div>

                                        <div className="flex justify-center">
                                            <p className={`text-center text-sm rounded-4xl px-5 py-1 font-bold  ${getStatusColor(friend.status)}`}>
                                                {friend.status}
                                            </p>
                                        </div>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFriend;