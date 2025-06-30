import { Route, Routes } from "react-router-dom";
import Claims from "./components/claims/Claims";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Claims />} path="/claims" />
      </Routes>
    </>
  );
}

export default App;
