import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Preview from "./Components/Preview";

function App() {
  return (
    <>
      <Router>
        
        <Navbar /> {/* If we want to use Link then put inside Router*/}
        
        <Switch>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/preview/:id">
            <Preview />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
