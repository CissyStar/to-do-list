import "./App.css";
import ToDoList from "./pages/TodoList";
// import Playlist from "./pages/Playlist";
// import data from "./data";
import { useState } from "react";

function App() {
  // practice for playlist component
  // const [playList, setPlayList] = useState(data);
  
  return (
    <div className="App">
      <ToDoList /> 
      {/* <Playlist playList={playList} /> */}
    </div>
  );
}

export default App;
