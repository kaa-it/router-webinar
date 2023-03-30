import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Settings } from "./pages/settings";
import {Link, NavLink, Route, Routes} from "react-router-dom";
import Card from "./pages/card";

const App = () => {
  return (
      <div className="content">
          <NavLink className={({isActive}) =>  isActive ? "active" : ""} to="/">Home</NavLink>
          <NavLink className={({isActive}) =>  isActive ? "active" : ""} to="/login">Login</NavLink>
          <NavLink className={({isActive}) =>  isActive ? "active" : ""} to="/settings">Settings</NavLink>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/card/:id" element={<Card />} />
              <Route path="*" element={<h1>404</h1>}/>
          </Routes>
      </div>
  );
};

export default App;
