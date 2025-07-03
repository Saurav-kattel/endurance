import { Route, Routes } from "react-router-dom";
import Claims from "./components/claims/Claims";
import Claim from "./components/claim/Claim";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Claims />} path="/claims" />
        <Route element={<Claim />} path="/claims/:slug" />
      </Routes>
    </>
  );
}

export default App;
