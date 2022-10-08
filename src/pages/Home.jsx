import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Home = (props) => {
    const [state,setState] = useState([]);
    
    useEffect (()=>{
        axios.get ('http://localhost:9000/get-data')
        .then(res =>{
            console.log(res);
            setState(res.data.data)
        })
    },[])
  return (
    
    
    <ul>
    {Array.from(state).map((item,index) => {
      return (
      <>
      <div key={index}>
      <li>{item.name}</li>
      <li>{item.job}</li>
     
      </div>
      </>
      )
    })}
    </ul>
  )
  
  

}

export default Home;
