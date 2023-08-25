import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Question from './Question';

 function Questions() {
const[data,setData]= useState([]);



useEffect(() => {
    axios
        .get('http://localhost:8093/api/questions')
        .then((response) => {
            const data = response.data;
            setData(data)
            console.log(data)
        });
}, []); 
  return (
    <div>
        {data.map(item=>{
            return(
               
                <Question item={item} />

            );
        })}
    </div>
  )
}export default Questions;
