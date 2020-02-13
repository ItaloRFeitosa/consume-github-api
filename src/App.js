import React from 'react';
import Header from "./components/Header"
import Search from "./components/Search"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapme">
        <Search />
      </div>
    </div>
  );
}

export default App;
