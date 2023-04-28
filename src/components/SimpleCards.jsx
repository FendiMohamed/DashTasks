import {Card} from 'react-bootstrap';
import '../styles/MyCards.css';

function MyCard({percentage,number,title}) {
  return (
    <Card id="my-card">
    <Card.Body id='bodycard' >
         {percentage < 0 ? <h3 id="percentage-number">{percentage}%</h3> : <h3 id="percentagee-number">+{percentage}%</h3> }
         <h3 id="number">{number}</h3>
        <Card.Title id="card-title">{title}</Card.Title>
    </Card.Body>
  </Card>
  );
}


export default MyCard
