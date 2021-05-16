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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user")).userInformation;
  console.log(user);
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className='mt--7' fluid>
        <Row>
          <Col className='order-xl-2 mb-5 mb-xl-0' xl='4'>
            <Card className='card-profile shadow'>
              <Row className='justify-content-center'>
                <Col className='order-lg-2' lg='3'>
                  <div className='card-profile-image'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='rounded-circle'
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className='text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4'>
                <div className='d-flex justify-content-between'></div>
              </CardHeader>
              <CardBody className='pt-0 pt-md-4'>
                <Row>
                  <div className='col'>
                    <div className='card-profile-stats d-flex justify-content-center mt-md-5'>
                      <div></div>
                    </div>
                  </div>
                </Row>
                <div className='text-center'>
                  <h3>
                    {user.name}
                    <span className='font-weight-light'>, 27</span>
                  </h3>
                  <div className='h5 font-weight-300'>
                    <i className='ni location_pin mr-2' />
                    Tunisie,Tunis
                  </div>
                  <div className='h5 mt-4'>
                    <i className='ni business_briefcase-24 mr-2' />
                    {user.role === "teacher"
                      ? "Professeur"
                      : user.role === "student"
                      ? "Etudiant"
                      : ""}
                  </div>
                  <div>
                    <i className='ni education_hat mr-2' />
                    Université de Manouba
                  </div>
                  <hr className='my-4' />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
