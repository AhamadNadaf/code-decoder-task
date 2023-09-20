import React from "react";
import DataChart from "./data_chart";
import LevelChartOne  from "./level_chart/level_chart_1";
import LevelChartTwo from "./level_chart/level_chart_2";
import LevelChartThreefrom from "./level_chart/level_chart_3";
import LevelChartFour from "./level_chart/level_chart_4";
import './style.css'

const ChartOne = () => {
    return (
        <div className="chartOne-div">
            <div className="chartone-sub-div-1">
                <div className="chatone-sun-div-1-1">
                    <div className="chatone-sun-div-1-1-1">
                        <p>
                            Total Accounts Receivable
                        </p>
                        <h1 className="chatoen-dollar-1">
                            $6,621,280
                        </h1>
                    </div>
                    <div className="chatone-sun-div-1-1-1">
                        <p>
                            Total Accounts Payable
                        </p>
                        <p className="chatoen-dollar-2">
                            $1,630,270
                        </p>
                    </div>

                    <div className="chatone-sun-div-1-1-1-1">
                        <p>
                            Equity Ratio
                        </p>
                        <h1 className="chatone-ratio">
                            75.38%
                        </h1>
                    </div>

                    <div className="chatone-sun-div-1-1-1-1">
                        <p>
                            Debt Equity
                        </p>
                        <h1 className="chatone-ratio">
                            1.10%
                        </h1>
                    </div>
                </div >

                <div className="chatone-sun-div-1-1">
                    <div className="chatone-sun-div-1-1-2">

                        <p className="top-p">
                            Current Ratio
                        </p>
                        <div className="level-chart-1">
                        <LevelChartTwo />

                        </div>


                    </div>

                    <div className="chatone-sun-div-1-1-2">
                        <p className="top-p">
                            DSI
                        </p>
                        <p className="sub-top-p">
                            [Days Sales Inventory]
                        </p>
                        <LevelChartOne />

                    </div>


                    <div className="chatone-sun-div-1-1-2">
                        <p className="top-p">
                            DSO
                        </p>
                        <p className="sub-top-p">
                            [Days Sales Outstanding]
                        </p>
                        <LevelChartThreefrom />

                    </div>



                    <div className="chatone-sun-div-1-1-2">
                        <p className="top-p">
                            DPO
                        </p>
                        <p className="sub-top-p">
                            [Days Payable Outstanding]
                        </p>
                        <LevelChartFour />
                    </div>
                </div>

            </div>

            <div className="chatone-right-div">
                <div className="chatone-right-sub">
                    <DataChart />

                </div>

            </div>




        </div>
    )
}

export default ChartOne