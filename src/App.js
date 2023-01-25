import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<h2 className='text-red text-4xl'>Home</h2>}/>
        <Route path='*' element={<h2>Page not found!</h2>}/>
      </Routes>
    </div>
  );
}

export default App;
