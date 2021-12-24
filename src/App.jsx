// NPM Package
import { BrowserRouter as Router } from "react-router-dom";

// Local files
import Header from "./components/Header";
import Home from "./page/Home";
import Footer from "./components/Footer";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
      </Router>
      <Footer />
    </div>
  );
}
