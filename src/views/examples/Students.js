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
import React, { useState, useEffect } from "react";

// Reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Button,
  Col,
  Form,
  FormGroup,
  InputGroup,
  CardBody,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import api from "../../api";
import ClipLoader from "react-spinners/ClipLoader";
// Core components
import Header from "components/Headers/Header.js";
import { addPfe, getPfe, updatePfe } from "../../services/pfeService";
import { getEtudiant } from "../../services/studentService";

const Students = () => {
  const [loading, setLoading] = useState(false);
  const [nomPfe, setnomPfe] = useState("");
  const [contentPfe, setcontentPfe] = useState("");
  const [currentPfe, setCurrentPfe] = useState("");
  const [endDate, setEndDate] = useState("");
  const systemDate = new Date();
  const [messageData, setMessageData] = useState();
  const { token, userInformation } = JSON.parse(localStorage.getItem("user"));

  console.log(token);
  useEffect(async () => {
    if (userInformation.pfe !== undefined) {
      console.log("i m here ------------------");
      setLoading(true);
      const res = await getPfe(token, userInformation.pfe);

      console.log(res[0]);
      setCurrentPfe(res[0]);
      setcontentPfe(res[0].content ? res[0].content : "");
      setnomPfe(res[0].title ? res[0].title : "");
      setEndDate(res[0].year.endDate);
      setLoading(false);
    }
  }, []);
  useEffect(async () => {
    if (userInformation.pfe !== undefined) {
      console.log("i m here ------------------");
      setLoading(true);
      const res = await getPfe(token, userInformation.pfe);
      console.log(res[0]);
      setCurrentPfe(res[0]);
      setcontentPfe(res[0].content ? res[0].content : "");
      setnomPfe(res[0].title ? res[0].title : "");
      setEndDate(res[0].year.endDate);
      setLoading(false);
    }
  }, []);
  const addPfeHandler = async () => {
    const res = await addPfe(
      { title: nomPfe, content: contentPfe, student: userInformation._id },
      token
    );
    console.log(res);
    setCurrentPfe(res);
    const resetUser = JSON.stringify({
      ...JSON.parse(localStorage.getItem("user")),
      userInformation: {
        ...JSON.parse(localStorage.getItem("user")).userInformation,
        pfe: res._id
      }
    });
    localStorage.removeItem("user");
    localStorage.setItem("user", resetUser);
    setcontentPfe(res.content ? res.content : "");
    setnomPfe(res.title ? res.title : "");
    setEndDate(res.year.endDate);
  };
  const updatePfeHandler = async () => {
    const res = await updatePfe(
      token,
      {
        title: nomPfe,
        content: contentPfe,
        student: userInformation._id
      },
      currentPfe._id
    );
    setMessageData(
      res.status == 200
        ? { message: "Your pfe has been updated", color: "green" }
        : { message: "Something went wrong", color: "red" }
    );
  };

  return (
    <>
      <Header />
      {/* Page content */}
      {new Date(endDate).getTime() !== systemDate.getTime() ? (
        loading ? (
          <ClipLoader loading={loading} />
        ) : (
          <Container className="mt--7" fluid>
            <Col lg="13" md="13">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Détails de mon pfe</h3>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <Form role="form">
                    <FormGroup>
                      Titre du projet
                      <br></br> <br></br>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Titre du projet"
                          type="text"
                          value={nomPfe}
                          onChange={e => {
                            setnomPfe(e.target.value);
                          }}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      Contenu
                      <br></br> <br></br>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Contenu"
                          type="textarea"
                          rows="25"
                          value={contentPfe}
                          onChange={e => {
                            setcontentPfe(e.target.value);
                          }}
                        />
                      </InputGroup>
                    </FormGroup>
                    {messageData && (
                      <p style={{ color: messageData.color }}>
                        {messageData.message}
                      </p>
                    )}
                    <div className="text-center">
                      {!currentPfe && (
                        <Button
                          style={{ position: "relative", left: "42%" }}
                          className="mt-4"
                          color="primary"
                          type="button"
                          onClick={async () => await addPfeHandler()}
                        >
                          Ajouter PFE
                        </Button>
                      )}
                    </div>
                    <div className="text-center">
                      {currentPfe && (
                        <Button
                          style={{ position: "relative", left: "42%" }}
                          className="mt-4"
                          color="primary"
                          type="button"
                          onClick={async () => await updatePfeHandler()}
                        >
                          Modifier PFE
                        </Button>
                      )}
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Container>
        )
      ) : (
        ""
      )}
    </>
  );
};

export default Students;
