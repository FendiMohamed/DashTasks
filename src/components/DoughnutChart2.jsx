import { Doughnut } from 'react-chartjs-2';




const DoughnutChart2 = ({percent,color}) => {
  const data = {
    datasets: [
      {
        data: [100-percent, percent],
        backgroundColor: ['black',color],
        borderWidth: 0.5,
      },
    ],
  };
  
  
  const options = {
    cutout: 20,
    rotation: Math.PI,
  };
  return (
    <Doughnut data={data} options={options} />
  );
};

export default DoughnutChart2;