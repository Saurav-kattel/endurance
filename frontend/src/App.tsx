import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<App />} path="/claims" />
      </Routes>
    </>
  );
}

export default App;
