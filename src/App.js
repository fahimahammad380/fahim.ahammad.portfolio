import { RouterProvider } from "react-router-dom";
import "./App.css";
import useDarkMode from "./Hooks/useDarkMode";
import router from "./routes/routes";

function App() {
  useDarkMode();
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
