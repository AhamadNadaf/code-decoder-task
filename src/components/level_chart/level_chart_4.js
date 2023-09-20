import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var $ = require('jquery');
 
var totalVisitors = 829500;
 
var visitorsDrilldownedChartOptions = {
	animationEnabled: true,
	theme: "light2",
	axisY: {
		gridThickness: 0,
		includeZero: false,
		lineThickness: 1
	},
	data: []
};
 
var newVSReturningVisitorsOptions = {
	animationEnabled: true,
	theme: "light2",
	title: {
		// text: "New vs Loss"
	},

	legend: {
		fontFamily: "calibri",
		fontSize: 14,
		itemTextFormatter: function (e) {
			return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
		}
	},
	data: []
};
 
class LevelChartFour extends Component {
	constructor() {
		super();
		this.options = {};
		this.visitorsChartDrilldownHandler = this.visitorsChartDrilldownHandler.bind(this);
	}
	
	visitorsChartDrilldownHandler(e) {
		var chart = this.chart;
		chart.options = visitorsDrilldownedChartOptions;
		chart.options.data = this.options[e.dataPoint.name];
		chart.options.title = { text: e.dataPoint.name }
		chart.render();
		$("#backButton").toggleClass("invisible");
	}
	
	render() {	
		this.options = {
			"New vs Loss": [{
				click: this.visitorsChartDrilldownHandler,
				cursor: "pointer",
				explodeOnClick: false,
				innerRadius: "75%",
				legendMarkerType: "square",
				name: "New vs Loss",
				radius: "100%",
				showInLegend: true,
				startAngle: 90,
				type: "doughnut",
				dataPoints: [
					{ y: 922460, name: "Profit", color: "green" },
					{ y: 307040, name: "Loss", color: "gray" }
				]
			}],
			"Profit": [{
				color: "green",
				name: "Profit",
				type: "column",
				dataPoints: [
					{ x: new Date("1 Jan 2023"), y: 37000 },
					{ x: new Date("1 Feb 2023"), y: 39960 },
					{ x: new Date("1 Mar 2023"), y: 41160 },
					{ x: new Date("1 Apr 2023"), y: 42240 },
					{ x: new Date("1 May 2023"), y: 42200 },
					{ x: new Date("1 Jun 2023"), y: 43600 },
					{ x: new Date("1 Jul 2023"), y: 45560 },
					{ x: new Date("1 Aug 2023"), y: 47280 },
					{ x: new Date("1 Sep 2023"), y: 48800 },
					{ x: new Date("1 Oct 2023"), y: 52720 },
					{ x: new Date("1 Nov 2023"), y: 56840 },
					{ x: new Date("1 Dec 2023"), y: 58400 }
				]
			}],
			"Loss": [{
				color: "#546BC1",
				name: "Loss",
				type: "column",
				dataPoints: [
					{ x: new Date("1 Jan 2023"), y: 19000 },
					{ x: new Date("1 Feb 2023"), y: 21040 },
					{ x: new Date("1 Mar 2023"), y: 21840 },
					{ x: new Date("1 Apr 2023"), y: 22760 },
					{ x: new Date("1 May 2023"), y: 24800 },
					{ x: new Date("1 Jun 2023"), y: 24400 },
					{ x: new Date("1 Jul 2023"), y: 25440 },
					{ x: new Date("1 Aug 2023"), y: 27720 },
					{ x: new Date("1 Sep 2023"), y: 27200 },
					{ x: new Date("1 Oct 2023"), y: 29280 },
					{ x: new Date("1 Nov 2023"), y: 31160 },
					{ x: new Date("1 Dec 2023"), y: 32400 }
				]
			}]
		}
		const buttonStyle={
			bordeRadius: '4px',
			padding: '8px',
			border: 'none',
			fontSize: '16px',
			backgroundColor: '#2eacd1',
			color: 'red',
			position: 'absolute',
			top: '10px',
			right: '10px',
			cursor: 'pointer'
		}
		return (
		<div>
			<CanvasJSChart options = {this.options} 
				 onRef={ref => this.chart = ref}
				 containerProps={{ width: '100%', height: '200px' }} 

			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			<button className="btn invisible" id="backButton" style={buttonStyle}>&lt; Back</button>
		</div>
		);
	}
	
	componentDidMount(){
		var chart = this.chart;
		var options = this.options
			chart.options = newVSReturningVisitorsOptions;
			chart.options.data = options["New vs Loss"];
			chart.render();
		
		$("#backButton").click(function() { 
			$(this).toggleClass("invisible");
			chart.options = newVSReturningVisitorsOptions;
			chart.options.data = options["New vs Loss"];
			chart.render();
		});
	}
}
 
export default LevelChartFour;       