import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
function App() {
  return (
    <div className="wrapper-content">
      <Header />
      {/* <HomePage /> */}
      <Login />
      <div className="spacing"></div>
      <Footer />
    </div>
  );
}

export default App;
