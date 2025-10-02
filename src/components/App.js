import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/items/:id" component={ItemDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
