import React, {  useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import BooksList from './components/BookList';
import ReadingList from './components/ReadingList';
import Navbar from './components/navbar';


const App = () => {
  let [username, setUsername] = useState('');
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <hr />
        <Routes>
          <Route path="/books" element={<BooksList />} />
          <Route path="/readlist" element={<ReadingList />} />
        </Routes>
        <hr />
      </BrowserRouter>
    </div>
  );
};

export default App;





