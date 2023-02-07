import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Analysis from './pages/Home/Analysis';
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';

function App() {
  const {isOpen} = useSelector(store => store.modal)
  return (
    <div className="flex w-screen relative">
      <Sidebar />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/analysis' element={<Analysis />}/>
          <Route path='*' element={<h2>Page not found!</h2>}/>
        </Routes>
      </Main>
      {
        isOpen && <Modal />
      }
    </div>
  );
}

export default App;
