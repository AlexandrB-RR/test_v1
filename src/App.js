import React from 'react';
import Navbar from "./components/UI/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
      <AppRouter />
    </Router>
    </div>
  );
}

export default App;
