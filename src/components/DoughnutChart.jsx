import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import '../styles/Donut.css';

const DoughnutChart = ({ title, percent, color }) => {
  const [cutout, setCutout] = useState(160); 

  useEffect(() => {
    const updateCutoutValue = () => {
      const smallDeviceWidth = 480;
      const mediumDeviceWidth = 768;
      const largeDeviceWidth = 1024;
      const extralargeDeviceWidth = 1280;


      const screenWidth = window.innerWidth;
      let newCutout;

      if (screenWidth <= smallDeviceWidth) {
        newCutout = 90;
      } else if (screenWidth <= mediumDeviceWidth) {
        newCutout = 80;
      }else if (screenWidth <= largeDeviceWidth) {
        newCutout = 100;
      }else if (screenWidth <= extralargeDeviceWidth) {
        newCutout = 130;
      }
       else {
        newCutout = 150;
      }

      setCutout(newCutout);
    };


    window.addEventListener('resize', updateCutoutValue);
    updateCutoutValue();

    return () => {
  
      window.removeEventListener('resize', updateCutoutValue);
    };
  }, []);

  const data = {
    datasets: [
      {
        data: [100 - percent, percent],
        backgroundColor: ['#f8f9fa', color],
        borderWidth: 0.1,
      },
    ],
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = 'normal 30px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        data.datasets[0].data[1],
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  const options = {
    cutout,
    rotation: Math.PI,
    reverse: true,
  };

  return (
    <div className='cartd'>
      <Doughnut data={data} options={options} plugins={[textCenter]} />
      <p>{title}</p>
    </div>
  );
};

export default DoughnutChart;




