import {Card} from 'react-bootstrap';
import '../styles/MyCards.css';

function MyCard({percentage,number,title}) {
  return (
    <div className="my-card">
    <div className='bodycard' >
         {percentage < 0 ? <h3 className="percentage-number">{percentage}%</h3> : <h3 className="percentagee-number">+{percentage}%</h3> }
         <h3 className="number">{number}</h3>
        <p className="card-title">{title}</p>
    </div>
  </div>
  );
}


export default MyCard
