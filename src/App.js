import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Panel from "./components/Panel/Panel";
import Usuario from "./components/Usuario/Usuario";
import Lote from "./components/Lote/Lote";
import Dashboard from "./components/Dashboard/Dashboard";
import AddHerd from "./components/Forms/AddHerd";
import EditHerd from "./components/Lote/EditHerd";

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/" Component={Panel}>
          <Route path="/" Component={Dashboard} />
          <Route path="/addherd" Component={AddHerd}></Route>
          <Route path="/edithead" Component={EditHerd}></Route>
          <Route path="/remate" Component={Dashboard} />
          <Route path="usuario" Component={Usuario} />
          <Route path="lote" Component={Lote} />
        </Route>
      </Routes>
    </>
  );
}
