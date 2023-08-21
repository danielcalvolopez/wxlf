import { RouterProvider } from "react-router-dom";
import router from "./utils/router";
import "./app.scss";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
