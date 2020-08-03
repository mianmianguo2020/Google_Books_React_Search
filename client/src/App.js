import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {

  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={SavedBooks} />
          <Route exact path="/search" component={SearchBooks} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
