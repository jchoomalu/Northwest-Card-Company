import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav'

export const AppRouter = () => {
    return (
      <BrowserRouter>
      <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    );
  }