import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Home from "./Components/Main/Home/Home";
import FoodDetails from "./Components/Main/Food/FoodDetails/FoodDetails";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/foods" component={Main}></Route>
          <Route path="/food/:foodId" component={FoodDetails}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
