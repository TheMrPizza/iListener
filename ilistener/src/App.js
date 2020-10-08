import React from 'react';
import HomePage from './pages/homePage'
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { mainTheme } from './styling/themes';

function App() {
  return (
    <ThemeProvider theme={mainTheme} >
      <div className="App">
        <HomePage/>
      </div>
    </ThemeProvider>
  );
}

export default App;
