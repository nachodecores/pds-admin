import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Panel from "./components/Panel/Panel";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/" Component={Panel}></Route>
      </Routes>
    </>
  );
}
