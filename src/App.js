// src/App.js
import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import FileUpload from './components/Files/FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload App</h1>
      </header>
      <Container>
        <FileUpload />
      </Container>
    </div>
  );
}

export default App;
