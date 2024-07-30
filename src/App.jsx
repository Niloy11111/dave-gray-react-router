import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";

import { DataProvider } from "./context/DataContex";
function App() {
  return (
    <div className="p-6">
      <DataProvider>
        <header className="bg-cyan-500 py-3 ">
          <h1 className="text-2xl font-semibold ml-5">REactJS</h1>
        </header>

        <Nav />

        <Outlet />
      </DataProvider>
    </div>
  );
}

export default App;
