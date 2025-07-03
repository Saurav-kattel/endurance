import { Route, Routes } from "react-router-dom";
import Claims from "./components/claims/Claims";
import Claim from "./components/claim/Claim";
import Home from "./components/home/Home";
import PageNotFound from "./components/util/PageNotFound";
import Message from "./components/message/Message";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Claims />} path="/claims" />
        <Route element={<Claim />} path="/claims/:slug" />
        <Route element={<Message />} path="/messages" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
