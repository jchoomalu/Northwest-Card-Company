import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AddCards from './pages/Admin/AddCards/AddCards';

export const AppRouter = () => {
    return (
      <BrowserRouter>
      <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/signup" element={<Signup />}></Route>
            <Route path="/users/signin" element={<Signin />}></Route>
            <Route path="/admin/addcards" element={<AddCards />}></Route>
          </Routes>
      </BrowserRouter>
    );
  }