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
import DetailPfe from "views/examples/DetailPfe";
import AddEtudiant from "views/examples/AddEtudiant";
import ListEtudiantAdmin from "views/examples/ListEtudiantAdmin";
import DetailEtudiant from "views/examples/DetailEtudiant";
//studentRoutes
var routesOject = {
  routesTeacher: [
    {
      path: "/teacher-profile",
      name: "My Profile",
      icon: "ni ni-single-02 text-yellow",
      component: Profile,
      layout: "/teacher",
    },
    {
      path: "/listpfe",
      name: "ListPFE",
      icon: "ni ni-single-02 text-yellow",
      component: Teachers,
      layout: "/teacher",
    },
    {
      path: "/detailpfe",
      component: DetailPfe,
      layout: "/teacher",
    },
  ],
  routesStudent: [
    {
      path: "/student-profile",
      name: "My Profile",
      icon: "ni ni-single-02 text-yellow",
      component: Profile,
      layout: "/student",
    },
    {
      path: "/listpfe",
      name: "Ajouter Pfe",
      icon: "ni ni-single-02 text-yellow",
      component: Students,
      layout: "/student",
    },
  ],
  routesAdmin: [
    //adminroutes
    {
      path: "/user-profile",
      name: "My Profile",
      icon: "ni ni-single-02 text-yellow",
      component: Students,
      layout: "/admin",
    },
    {
      path: "/detailEtudiant",
      component: DetailEtudiant,
      layout: "/admin",
    },
    {
      path: "/addEtudiant",
      name: "Ajouter Etudiant",
      icon: "ni ni-single-02 text-yellow",
      component: AddEtudiant,
      layout: "/admin",
    },
    {
      path: "/teachers",
      name: "teachers",
      icon: "ni ni-tv-2 text-primary",
      component: Teachers,
      layout: "/admin",
    },
    {
      path: "/projects",
      name: "Projects",
      icon: "ni ni-pin-3 text-orange",
      component: Projects,
      layout: "/admin",
    },
    {
      path: "/tables",
      name: "Form",
      icon: "ni ni-bullet-list-67 text-red",
      component: Tables,
      layout: "/admin",
    },
    {
      path: "/students",
      name: "List des Etudiants",
      icon: "ni ni-bullet-list-67 text-red",
      component: ListEtudiantAdmin,
      layout: "/admin",
    },
  ],
  routesAuth: [
    {
      path: "/login",
      name: "Login",
      icon: "ni ni-key-25 text-info",
      component: Login,
      layout: "/auth",
    },

    {
      path: "/register",
      name: "Register",
      icon: "ni ni-circle-08 text-pink",
      component: Register,
      layout: "/auth",
    },
  ],
};
export default routesOject;
