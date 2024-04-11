import React from 'react';
import WelcomePage from './welcome'; // Import the WelcomePage component
import HomePage from './home';
import LoginPage from './login';

function App() {
  return (
    <div>
      <LoginPage /> {/* Render the WelcomePage component */}
    </div>
  );
}

export default App;
