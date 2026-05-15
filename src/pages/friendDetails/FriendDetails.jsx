import { useEffect, useState } from "react";
import { Commet } from "react-loading-indicators";
import { useParams } from "react-router-dom"; 

const FriendDetails = () => {
    const { id } = useParams();
    
    
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/friends.json");
                const data = await res.json();
                const singleFriend = data.find(f => f.id == id);
                
                setTimeout(() => {
                    setFriend(singleFriend);
                    setLoading(false); 
                }, 1000);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]); 

    if (loading) {
        return (
            <div className="flex justify-center ">
                <Commet color="#086408" size="medium" text="" textColor="" />
            </div>
        );
    }

    
    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-10">
            <div className="w-6/12 mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                <img 
                    src={friend.picture} 
                    alt={friend.name} 
                    className="w-32 h-32 rounded-full object-cover shadow-sm" 
                />
                
                <h1 className="text-3xl font-bold text-black mt-4">{friend.name}</h1>
                <p className="bg-amber-200 rounded-3xl px-4 py-1 mt-2 text-sm font-medium">{friend.email}</p>
                
                <div className="mt-6 text-center space-y-2">
                    <p className="text-gray-600">
                        <span className="font-semibold">Status:</span> {friend.status}
                    </p>
                    <p className="text-gray-500 text-sm">
                        <span className="font-semibold">Last contact:</span> {friend.days_since_contact} days ago
                    </p>
                </div>

                <div className="flex gap-2 mt-4">
                    {friend.tags?.map((tag, i) => (
                        <span key={i} className="bg-[#CBFADB] text-gray-600 text-xs px-3 py-1 rounded-full font-semibold">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;