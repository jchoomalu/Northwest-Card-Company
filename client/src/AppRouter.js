import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav'
import Signup from './pages/Signup';
export const AppRouter = () => {
    return (
      <BrowserRouter>
      <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/signup" element={<Signup />}></Route>
          </Routes>
      </BrowserRouter>
    );
  }