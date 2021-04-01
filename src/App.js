
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Draggable } from './CustomHooks/useDraggable/useDraggable';




const App = () => {

  return (

    <div className="container" >
      <Draggable vertical>
        <div className="wrapper" >
          <span>vertical</span>
          <button onMouseDown={(e) => console.log('hello')}>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </Draggable>
      <Draggable horizontal>
        <div className="wrapper" >
          <span>horizontal</span>
          <button onMouseDown={(e) => console.log('hello')}>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </Draggable>
      <Draggable>
        <div className="wrapper" >
          <span>360</span>
          <button onMouseDown={(e) => console.log('hello')}>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </Draggable>
    </div>
  )
}


export default App;