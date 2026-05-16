import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    const addTimeline = (activity) => {
        setTimeline((prev) => [activity, ...prev]);
    };

    return (
        <TimelineContext.Provider value={{ timeline, addTimeline }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;