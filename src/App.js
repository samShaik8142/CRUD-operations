import './App.css';
import Create from './components/CRUD/Create'
// import Read from './components/CRUD/Read';
import Update from './components/CRUD/Update'
import Delete from './components/CRUD/Delete'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
     <Routes>
     <Route path='/*' element={<Create />} />
     <Route path='/create' element={<Create/>} />
        <Route path='/update' element={<Update />} />
        <Route path='/delete' element={<Delete />}/>
        </Routes>
   </Router>
  );
}

export default App;
