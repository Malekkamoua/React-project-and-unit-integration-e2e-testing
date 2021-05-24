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

// reactstrap components
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
  Input,
} from "reactstrap";
import api from "../../api";
// core components
import Header from "components/Headers/Header.js";
import { addPfe, getPfe, updatePfe } from "../../services/pfeService";

const Students = () => {
  const [nomPfe, setnomPfe] = useState("");
  const [contentPfe, setcontentPfe] = useState("");
  const [currentPfe, setCurrentPfe] = useState("");
  const [endDate, setEndDate] = useState("");
  const [systemDate, setsystemDate] = useState(new Date());
  const { token, userInformation } = JSON.parse(localStorage.getItem("user"));
  useEffect(async () => {
    const res = await getPfe(token, userInformation.pfe);
    console.log(res[0]);
    setCurrentPfe(res[0]);
    setcontentPfe(res[0].content ? res[0].content : "");
    setnomPfe(res[0].title ? res[0].title : "");
    setEndDate(res[0].year.endDate);
  }, []);
  const addPfeHandler = async () => {
    await addPfe(
      { title: nomPfe, content: contentPfe, student: userInformation._id },
      token
    );
    setnomPfe("");
    setcontentPfe("");
  };
  const updatePfeHandler = async () => {
    await updatePfe(
      token,
      {
        title: nomPfe,
        content: contentPfe,
        student: userInformation._id,
      },
      currentPfe._id
    );
  };
  console.log(new Date(endDate).getTime());
  return (
    <>
      <Header />
      {/* Page content */}
      {new Date(endDate).getTime() !== systemDate.getTime() ? (
        <Container className='mt--7' fluid>
          {/* Table */}
          <Row>
            <div className='col'>
              <Card className='shadow'>
                <CardHeader className='border-0'>
                  <h3 className='mb-0'>
                    {currentPfe ? "ModifierPfe" : "Ajouter PFE"}
                  </h3>
                </CardHeader>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
          <Col lg='13' md='13'>
            <Card className='bg-secondary shadow border-0'>
              <CardBody className='px-lg-5 py-lg-5'>
                <Form role='form'>
                  <FormGroup>
                    <InputGroup className='input-group-alternative mb-3'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='ni ni-hat-3' />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder='Nom PFE'
                        type='text'
                        value={nomPfe}
                        onChange={(e) => {
                          setnomPfe(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className='input-group-alternative mb-3'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='ni ni-email-83' />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder='Content'
                        type='textarea'
                        value={contentPfe}
                        onChange={(e) => {
                          setcontentPfe(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </FormGroup>

                  <div className='text-center'>
                    {!currentPfe && (
                      <Button
                        className='mt-4'
                        color='primary'
                        type='button'
                        onClick={async () => await addPfeHandler()}
                      >
                        Ajouter PFE
                      </Button>
                    )}
                  </div>
                  <div className='text-center'>
                    {currentPfe && (
                      <Button
                        className='mt-4'
                        color='primary'
                        type='button'
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
      ) : (
        ""
      )}
    </>
  );
};

export default Students;
