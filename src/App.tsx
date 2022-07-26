import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import Register from './pages/Register';
import Login from './pages/Login';
import History from './pages/History';
import Header from './layouts/Header';
import Calculation from './pages/Calculation';
import Counter from './components/SampleRedux';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/history/`} element={<History />} />
          <Route path={`/calculation/`} element={<Calculation />} />{' '}
          <Route path={`/dashBoard/`} element={<DashBoard />} />
          <Route path={`/counter/`} element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
