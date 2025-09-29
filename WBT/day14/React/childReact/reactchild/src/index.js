import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from './Calculator';
import Factorial from './Factorial';
import ArithmaticOperation from './ArithmaticOperation';
import C1 from './ClassComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    {/* <Calculator num1 ="12" num2="4"/>
    <Factorial num = "5"/>
    <ArithmaticOperation num1="2" num2="4" operation="add"/> */}
    <C1 text = "Class"></C1>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
