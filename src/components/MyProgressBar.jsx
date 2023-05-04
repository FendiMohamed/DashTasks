import {ProgressBar} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import '../styles/MyProgressBar.css'




function MyProgressBar({percentage,title}) {
      let variant;
      let color;
      if (percentage < 50) {
        variant = 'warning';
        color='yellow'
      } else{
        variant ='success' ;
        color='green'
      }       
     return(
      <Card className='progress-card'>
        <div className='build' >
      <p>{title}</p>
      <div className={`${color} circle`} > 
        <p>{percentage}%</p>
      </div>
      </div>
     <ProgressBar variant={variant} className='bar' now={percentage} /> 
    </Card>
    )
}


export default MyProgressBar