import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import HCGIMTrackerPage from '../HCGIMTrackerPage/HCGIMTrackerPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import Header from '../../components/Header/Header'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <Header user={user} setUser={setUser} />
      <div>
        <h1>Hi, I'm Serra!</h1>
      </div>
      {/* { user ? 
        <>
          
          <Routes>
            <Route path="/hcgim-tracker" element={<HCGIMTrackerPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      } */}
                <Routes>
            <Route path="/hcgim-tracker" element={<HCGIMTrackerPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
    </main>
  );
}


