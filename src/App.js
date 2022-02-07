import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons";
import Glogo from "./media/google2.png";
import { auth, provider } from "./firebase";


function App() {
  const [user, setUser] = useState();
  const handleLogin = () => {
      if(!user) {
        auth.signInWithPopup(provider).then((result) => {
          setUser(result.user);
        })
      }
  }
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
        <div className="app__login">
          <img src={Glogo} alt="Google Drive" />
          <button onClick = {handleLogin}>Log in to Google Drive</button>
        </div>
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
