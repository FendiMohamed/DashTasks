import {ProgressBar} from 'react-bootstrap';
import '../styles/MyProgressBar2.css'
import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import up from '../icons/up.svg'
import down from '../icons/down.svg'

const MyAccordion = () => {
  let cards = [
    { percentage: 73, title: 'Memory Usage' },
    { percentage: 35,  title: 'CPU Usage' },
    { percentage: 52,  title: 'Disk Usage' },
  ];

  return (
      <Card className='progresss-card'>
        <Card.Header>
          <div  variant="link" eventKey="0" className='head' >
          <p >SERVER STATUS</p>
          {/* <p>{isOpen ? (<img src={up} />) : (<img src={down} />)}</p>   */}
          <img src={down} />
          </div>
          <hr className='underline'/>
        </Card.Header>
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
      </Card>
  );
};

export default MyAccordion;