import React, { useState } from 'react';
import './App.css';
import KeyPressShortCut from './component/KeyPress/KeyPress';

function App() {
  const [info, setInfo] = useState([]);

  const handleToggle = (color, item) => {
    const a = document.getElementById(item);
    if (a.style.backgroundColor === 'blue') {
      a.style.backgroundColor = color;
    } else {
      a.style.backgroundColor = 'blue';
    }

  }

  const keyPressHandler = (event) => {
    const arr = document.querySelectorAll('h1');

    for (let item of arr) {
      const color = item.getAttribute('color');
      const combo = item.getAttribute('combo');
      const id = item.getAttribute('title')

      const comboArr = combo.split(' ');
      if (event.key === comboArr[comboArr.length-1]) {

        handleToggle(color, id);
        break;
      }
    }
  }

  const handleInfo = (obj) => {
    let flag = false;
    info && info.forEach((item) => {
      if (item.title === obj.title) {
        flag = true;
      }
    })
    if (!flag) {
      setInfo(prev => [...prev, obj])
    }
  }
  
  return (
    <React.Fragment>
      <section>
      <div className='container'>
        <div className='componentA' id='A'>
        <KeyPressShortCut title="A" description="Toggle color of A to yellow" callBack={keyPressHandler} color='red' combo='shift R' setInfo={handleInfo}/>
        </div>
      <div className='componentA' id='B'>
        <KeyPressShortCut title="B" description="Toggle color of A to yellow" callBack={keyPressHandler} color='black' combo='shift B' setInfo={handleInfo}/>
      </div>
      </div>
      <div className='container' >
      <div className='componentA' id='C'>
       <KeyPressShortCut title="C" description="Toggle color of A to yellow" callBack={keyPressHandler} color='green' combo='ctrl shift G' setInfo={handleInfo}/>
      </div>
      <div className='helper'>
        {info && info.map((obj, idx) => (
          <div className='info_container' key={idx}>
            <div className='title'>{`Component ${obj.title} : `}</div>
            <span className='combo'>{`${obj.combo} : `}</span>
            <span className='description'>{`${obj.des}`}</span>
          </div>
        ))}
      </div>
      </div>
      </section>
    </React.Fragment>
  );
}

export default App;
