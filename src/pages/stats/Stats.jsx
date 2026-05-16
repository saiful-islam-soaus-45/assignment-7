import { useContext } from "react";
import { TimelineContext } from "../../components/context/TimelineContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const Stats = () => {
    const { timeline } = useContext(TimelineContext);

    const counts = timeline.reduce(
        (acc, item) => {
            if (item.type === "Call") acc.call += 1;
            if (item.type === "Text") acc.text += 1;
            if (item.type === "Video") acc.video += 1;
            return acc;
        },
        { call: 0, text: 0, video: 0 }
    );

    const data = [
        { name: "Call", value: counts.call },
        { name: "Text", value: counts.text },
        { name: "Video", value: counts.video },
    ];

    const COLORS = ["#244D3F", "#7C3AED", "#22C55E"];

    const hasData = counts.call > 0 || counts.text > 0 || counts.video > 0;

    return (
        <div className="w-9/12 mx-auto py-10">
            
            <h2 className="text-4xl font-extrabold text-[#1F2937] mb-8">
                Friendship Analytics
            </h2>

            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#244D3F] mb-4">
                    By Interaction Type
                </h3>

                {hasData ? (
                    <div className="w-full h-75 flex justify-center items-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70} 
                                    outerRadius={90}
                                    paddingAngle={5} 
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={COLORS[index % COLORS.length]} 
                                        />
                                    ))}
                                </Pie>
                                <Legend 
                                    iconType="circle" 
                                    layout="horizontal" 
                                    verticalAlign="bottom" 
                                    align="center"
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <div className="h-75 flex items-center justify-center text-gray-400 italic">
                        No interaction data available!
                    </div>
                )}
            </div>
        </div>
    );
};

export default Stats;