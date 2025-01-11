import { useState } from 'react'
import './App.css';
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)



  return (


    <Routes>
      <Route path="/AgentDashboard" element={<Dashboard />} />
      {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
    </Routes>


  )
}

export default App
