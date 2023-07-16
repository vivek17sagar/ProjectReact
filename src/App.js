import { Route, Routes } from 'react-router';
import './App.css';
import Loginhome from './Components/Loginhome';
import Mainpage from './Components/Mainpage';
import Memories from './Components/Memories';


function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Loginhome/>}></Route>
          <Route path="/home" element={<Mainpage/>}></Route>
          <Route path="/home/memories" element={<Memories/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
