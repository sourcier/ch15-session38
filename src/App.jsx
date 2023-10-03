import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
// import Controlled from "./components/Controlled";
// import FirstHookForm from "./components/FirstHookForm";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* <Controlled /> */}
      {/* <FirstHookForm/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
