import NavBar from "./copponents/NavBar";
import LeftSideBar from './copponents/LeftSideBar'
import CurrentOffers from "./pages/CurrentOffers";
import PocketBook from "./pages/PocketBook";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<NavBar />} >
            <Route element={<LeftSideBar />} >

              <Route path="/" element={<CurrentOffers />} />
              <Route path="/PocketBook" element={<PocketBook />} />
            </Route>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
