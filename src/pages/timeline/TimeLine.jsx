import { useContext, useState } from "react";
import { TimelineContext } from "../../components/context/TimelineContext";
import { Phone, MessageSquare, Video } from "lucide-react";

const Timeline = () => {
    const { timeline } = useContext(TimelineContext);
    
    // ফিল্টার স্টেট
    const [activeFilter, setActiveFilter] = useState("All");

    const getIcon = (type) => {
        if (type === "Call") return <Phone size={20} className="text-[#244D3F]" />;
        if (type === "Text") return <MessageSquare size={20} className="text-[#244D3F]" />;
        if (type === "Video") return <Video size={20} className="text-[#244D3F]" />;
    };

    // ফিল্টার অনুযায়ী ডাটা আলাদা করার লজিক
    const filteredTimeline = timeline.filter((item) => {
        if (activeFilter === "All") return true;
        return item.type === activeFilter;
    });

    return (
        <div className="w-9/12 mx-auto py-10">
            <h2 className="text-4xl font-extrabold text-[#1F2937] mb-6">Timeline</h2>

            {/* --- ড্রপডাউন ফিল্টার বক্স --- */}
            <div className="mb-8 max-w-sm">
                <div className="relative">
                    <select
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                        className="w-full bg-[#F8FAFC] text-[#1F2937] text-base px-5 py-4 rounded-xl border border-black-200 outline-none appearance-none cursor-pointer  transition-all font-medium"
                    >
                        <option value="All">Filter timeline (All)</option>
                        <option value="Call">Call List</option>
                        <option value="Text">Text List</option>
                        <option value="Video">Video List</option>
                    </select>
                    
                    {/* ড্রপডাউনের ডানপাশের ছোট তীর (Arrow Icon) */}
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-900">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* --- অ্যাক্টিভিটি লিস্ট --- */}
            <div className="space-y-4">
                {filteredTimeline.length === 0 ? (
                    <p className="text-gray-500 italic bg-white p-5 rounded-xl border text-center">
                        No {activeFilter !== "All" ? activeFilter.toLowerCase() : ""} activity yet.
                    </p>
                ) : (
                    filteredTimeline.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow p-5 rounded-xl border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    {getIcon(item.type)}
                                </div>

                                <div>
                                    <h3>
                                        <span className="font-bold text-lg text-[#244D3F]">
                                            {item.type}
                                        </span>
                                        <span className="text-gray-700 text-sm">
                                            {" "}with {item.name}
                                        </span>
                                    </h3>
                                    <p className="text-gray-700 text-sm mt-1">
                                        {item.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Timeline;