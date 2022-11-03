import './App.css';
import Child from './Child';
import ButStyle from './Btn';
import React, {useState, useCallback, useRef, useEffect} from 'react';
import MyInp from './Inp';



function App() {
  const[ran,setRan] = useState(0);
  const[value1,setValue1]=useState('');
  const[value2,setValue2]=useState('');
  
  const count = useRef(0);
  useEffect(() =>{
    count.current = count.current+1;
    },[ran]);

  useEffect(() =>{
    count.current % 2 === 0 ? 
    document.body.classList.add('AP1') : 
    document.body.classList.remove('AP1');
    },[ran]);

    const znakInputRef = useRef();

  const handleClick=useCallback(()=>{
  console.log (count.current);
  setRan(count.current<5?Math.floor(Math.random()*11)+1:12);
  },
  [count]);
  
  const handlerKeyUp = (e) => {
    if (e.key==="Enter") {znakInputRef.current.focus();
    }
  };
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
      
      
      <MyInp type="text" 
      value={value1}
      placeholder="Полное имя"
      onChange = {event => setValue1(event.target.value)}
      onKeyUp = {handlerKeyUp}
      />
      <input 
      type="text"
      value ={value2}
      ref={znakInputRef}
      placeholder='ваш знак зодиака'
      onChange= {event => setValue2(event.target.value)}
      ></input>

      </form>
      <button onClick={()=> handleClick()}>Нажми и ты получишь ответ</button>
      <br />
      <ButStyle disabled>Подробности...</ButStyle>
      <div className="Answer">
      <Child new={ran} />
      </div>
      </div>
      </div>
  );
}

export default App;
