import React from 'react';
import { Chart } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import '../styles/Donut.css'




const DoughnutChart = ({title,percent,color}) => {
  console.log(percent);
  const data = {
    datasets: [
      {
        data: [100-percent, percent],
        backgroundColor: ['#f8f9fa',color],
        borderWidth: 0.5,
      },
    ],
  };
  
  
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart,args,pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = 'normal 30px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(data.datasets[0].data[1], chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
    }
  }
  
  const options = {
    cutout: 70,
    rotation: Math.PI,
    reverse: true,
  };
  return (
    <div className='cartd' >
      <div className='donut' >
      <Doughnut data={data} options={options} plugins={[textCenter]} />
      </div>
      
       <p>{title}</p>
    </div>
       

  );
};

export default DoughnutChart;



