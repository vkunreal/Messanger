import Routes from "./components/Routes";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
