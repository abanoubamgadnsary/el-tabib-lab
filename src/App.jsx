import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Packages from "./components/Packages/Packages";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/packages" element={<Packages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
