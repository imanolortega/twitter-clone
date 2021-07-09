import "./App.css";
import { useState } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./components/widgets/Widgets";
import Login from "./components/login/Login";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  return (
    <div>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="app">
          <Sidebar signOut={signOut} />
          <Feed user={user} />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
