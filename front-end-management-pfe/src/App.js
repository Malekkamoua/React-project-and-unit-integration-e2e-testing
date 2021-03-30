import "./App.css";
import Login from "./pages/form-login";
import Register from "./pages/form-register";
import ForgetPassword from "./pages/forget-password";
import ResetPassword from "./pages/reset-password";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideBar from "./components/side-bar";
function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/forget'>
          <ForgetPassword />
        </Route>
        <Route>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
