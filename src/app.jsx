import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Settings } from "./pages/settings";
import {useState} from "react";

const App = () => {
  const [url, setUrl] = useState("");

  return (
      <div className="content">
          <input value={url} onChange={e => setUrl(e.target.value)} />
          {url === "/home" && <Home /> }
          {url === "/login" && <Login /> }
          {url === "/settings" && <Settings /> }
      </div>
  );
};

export default App;
