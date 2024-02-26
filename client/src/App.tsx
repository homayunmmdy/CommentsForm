import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Battle from "./pages/Battle/Battle";


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route  path="/" element={<Home />} />
          </Routes>
          <Routes>
          <Route path="/battle/:id" element={<Battle />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;