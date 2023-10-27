import "./App.css";
import { Navbar } from "./components";
import { Footer } from "./sections";
import { Home } from "./pages";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      {Home()}
      <Footer></Footer>
    </div>
  );
}

export default App;
