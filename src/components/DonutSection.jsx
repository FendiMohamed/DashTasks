import React from 'react'
import DoughnutChart from './DoughnutChart'
import '../styles/Donut.css'

const donutdata=[
 {title:'Education', percent:80,color:'red'},
 {title:'Education', percent:60,color:'#007bff'},
 {title:'Education', percent:70,color:'#007bff'},
 {title:'Education', percent:90,color:'#007bff'},
 {title:'Education', percent:60,color:'#007bff'},
 {title:'Education', percent:50,color:'#007bff'},
 {title:'Education', percent:30,color:'#007bff'},
 {title:'Education', percent:20,color:'#007bff'},

]
 


const DonutSection = () => {
  return (
    <div className='section' >
     {donutdata.map((item,index)=>
     <div key={index} >
     <DoughnutChart title={item.title} percent={item.percent} color={item.color}  />
     </div>
    
     )}
    </div>
  )
}

export default DonutSection