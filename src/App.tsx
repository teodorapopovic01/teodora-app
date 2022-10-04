import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./core/Routes";

function App() {
  return useRoutes(routes);
}

export default App;
