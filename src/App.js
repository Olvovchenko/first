import './App.css';
import Child from './Child';
import ButStyle from './Btn';
import React, {useState, useCallback, useRef, useEffect} from 'react';



function App() {
  const[ran,setRan] = useState(0);
  const[value,setValue]=useState('jkz');
  const count = useRef(0);
  useEffect(() =>{
    count.current = count.current+1;
    },[ran]);

  useEffect(() =>{
    count.current % 2 === 0 ? 
    document.body.classList.add('AP1') : 
    document.body.classList.remove('AP1');
    },[ran]);

  const handleClick=useCallback(()=>{
  console.log (count.current);
  setRan(count.current<5?Math.floor(Math.random()*11)+1:12);
  },
  [count]);
    return (
    
     <div>
    <div className="App">
      <header className="App-header">
        <h2>
        Гадание по книгам. Получи ответ свой на вопрос и совет на будущее. 
        </h2>
      </header>
      <form>
      <h3 style={{color:'lightcoral'}}> Введите, пожалуйста свое имя</h3>
      <input type="text" 
      value={value}
      onChange = {event => setValue(event.target.value)}
      ></input>
      </form>
      <button onClick={()=> handleClick()}>Нажми и ты получишь ответ</button>
      <ButStyle>Подробности...</ButStyle>
      <div className="Answer">
      <Child new={ran} />
      </div>
      </div>
      </div>
  );
}

export default App;
