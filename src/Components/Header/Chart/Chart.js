import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
import './Chart.css'; // Import the CSS file for styling

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize 3D module for Highcharts
    Highcharts3D(Highcharts);

    // Set up the chart
    const chart = new Highcharts.Chart({
      chart: {
        renderTo: chartRef.current,
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
        }
      },
      xAxis: {
        categories: ['2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024']
      },
      yAxis: {
        title: {
          enabled: false
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: 'Students: {point.y}'
      },
      title: {
        text: 'Students Placement Analysis According to Branch',
        align: 'center',
        style: {
          color: 'rgb(20, 6, 63)', // Change text color
          fontSize: '24px'
        }
      },
      legend: {
        enabled: true, // Enable legend
        itemStyle: {
          color: 'rgb(20, 6, 63)', // Legend text color
          fontSize: '14px' // Legend text size
        }
      },
      credits: {
        enabled: false // Disable HighCharts.com link
      },
      plotOptions: {
        column: {
          depth: 25,
          groupPadding: 0.05, // Adjust group padding
          pointPadding: 0.1 // Adjust point padding
        }
      },
      series: [{
        name: 'CSE',
        color: '#87CEEB', // Sky Blue
        data: [22, 35, 29, 39, 40, 50, 49, 41, 13]
      }, {
        name: 'IT',
        color: '#FFA07A', // Light Salmon
        data: [15, 28, 33, 44, 46, 37, 57, 28, 11]
      }, {
        name: 'ECE',
        color: '#32CD32', // Lime Green
        data: [24, 24, 54, 22, 16, 28, 48, 34, 2]
      }, {
        name: 'EEE',
        color: '#FFD700', // Gold
        data: [10, 10, 0, 8, 6, 7, 24, 24, 1]
      }, {
        name: 'MECH',
        color: '#4682B4', // Steel Blue
        data: [20, 4, 21, 23, 8, 5, 19, 29, 31]
      }, {
        name: 'MET',
        color: '#8A2BE2', // Blue Violet
        data: [7, 2, 3, 5, 0, 7, 16, 6, 0]
      }, {
        name: 'CIVIL',
        color: '#FF6347', // Tomato
        data: [0, 0, 5, 9, 2, 3, 8, 10, 4]
      }]
    });

    // Function to update chart with new alpha, beta, and depth values
    function updateChart() {
      const alpha = parseFloat(document.getElementById('alpha').value);
      const beta = parseFloat(document.getElementById('beta').value);
      const depth = parseFloat(document.getElementById('depth').value);

      chart.options.chart.options3d.alpha = alpha;
      chart.options.chart.options3d.beta = beta;
      chart.options.chart.options3d.depth = depth;

      chart.redraw(false);
    }

    // Activate the sliders and update the chart when values change
    const alphaInput = document.getElementById('alpha');
    const betaInput = document.getElementById('beta');
    const depthInput = document.getElementById('depth');

    if (alphaInput) {
      alphaInput.addEventListener('input', updateChart);
    }
    if (betaInput) {
      betaInput.addEventListener('input', updateChart);
    }
    if (depthInput) {
      depthInput.addEventListener('input', updateChart);
    }

    // Clean up function
    return () => {
      // Remove event listeners when component unmounts
      if (alphaInput) {
        alphaInput.removeEventListener('input', updateChart);
      }
      if (betaInput) {
        betaInput.removeEventListener('input', updateChart);
      }
      if (depthInput) {
        depthInput.removeEventListener('input', updateChart);
      }

      chart.destroy(); // Destroy the chart when component unmounts
    };
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <div ref={chartRef}></div>
      <div id="sliders">
        <p>
          Alpha Angle: <span id="alpha-value">15</span>
          <input type="range" id="alpha" min="0" max="360" step="1" defaultValue="15" />
        </p>
        <p>
          Beta Angle: <span id="beta-value">15</span>
          <input type="range" id="beta" min="0" max="360" step="1" defaultValue="15" />
        </p>
        <p>
          Depth: <span id="depth-value">50</span>
          <input type="range" id="depth" min="20" max="100" step="1" defaultValue="50" />
        </p>
      </div>
    </div>
  );
};

export default Chart;
