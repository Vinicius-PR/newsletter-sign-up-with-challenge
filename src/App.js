import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('')

  function onSetEmail(emailInput) {
    setEmail(emailInput)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Home
            email={email}
            onSetEmail={onSetEmail} />
        } />
        <Route path='/success' element={<Success email={email} onSetEmail={onSetEmail} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
