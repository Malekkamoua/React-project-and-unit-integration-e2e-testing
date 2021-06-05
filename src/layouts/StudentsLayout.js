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
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
const { routesStudent } = routes;
const StudentLayout = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const user = localStorage.getItem("user");
  const userObject = JSON.parse(user);
  console.log(JSON.parse(localStorage.getItem("user")));
  if (!JSON.parse(localStorage.getItem("user"))) {
    return <Redirect to='/auth/login' />;
  }
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routesStudent) => {
    return routesStudent.map((prop, key) => {
      if (prop.layout === "/student") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routesStudent.length; i++) {
      if (
        props.location.pathname.indexOf(
          routesStudent[i].layout + routesStudent[i].path
        ) !== -1
      ) {
        return routesStudent[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routesStudent}
        logo={{
          innerLink: "/student/student-profile",
          imgSrc: require("../assets/img/brand/argon-react.png").default,
          imgAlt: "...",
        }}
      />
      <div className='main-content' ref={mainContent}>
        <AdminNavbar
          {...props}
          userName={userObject.userInformation.email}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routesStudent)}
          <Redirect from='*' to='/student/student-profile' />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default StudentLayout;
