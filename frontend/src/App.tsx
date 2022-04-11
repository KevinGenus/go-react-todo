import './styles/App/App.css';

import Header from './components/Header/Header';
import React from 'react';
import { TodoList } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todos={[
        {title: "Go Shopping", description: "Buy bannas, mangos, apple juice and coconuts for smoothie", isComplete: true},
        {title: "Exercise", description: "Leg press, leg curls, calf raises, dead lifts - 5.1-5 + 2x", isComplete: false},
        {title: "Change Tires", description: "Get new tires installed @ Costco" ,isComplete: true},
      ] }/>
    </div>
  );
}

export default App;
