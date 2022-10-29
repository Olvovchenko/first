import './App.css';
import Child from './Child'
import React, {useState, useCallback, useRef, useEffect} from 'react';

function App() {
  const[ran,setRan] = useState(0);
  const count = useRef(0);
  useEffect(() =>{count.current = count.current+1;});

     const handleClick=useCallback(()=>setRan(count.current<5?Math.floor(Math.random()*11)+1:12),[]);
    return (
      <body>
    <div className="App">
      <header className="App-header">
        <h2>
        Гадание по книгам. Получи ответ свой на вопрос и совет на будущее. 
        </h2>
      </header>
      <button onClick={()=> handleClick()}>Нажми и ты получишь ответ</button>
      <div className="Answer">
      <Child new={ran} />
      </div>
    </div>
    </body>
  );
}

export default App;
