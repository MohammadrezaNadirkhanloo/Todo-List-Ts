import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import { store } from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col h-screen ">
          <div className="bg-gray-700 h-1/5">
            <Header />
          </div>
          <div className="flex-1 bg-gray-600 ">
            <Body />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
