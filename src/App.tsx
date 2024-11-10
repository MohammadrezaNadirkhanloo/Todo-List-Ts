import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="bg-gray-700 h-1/5">
          <Header />
        </div>
        <div className="flex-1 bg-gray-600 ">
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
