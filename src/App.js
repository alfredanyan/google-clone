import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons";

function App() {
  const [user, setUser] = useState();
  //authentication

  return (
    <div className="App">
      {user ? (
        <>
          <Header userPhoto={user.photoUrl} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className="app__main"></div>
      )}
      {/* <!-- auth true:
      - sidebar
      - filesView
      - sideIcons -->

      


      <!-- no auth - log in --> */}
    </div>
  );
}

export default App;
