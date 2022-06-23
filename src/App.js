import "./App.css";
import { Home } from "./Components/Home";
import { Create } from "./Components/Create";
import { Navbar } from "./Components/Navbar";
import { PrivateRoute } from "./Components/routing/private/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-account" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
