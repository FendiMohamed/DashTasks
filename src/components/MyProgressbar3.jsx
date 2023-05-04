import {ProgressBar} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import '../styles/ProgressCard3.css'

function MyProgressBar3({percentage,title}) {
 
  let variant;
  let color;
  if (percentage < 50) {
    variant = 'warning';
    color='yellow'
  } else if (percentage < 70) {
    variant ='success' ;
    color='green'
  } else {
    variant = "danger";
    color='red'
  }

  return (
    <Card className='progres-card'>
      <div className='built'>
      {color=='red' ? <p className='red' >{percentage}%</p> : color=='yellow' ? <p className='yellow' >{percentage}%</p> : <p className='green' >{percentage}%</p>  } 
        <ProgressBar className='barr' variant={variant} now={percentage} />
      </div>
      <p className='title' >{title}</p>
    </Card>
  )
}
export default MyProgressBar3