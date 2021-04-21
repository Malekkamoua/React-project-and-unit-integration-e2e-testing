/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Teachers from "views/examples/Teachers.js";
import Profile from "views/examples/Profile.js";
import Projects from "views/examples/Projects.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Students from "views/examples/Students.js";

var routes = [
  {
    path: "/user-profile",
    name: "My Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/teachers",
    name: "teachers",
    icon: "ni ni-tv-2 text-primary",
    component: Teachers,
    layout: "/admin"
  },
  {
    path: "/students",
    name: "Students",
    icon: "ni ni-planet text-blue",
    component: Students,
    layout: "/admin"
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "ni ni-pin-3 text-orange",
    component: Projects,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Form",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
