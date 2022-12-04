import './App.scss';
import Projects from './components/Projects/Projects';
import Tasks from './components/Tasks/Tasks';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Projects/>}/>
        <Route path='/project/:projectId' element={<Tasks/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
