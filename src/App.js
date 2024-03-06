import logo from './logo.svg';
import './App.css';
import Create from './component/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './component/Read';
import Edit from './component/Edit';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Read/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/edit' element={<Edit/>} />

    </Routes>


  );
}

export default App;
