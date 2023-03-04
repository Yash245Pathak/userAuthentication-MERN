import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/welcome' element={<Welcome />} exact />
            <Route path='/login' element={<Login />} exact />
            <Route path='/register' element={<Register />} exact />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
