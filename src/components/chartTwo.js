import React from "react";
import DataChart2 from "./data_chart_2";
import DataChart3 from "./data_chart_3";

const ChatrTwo = () => {
    return (
        <div className="chart-two">
            <div className="chartTwo-left">
                <DataChart2 />
            </div>
            <div className="chartTwo-right">
                <DataChart3 />
            </div>

        </div>
    )
}

export default ChatrTwo