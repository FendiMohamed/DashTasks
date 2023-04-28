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
      <Card id='progress-card'>
        <div id='build' >
      <p>{title}</p>
      <div id='circle' className={color}>
        <p>{percentage}%</p>
      </div>
      </div>
     <ProgressBar variant={variant} id='bar' now={percentage} />
    
    </Card>
    )
}


export default MyProgressBar