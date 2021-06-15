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
import ListPfeEncadrerTeachers from "views/examples/ListPfeEncadrerTeachers";
import Profile from "views/examples/Profile.js";
import Projects from "views/examples/Projects.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Students from "views/examples/Students.js";
import DetailPfe from "views/examples/DetailPfe";
import AddEtudiant from "views/examples/AddStudent";
import ListEtudiantAdmin from "views/examples/ListEtudiantAdmin";
import DetailEtudiant from "views/examples/DetailEtudiant";
import ListTeacherAdmin from "views/examples/ListTeacherAdmin";
import DetailTeacher from "views/examples/DetailTeacher";
import AddTeacher from "views/examples/AddTeacher";
import ListPfeAdmin from "views/examples/ListPfeAdmin";
import ListPfeTeacher from "views/examples/ListPfeTeacher";
import AddYearUniver from "views/examples/AddYearUniver";
import ListYearAdmin from "views/examples/ListYearAdmin";
import DetailYear from "views/examples/DetailYear";
import EtatPfeEtudiant from "views/examples/EtatPfeEtudiant";
import ChangePasswordUser from "views/examples/ChangePasswordUser";
//studentRoutes
var routesObject = {
  routesTeacher: [
    {
      path: "/teacher-profile",
      name: "My Profile",
      icon: "ni ni-single-02 text-blue",
      component: Profile,
      layout: "/teacher",
    },
    {
      path: "/listpfe",
      name: "ListPFE",
      icon: "ni ni-single-copy-04 text-blue",
      component: ListPfeTeacher,
      layout: "/teacher",
    },
    {
      path: "/pfeEncadrer",
      name: "Votre encadrement",
      icon: "ni ni-collection text-blue",
      component: ListPfeEncadrerTeachers,
      layout: "/teacher",
    },
    {
      path: "/detailpfe",
      component: DetailPfe,
      layout: "/teacher",
    },
    {
      path: "/changePassword",
      name: "Changer mon mot de passe",
      icon: "ni ni-settings text-blue",
      component: ChangePasswordUser,
      layout: "/teacher",
    },
  ],
  routesStudent: [
    {
      path: "/student-profile",
      name: "My Profile",
      icon: "ni ni-single-02 text-blue",
      component: Profile,
      layout: "/student",
    },
    {
      path: "/etatpfe",
      name: "Etat de mon PFE",
      icon: "ni ni-badge text-blue",
      component: EtatPfeEtudiant,
      layout: "/student",
    },
    {
      path: "/listpfe",
      name: "Ajouter Pfe",
      icon: "ni ni-cloud-upload-96 text-blue",
      component: Students,
      layout: "/student",
    },
    {
      path: "/changePassword",
      name: "Changer mon mot de passe",
      icon: "ni ni-settings text-blue",
      component: ChangePasswordUser,
      layout: "/student",
    },
  ],
  routesAdmin: [
    //adminroutes
    {
      path: "/detailYear",
      component: DetailYear,
      layout: "/admin",
    },
    {
      path: "/detailpfe",
      component: DetailPfe,
      layout: "/admin",
    },
    {
      path: "/detailEtudiant",
      component: DetailEtudiant,
      layout: "/admin",
    },
    {
      path: "/detailTeacher",
      component: DetailTeacher,
      layout: "/admin",
    },
    {
      path: "/addEtudiant",
      name: "Ajouter Etudiant",
      icon: "ni ni-single-02 text-blue",
      component: AddEtudiant,
      layout: "/admin",
    },
    {
      path: "/addAnneeUniver",
      name: "Créer Année Universitaire",
      icon: "ni ni-hat-3 text-blue",
      component: AddYearUniver,
      layout: "/admin",
    },
    {
      path: "/addTeacher",
      name: "Ajouter Professeur",
      icon: "ni ni-single-02 text-blue",
      component: AddTeacher,
      layout: "/admin",
    },
    {
      path: "/students",
      name: "Liste des Etudiants",
      icon: "ni ni-bullet-list-67 text-blue",
      component: ListEtudiantAdmin,
      layout: "/admin",
    },
    {
      path: "/teachers",
      name: "Liste des professeurs",
      icon: "ni ni-bullet-list-67 text-blue",
      component: ListTeacherAdmin,
      layout: "/admin",
    },
    {
      path: "/listPfe",
      name: "Liste Des Pfe",
      icon: "ni ni-bullet-list-67 text-blue",
      component: ListPfeAdmin,
      layout: "/admin",
    },
    {
      path: "/listYear",
      name: "Liste des année universitaire",
      icon: "ni ni-bullet-list-67 text-blue",
      component: ListYearAdmin,
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
export default routesObject;
