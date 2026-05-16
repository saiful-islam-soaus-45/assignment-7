import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Commet } from "react-loading-indicators";
import { Bell, Archive, Trash2, Phone, MessageSquare, Video } from "lucide-react";
import toast from "react-hot-toast";
import { TimelineContext } from "../../components/context/TimelineContext";

const FriendDetails = () => {
    const { id } = useParams();
    const { addTimeline } = useContext(TimelineContext);
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/friends.json");
            const data = await res.json();

            const singleFriend = data.find(f => f.id == id);

            setTimeout(() => {
                setFriend(singleFriend);
                setLoading(false);
            }, 1000);
        };
        fetchData();
    }, [id]);

    const getStatusColor = (status) => {

        const s = status?.toLowerCase();


        if (s === "almost-due") return "text-white bg-[#EFAD44]";
        if (s === "overdue") return "text-white bg-[#EF4444]";
        if (s === "on-track") return "text-white bg-[#244D3F]";

        return "text-white bg-gray-400";
    };

    if (loading) return (
        <div className="flex justify-center items-center">
            <Commet color="#086408" size="medium" />
        </div>
    );



    if (loading) return (
        <div className="flex justify-center items-center h-screen w-full">
            <Commet color="#086408" size="medium" />
        </div>
    );

    return (
        <div className="bg-[#F8FAFC] min-h-screen p-4 md:p-10 font-sans">
            <div className="w-9/12 mx-auto flex flex-col lg:flex-row gap-8">

                {/* --- Left Column: Friend Info Card --- */}
                <div className="lg:w-1/3 space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <img src={friend.picture} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-gray-50" alt={friend.name} />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{friend.name}</h2>

                        <span className={`px-4 py-1 rounded-full text-xs font-bold mb-3  tracking-wider ${getStatusColor(friend.status)}`}>
                            {friend.status}
                        </span>

                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {friend.tags?.map((tag, index) => (
                                <span key={index} className="bg-[#CBFADB] text-[#244D3F] text-xs  px-3 py-1 rounded-md uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-500 italic mb-1">"{friend.bio}"</p>
                        <p className="text-gray-400 text-sm">Preferred: {friend.email}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button className="w-full btn bg-white py-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                            <Bell size={18} /> Snooze 2 Weeks
                        </button>
                        <button className="w-full btn bg-white py-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                            <Archive size={18} /> Archive
                        </button>
                        <button className="w-full btn bg-white py-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 font-semibold text-red-500 hover:bg-red-50 transition-colors">
                            <Trash2 size={18} /> Delete
                        </button>
                    </div>
                </div>

                {/* --- Right Column: Stats & Goals --- */}
                <div className="lg:w-2/3 space-y-6">

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-4xl font-bold text-[#244D3F] mb-1">{friend.days_since_contact}</h3>
                            <p className="text-gray-500 text-sm font-medium">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-4xl font-bold text-[#244D3F] mb-1">{friend.goal}</h3>
                            <p className="text-gray-500 text-sm font-medium">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-[#244D3F] mb-1 py-1">
                                {new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-[#244D3F]">Relationship Goal</h3>
                            <button className="p-2 border btn border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 text-black">Edit</button>
                        </div>
                        <p className="text-gray-600">Connect every <span className="font-bold text-black">{friend.goal} days</span></p>
                    </div>

                    {/* Quick Check-In Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-[#244D3F] mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button
                                onClick={() => {
                                    toast.success(`Call with ${friend.name}`);

                                    addTimeline({
                                        type: "Call",
                                        name: friend.name,
                                        time: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                                    });
                                }}
                                className="flex flex-col cursor-pointer items-center gap-2 p-6 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all hover:shadow-md"
                            >
                                <Phone size={24} className="text-gray-700" />
                                <span className="font-medium text-gray-700">Call</span>
                            </button>

                            <button
                                onClick={() => {
                                    toast.success(`Text with ${friend.name}`);

                                    addTimeline({
                                        type: "Text",
                                        name: friend.name,
                                        time: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),

                                    });
                                }}

                                className="flex flex-col cursor-pointer items-center gap-2 p-6 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all hover:shadow-md"
                            >
                                <MessageSquare size={24} className="text-gray-700" />
                                <span className="font-medium text-gray-700">Text</span>
                            </button>

                            <button
                                onClick={() => {
                                    toast.success(`Video with ${friend.name}`);

                                    addTimeline({
                                        type: "Video",
                                        name: friend.name,
                                        time: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),

                                    });
                                }}
                                className="flex flex-col cursor-pointer items-center gap-2 p-6 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all hover:shadow-md"
                            >
                                <Video size={24} className="text-gray-700" />
                                <span className="font-medium text-gray-700">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
