import { Routes , Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Messaging from "./Pages/Messaging/Messaging";
import Jobs from "./Pages/Jobs/Jobs";
import Nework from "./Pages/Nework/Nework";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mynetwork" element={<Nework/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/messaging" element={<Messaging/>} />
      </Routes>
    </div>
  );
}

export default App;
