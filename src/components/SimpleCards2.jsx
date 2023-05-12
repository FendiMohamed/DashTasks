import {Card} from 'react-bootstrap';
import '../styles/Card2.css';
import users from '../icons/users.svg'
import message from '../icons/message.svg'
import chart from '../icons/chart.svg'
import comment from '../icons/comment.svg'

const cardds = [
 { img: users, number: 180, title: 'New Users',color:'red'},
 { img: message, number: 32, title: 'New Messages',color: 'blue'},
 { img: chart, number: 105, title: 'New Sales',color: 'purple'},
 { img: comment, number: 56, title: 'New Comments',color:'green'},

];

function MyCard2() {
  return (
   <div className="card-list">
{cardds.map((item,index)=>(
    <div className={`${item.color} card`} key={index}>
    <div>
     <div className='first' >
     <p className="numb">{item.number}</p>
     <p className="tlt">{item.title}</p>
     </div>
     <div className='second' >
      <img className='mg' src={item.img}/>
     </div>
        
    </div>
  </div>
   ))}
    </div>
  );
}


export default MyCard2