import About from "./pages/About";
import Careers from "./pages/Careers";
import Gala from "./pages/Gala";
import Games from "./pages/Games";
import Nodes from "./pages/Nodes";
import Store from "./pages/Store";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<About />} />
        <Route
          path='/store'
          element={<Store />}
        />
        <Route
          path='/games'
          element={<Games />}
        />
        <Route
          path='/nodes'
          element={<Nodes />}
        />
        <Route path='/gala' element={<Gala />} />
        <Route
          path='/careers'
          element={<Careers />}
        />
      </Routes>
    </div>
  );
}

export default App;
