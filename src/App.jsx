import './App.css';
import { useState } from 'react';
import Card from './Card';

const App = () => {
  const arr = ['a', 'b', 'c', 'd'];
  return (
    <>
      {
        arr.map((name, index) => {
          return <Card name={name} key={`${name}-${index}`}/>
        })
      }
    </>
  );
}

export default App;
