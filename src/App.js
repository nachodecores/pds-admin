import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Panel from "./components/Panel/Panel";
import Remate from "./components/Remate/Remate";
import Usuario from "./components/Usuario/Usuario";
import Lote from "./components/Lote/Lote";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/" Component={Panel}>
          <Route path="remate" Component={Remate} />
          <Route path="usuario" Component={Usuario} />
          <Route path="lote" Component={Lote} />
        </Route>
      </Routes>
    </>
  );
}
