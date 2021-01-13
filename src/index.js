import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const articles = [
  {
      title : "one",
      upvotes : 25,
      date : "2021-01-25"
  },
  {
      title : "two",
      upvotes : 75,
      date : "2019-01-25"
  },
  {
      title : "three",
      upvotes : 15,
      date : "2020-01-25"
  },
  {
      title : "four",
      upvotes : 12,
      date : "2017-01-25"
  },
  {
      title : "five",
      upvotes : 50,
      date : "2018-01-25"
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App articles={articles}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
