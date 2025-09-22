import './App.css';
import { useState, useEffect } from 'react';
import Card from './Card';

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setMonsters(data))
  }, [])

  return (
    <>
      {
        monsters.map(({ name, email }, index) => {
          return <Card name={name} email={email} key={`${name}-${index}`}/>
        })
      }
    </>
  );
}

export default App;
