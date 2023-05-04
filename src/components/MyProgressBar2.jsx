import {ProgressBar} from 'react-bootstrap';
import '../styles/MyProgressBar2.css'
import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import up from '../icons/up.svg'
import down from '../icons/down.svg'

const MyAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  let cards = [
    { percentage: 73, title: 'Memory Usage' },
    { percentage: 35,  title: 'CPU Usage' },
    { percentage: 52,  title: 'Disk Usage' },
  ];

  return (
    <Accordion>
      <Card className='progresss-card'>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" onClick={toggleAccordion} eventKey="0" className='head' >
          <h2>SERVER STATUS</h2>
          <p>{isOpen ? (<img src={up} />) : (<img src={down} />)}</p>  
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className='bod'>
          {cards.map((item,index)=>{
         let variant
         if (item.percentage < 50) {
           variant = 'warning';
       
         } else if (item.percentage < 70) {
           variant ='success' ;
       
         } else {
           variant = "danger";
         }

         return(
          <div className='buil' key={index}>
          <p className='titl' >{item.title}</p>
           <ProgressBar className='baar' variant={variant} striped now={item.percentage} label={`${item.percentage}%`}  />
           </div>
       )}
         )
        }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default MyAccordion;