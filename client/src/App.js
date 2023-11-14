// src/App.js
import React from 'react';
import { AppRouter } from './AppRouter';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './context/userContext';
import "./App.css"
function App() {
  return (
    <UserProvider>
    <AppRouter />
    </UserProvider>
  );
}

export default App;

