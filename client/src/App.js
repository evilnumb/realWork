import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import { useRoutes } from './routes';
import { useAuth } from './hook/auth.hook';
import { AuthContext } from './context/AuthContext';
import { NavBar } from './components/Navbar';

function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        {isAuthenticated && <NavBar/>}
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
