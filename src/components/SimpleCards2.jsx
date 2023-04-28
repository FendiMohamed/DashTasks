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
   <div id="card-list">
{cardds.map((item,index)=>(
    <Card className={`${item.color} card`} key={index}>
    <Card.Body>
     <div id='first' >
     <p id="numb">{item.number}</p>
     <p id="tlt">{item.title}</p>
     </div>
     <div id='second' >
      <img id='mg' src={item.img}/>
     </div>
        
    </Card.Body>
  </Card>
   ))}
    </div>
  );
}


export default MyCard2