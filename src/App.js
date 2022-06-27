import "./App.css";
import { Home } from "./Components/Home";
import { Create } from "./Components/Create";
import { Deposit } from "./Components/Deposit";
import { Withdraw } from "./Components/Withdraw";
import { AllData } from "./Components/AllData";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-account" element={<Create />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="all-data" element={<AllData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
