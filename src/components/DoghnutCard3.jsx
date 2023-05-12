import React from 'react'
import {Card} from 'react-bootstrap';
import alarm from '../icons/alarm.png'
import '../styles/DoghnutCard3.css'
import DoughnutChart2 from './DoughnutChart2';


const DoghnutCard3 = ({title,percent,color,val}) => {
  return (
   <Card className='progrescard'>
   <div className='buid' >
    <div className='leftside' >
      <div className='child'>
      {val=='true' ? ( <DoughnutChart2 percent={percent} color={color} />) : ( <img src={alarm} />) }
      </div>

    </div>
    <div className='rightside' >
    {val=='true' ? (<p>{title}</p>) : ( <p>Revenue</p>) }
    {val=='true' ? (<h3>{percent}</h3>) : ( <p>NA</p>) }
    </div>
    </div>
    {val=='true' ? (<h4>Now</h4>) : ( <h4>Waiting for data...</h4>) }
    
 </Card>
  )
}
export default DoghnutCard3