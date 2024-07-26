import { Provider } from "react-redux";
import Counter from "./components/counter/Counter";
import GlobalStyles from "./styles/GlobalStyles";
import store from "./redux/store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
      <GlobalStyles />
    </>
  );
}

export default App;
