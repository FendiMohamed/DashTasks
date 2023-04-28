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
    <Card id='progres-card'>
      <div id='built'>
      {color=='red' ? <p id='red' >{percentage}%</p> : color=='yellow' ? <p id='yellow' >{percentage}%</p> : <p id='green' >{percentage}%</p>  } 
        <ProgressBar id='barr' variant={variant} now={percentage} />
      </div>
      <p id='title' >{title}</p>
    </Card>
  )
}
export default MyProgressBar3