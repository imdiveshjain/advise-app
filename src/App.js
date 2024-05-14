import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [advice, setAdvice] = useState(""); 
  const [adviceCount, setAdviceCount] = useState(0);

  async function getAdvice() {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      console.log(data);
      setAdvice(data.slip.advice);
      setAdviceCount(count => count + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1><p>{advice}</p></h1>
      <h2><p>Total advices read: {adviceCount}</p></h2>
      <button className ="get-advice-button or original-button" onClick={getAdvice}>Get Advice</button>
      <Message count={adviceCount} />
    </div>
  );
}

export default App;
