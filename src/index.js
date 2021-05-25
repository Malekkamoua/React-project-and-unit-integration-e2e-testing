import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import StudentLayout from "layouts/StudentsLayout";
import TeacherLayout from "layouts/TeacherLayout";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
let connetedRole;
if (localStorage.getItem("user"))
  connetedRole = JSON.parse(localStorage.getItem("user")).userInformation.role;

// console.log(connecteduser.userInformation.role);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Route path="/student" render={props => <StudentLayout {...props} />} />
        <Route path="/teacher" render={props => <TeacherLayout {...props} />} />

        {connetedRole === "student" && (
          <Redirect from="*" to="/student/student-profile" />
        )}
        {connetedRole === "teacher" && (
          <Redirect from="/" to="/teacher/teacher-profile" />
        )}
        <Redirect from="*" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
