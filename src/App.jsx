import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login/Login';
import ForgetPassword from './ForgetPassword/ForgetPassword';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/Login" element={<Login />} />
  
        <Route path="/forget-password" element={<ForgetPassword/>} />

    
      </Routes>
    </Router>
  );
}

export default App;
