import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import MyProjects from './routes/MyProjects'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/MyProjects" element={<MyProjects/>} />
    </Routes>
  </BrowserRouter>
);