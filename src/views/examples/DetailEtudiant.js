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
import React, { useState } from "react";
import { connect } from "react-redux";

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
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

import { updateEtudiant } from "../../services/studentService";
import { createNoSubstitutionTemplateLiteral } from "typescript";

const DetailStudent = ({ studentprops }) => {
  console.log(studentprops);
  const [student, setstudent] = useState(studentprops);
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState(
    studentprops.name ? studentprops.name.split(" ")[1] : ""
  );
  const [firstName, setFirstName] = useState(
    studentprops.name ? studentprops.name.split(" ")[0] : ""
  );
  const [email, setEmail] = useState(studentprops.email);
  const [namePfe, setnamePfe] = useState(
    studentprops.pfe ? studentprops.pfe.title : ""
  );
  const [contentPfe, setcontentPfe] = useState(
    studentprops.pfe ? studentprops.pfe.content : ""
  );
  const [nameProf, setnameProf] = useState(
    studentprops.tutor ? studentprops.tutor.name : ""
  );
  const token = JSON.parse(localStorage.getItem("user")).token;
  const updateStudentHandler = async () => {
    const res = await updateEtudiant(
      token,
      { lastName, firstName, email, age: student.age },
      student._id
    );
    console.log(res);
    if (res.status === 200) setMessage("vous avez modifier le profil");
  };
  console.log(student);
  console.log(message);
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between"></div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div></div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {student.name}
                    <span className="font-weight-light">, {student.age}</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Tunisia
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Etudiant
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    ISAMM - Université de la Manouba
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Details Etudiant</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informations de l'étudiant
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6"></Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Prename
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Lucky"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        {/* <FormGroup>
                          <label
                            className='form-control-label'
                            htmlFor='input-first-name'
                          >
                            Sexe
                          </label>
                          <Input
                            className='form-control-alternative'
                            defaultValue='Lucky'
                            id='input-first-name'
                            placeholder='First name'
                            type='text'
                            value={student.sexe}
                          />
                        </FormGroup> */}
                      </Col>
                    </Row>
                  </div>
                  <Col
                    style={{ position: "relative", left: "70%" }}
                    className="text-right"
                    xs="4"
                  >
                    <p style={{ color: "green" }}>{message}</p>
                    <Button
                      color="primary"
                      onClick={() => {
                        updateStudentHandler();
                      }}
                      size="sm"
                    >
                      Sauvegarder
                    </Button>
                  </Col>
                </Form>
                <br></br> <br></br>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informations du projet
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Titre
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Lucky"
                            id="input-first-name"
                            placeholder="Titre pfe"
                            type="text"
                            value={namePfe}
                            disabled
                            onChange={e => setnamePfe(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Nom de l'encadrant
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Nom de l'encadrant"
                            type="text"
                            value={nameProf}
                            disabled
                            onChange={e => setnameProf(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Contenu
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Contenu du pfe"
                            id="input-first-name"
                            type="textarea"
                            rows="50"
                            value={contentPfe}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        {/* <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='input-first-name'
                        >
                          Sexe
                        </label>
                        <Input
                          className='form-control-alternative'
                          defaultValue='Lucky'
                          id='input-first-name'
                          placeholder='First name'
                          type='text'
                          value={student.sexe}
                        />
                      </FormGroup> */}
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
const mapStateToProps = state => {
  return { studentprops: state.activeStudent };
};
export default connect(mapStateToProps)(DetailStudent);
