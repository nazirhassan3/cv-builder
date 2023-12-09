import { Route, Link, Routes } from "react-router-dom";

import Resume from "./components/Resume/Resume";
import ViewResume from "./pages/ViewResume/ViewResume";
import Home from "./pages/Home/Home";
import ViewAllResume from "./pages/ViewAllResume/ViewAllResume";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Resume />} />
        <Route path="/viewall" element={<ViewAllResume />} />
      </Route>
      <Route path="/view/:id" element={<ViewResume />} />
    </Routes>
  );
}

export default App;
