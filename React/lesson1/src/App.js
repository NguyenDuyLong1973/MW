// import logo from './logo.svg';
import './App.css';
import IntroPage from "./containners/IntroPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './containners/Login';
import Center from './containners/Center';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroPage}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/center" component={Center}></Route>
      </Switch>
    </Router>
  );
}

export default App;
