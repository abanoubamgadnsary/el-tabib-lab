import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Packages from "./components/Packages/Packages";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="packages" element={<Packages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
