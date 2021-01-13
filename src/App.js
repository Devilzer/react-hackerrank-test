import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Articles from "./Articles";

function App({articles}) {
  const [sortarr,setSortarr]=useState([]);
  var array = [...articles];
  useEffect(()=>{
    sortByUpvotes();
    console.log(sortarr);
  },[]);

  const sortByDate=()=>{
    array.sort((a,b)=>{
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateB-dateA;
    });
    setSortarr(array);
  };
  const sortByUpvotes=()=>{
    array.sort((a,b)=>{
      var upvA = new Date(a.upvotes);
      var upvB = new Date(b.upvotes);
      return upvB-upvA;
    });
    setSortarr(array);
  };

  return (
    <div className="App">
      <div>
        <button onClick={sortByUpvotes}>Upvotes</button>
        <button onClick={sortByDate}>Dates</button>
      </div>
      <Articles articles={sortarr}/>
    </div>
  );
}

export default App;
