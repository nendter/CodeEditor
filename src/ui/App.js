import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Editor, EditorPath} from "./editor/Editor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={EditorPath} element={<Editor></Editor>}></Route>
          <Route path={""} element={<Navigate to={EditorPath}></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
