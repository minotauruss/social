
import React, { useEffect, useState } from 'react';
import Question from './Question';
import axios from 'axios';



function Questions() {
  const [data, setData] = useState([])



  useEffect(() => {



    axios.get('http://localhost:8093/api/questions')
      .then((response) => {
        const data = response.data;
        setData(data)
      });
  }, [])

  return (
    <div>
     {data.map(item=>{
      return(<Question item={item}/>);
     })}
    </div>
  )
} export default Questions;
