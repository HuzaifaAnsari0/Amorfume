import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
// import Signup from './pages/auth/Signup'


function App() {
  
  return (
     <>
    
        <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </>
   );
    
  }
   


export default App
