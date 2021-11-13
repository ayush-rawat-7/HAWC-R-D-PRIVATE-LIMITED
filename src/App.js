import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from './Components/LandingPage';
import { Signup } from './Components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
