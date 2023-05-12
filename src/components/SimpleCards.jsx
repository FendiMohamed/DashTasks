import {Card} from 'react-bootstrap';
import '../styles/MyCards.css';

function MyCard({percentage,number,title}) {
  return (
    <div className="my-card">
    <div className='bodycard' >
         {percentage < 0 ? <p className="percentage-number">{percentage}%</p> : <p className="percentagee-number">+{percentage}%</p> }
         <div className='secondchild' >
         <h3 className="number">{number}</h3>
        <p className="card-title">{title}</p>
         </div>
        
    </div>
  </div>
  );
}


export default MyCard
