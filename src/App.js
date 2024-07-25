import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState(null);

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <Form currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <List setCurrentItem={setCurrentItem} />
    </div>
  );
}

export default App;
