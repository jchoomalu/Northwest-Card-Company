// src/App.js
import React from 'react';
import { AppRouter } from './AppRouter';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
    <AppRouter />
    </UserProvider>
  );
}

export default App;

