import { useEffect, useState } from "react";
const AllFriend = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/friends.json");
            const data = await res.json();
            console.log(data);
            setFriends(data);
        };
        fetchData();

    }, []);
    console.log(friends);
    return (
        <div className="bg-[#F8FAFC]">
            <div className="w-9/12 mx-auto pt-8 ">

                <p className="text-2xl font-bold ">Your Friends</p>

                {/* <div className="  border border-amber-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                    {
                        friends.map((friend, ind) => {
                            return (
                               
                                <div key={ind}>
                                    <img className="rounded-full w-20" src={friend.picture} alt="" />
                                    <p>{friend.name}</p>
                                </div>

                            )
                        })
                    }
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-30">
                    {
                        friends.map((friend, ind) => {
                            return (
                                /* w-60 bad diye w-full use korun */
                                <div key={ind} className="bg-white  rounded-xl shadow-sm border border-gray-100     overflow-hidden flex flex-col pt-5">
                                    <div className="flex justify-center">
                                        <img
                                            src={friend.picture}
                                            alt={friend.picture}
                                            className="rounded-full w-25" />
                                    </div>
                                    <div className="p-5 flex flex-col grow">
                                        <h2 className="text-xl font-bold text-black mb-2 text-center">{friend.name}</h2>
                                        <p className="text-center bg-amber-200 rounded-3xl">{friend.email} </p>
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
                                        <p className="text-center text-sm">{friend.status}</p>
                                       
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFriend;