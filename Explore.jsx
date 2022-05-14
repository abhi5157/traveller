import React from 'react'
import Card from "./Component/Cards";
import "./Component/Explore.css";



const Explore  = ({item}) => {
  return (
    <>

<div className="container">
  
   {item.map((value)=>{
     const{sname,imgscr,title,links,category} = value;
  return (
     <Card     sname = {value.sname}
     imgscr ={value.imgscr}
     title= {value.title}
     links= {value.links}
     category = {value.category}/>          /*   it is used for mapping outside of of array*/
  )
}
)
}
</div>
    </>
  )
}

export default Explore;