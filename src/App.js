import './App.css';
import Child from './Child'
import React, {useState, useCallback, useRef, useEffect} from 'react';

function App() {
  const[ran,setRan] = useState(0);
  const count = useRef(0);
  useEffect(() =>{count.current = count.current+1;});

     const handleClick=useCallback(()=>setRan(Math.floor(Math.random()*11)+1),[]);
    return (
      <body>
    <div className="App">
      <header className="App-header">
        <h2>
        Гадание по книгам. Получи ответ свой на вопрос и совет на будущее.Вы нажали {count.current} раз. 
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
