import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";  //for redirecting from one page to another
import Create from "./components/Create"
import ReadAll from "./components/ReadAll"
import Update from "./components/Update"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/all" element={<ReadAll />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

//ctrl+H = for find and replace
