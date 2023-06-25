import React from 'react'
import { useState,useEffect } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
      const intervalId = setInterval(() => {

        
        setTimer((prevTimer) => (prevTimer<=0)?10: prevTimer - 1);

      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (
          <div style={{textAlign:"center"}}>
          <h1 style={{color:"#00d2d3",textShadow:"2px 8px 10px #48dbfb"}}>Please Wait Poll is Loading</h1>
        <h1 style={{color:"black",textShadow:"2px 2px 10px #10ac84"}}>Waiting Time: <b style={{color:"red",textShadow:"2px 2px 10px #ee5253"}}>{timer}</b></h1>
      </div>
    );
}

export default Timer;