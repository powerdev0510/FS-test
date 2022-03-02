import { BrowserRouter, Route } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Route>
        <AppRoutes />
      </Route>
    </BrowserRouter>
  );
}

export default App;
