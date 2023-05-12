import './App.css';
import MyCard from './components/SimpleCards';
import MyProgressBar from './components/MyProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProgressBar3 from './components/MyProgressbar3';
import MyProgressBar2 from './components/MyProgressBar2';
import MyCard2 from './components/SimpleCards2';
import DonutSection from './components/DonutSection';
import DoghnutCard3 from './components/DoghnutCard3';
import users from './icons/users.svg'
import message from './icons/message.svg'
import chart from './icons/chart.svg'
import comment from './icons/comment.svg'

function App() {
  return (
    <div className="App">
   <MyCard percentage='6' number='230' title='New Tickets' />
   <MyCard2 img={users} number='180' title='New Users' color='red' />
   <MyProgressBar percentage='70' title='CPU USAGE' />
   <MyProgressBar2/>
   <MyProgressBar3 percentage='73' title='Income Target' />
   <DonutSection/>
   <DoghnutCard3 title='CPU Load' percent='75' color='red' val='true'/>  {/** assert to val its opposite value  if you want to see the other form of it */}
    </div>
  );
}

export default App;
