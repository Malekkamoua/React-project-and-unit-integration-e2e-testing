import "./App.css";
import Login from "./pages/form-login";
import Register from "./pages/form-register";
import ForgetPassword from "./pages/forget-password";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/side-bar";
import Profile from "./pages/profile";
import ListStudents from "./pages/list_students";
import ListTeachers from "./pages/list_teachers";
import ListPfe from "./pages/lists_pfe";
import CreateAccount from "./pages/create_account";
import DetailsPfe from "./pages/details_pfe";

function App() {
  return (
    <Router>
      <SideBar />

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/create">
          <CreateAccount />
        </Route>

        <Route path="/forget">
          <ForgetPassword />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/all/students">
          <ListStudents />
        </Route>

        <Route path="/all/teachers">
          <ListTeachers />
        </Route>

        <Route path="/all/pfe">
          <ListPfe />
        </Route>

        <Route path="/create/pfe">
          <CreateAccount />
        </Route>

        <Route path="/details/pfe">
          <DetailsPfe />
        </Route>

        <Route>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
