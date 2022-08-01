import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  return (
    <>
      <Header />
      <div className="bottom">
        <Form />
        <List />
      </div>
    </>
  );
}

export default App;
