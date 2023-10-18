
import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, User!</h1>
          <button>Logout</button>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
