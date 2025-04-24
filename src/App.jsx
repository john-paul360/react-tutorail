import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NoFound from "./Pages/NoFound";
import Login from "./Pages/Login"
import TimeLine from "./Pages/TimeLine";
import SingleTweet from "./Pages/SingleTweet";
import DashBoardLayout from "./Pages/DashBoardLayout";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/homepage" element={ <Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutus" element={<Navigate to="/" />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/timeline/:id" element={<SingleTweet />} />
          <Route path="/DashBoard" element={<DashBoardLayout />} >
          {/* children will be here */}
          <Route index element={<h1>Home DashBoard</h1>} />
          <Route path="trash" element={<h1>Trash Side</h1>} />
          <Route path="spam" element={<h1>Spam Side</h1>} />
          </Route>

          <Route path="*" element={<NoFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
