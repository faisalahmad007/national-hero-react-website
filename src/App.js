import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
    return (
    <div className="app-area">
    
    <Header></Header>
    <h2 className="text-center">Total Salary:100 Milion</h2>
    <Main></Main>
   
    </div>
    );
};

export default App;





