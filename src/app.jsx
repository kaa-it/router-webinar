import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Settings } from "./pages/settings";
import React, {useContext, useEffect, useState} from "react";
import {ownHistory} from "./history";

const RouterContext = React.createContext({currentPath: window.location.pathname});

function Router({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        return ownHistory.listen(location => {
            setCurrentPath(location);
        });
    }, []);

    return (
      <RouterContext.Provider value={{currentPath}}>
          {children}
      </RouterContext.Provider>
    );
}

function Route({path, element}) {
    const { currentPath } = useContext(RouterContext);
    return currentPath === path && element;
}

function Link({href, children}) {
    function handleClick(e) {
        e.preventDefault();
        ownHistory.pushState(href);
    }

    return <a onClick={handleClick} href={href}>{children}</a>;
}

const App = () => {
  return (
      <div className="content">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/settings">Settings</Link>

          <Router>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} />
          </Router>
      </div>
  );
};

export default App;
