import {useState} from 'react'
import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'


function App() {
  const [user, setUser] = useState({
    displayName: "Alfred Anyan",
    email: "alfred.anyan@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoUrl: "./media/alfred.png"
    // photoUrl: "https://drive.google.com/file/d/1rM4uObpyCO7Hj5nu0ICihLe3diPiOPvd/view?usp=sharing"
  })
  //authentication


  return (
    <div className="App">
      <Header userPhoto={user.photoUrl} />
      <Sidebar />
      {/* <!-- auth true:
      - sidebar
      - filesView
      - sideIcons -->

      


      <!-- no auth - log in --> */}
    </div>
  );
}

export default App;
