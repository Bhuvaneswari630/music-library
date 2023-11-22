import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Gallery from './Components/Gallery';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Gallery />
    </div>
  );
}

export default App;
