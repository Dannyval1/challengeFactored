import "./App.css";
import { Provider } from "./context/context";
import Router from "./router/router";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
