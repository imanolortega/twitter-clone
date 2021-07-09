import "./App.css";
import { useState } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./components/widgets/Widgets";
import Login from "./components/login/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="app">
          <Sidebar />
          <Feed user={user} />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
