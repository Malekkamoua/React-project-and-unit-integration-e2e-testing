import React, { PureComponent, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  Row,
  InputGroupAddon,
  InputGroupText,
  Button,
  Form,
} from "reactstrap";

import CustomInput from "components/CustomInput";
import Header from "components/Headers/Header.js";
import { addYear } from "../../services/univ_yearService";
const RegisterUser = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const token = JSON.parse(localStorage.getItem("user")).token;
  const ajouterEtudiant = async () => {
    const res = await addYear({ title, startDate, endDate }, token);
    // setNom("");
    // setPrenom("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
    // setAge("");
    console.log(res);
  };

  return (
    <>
      <Header />
      <Container className='mt--10'>
        {/* Table */}
        <Row lg='7' md='7' style={{ width: 500, marginLeft: 300 }}>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <h3 className='mb-0'>Créer Année Universitaire</h3>
              </CardHeader>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
        <Col style={{ marginLeft: 300, width: 500 }} lg='7' md='7'>
          <Card className='bg-secondary shadow border-0'>
            <CardBody className='px-lg-5 py-lg-5'>
              <Form role='form'>
                <CustomInput
                  placeholder={"Nom"}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <CustomInput
                  placeholder={"Prenom"}
                  type='date'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <CustomInput
                  placeholder={"Age"}
                  type='date'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />

                <div className='text-center'>
                  <Button
                    className='mt-4'
                    color='primary'
                    type='button'
                    onClick={() => {
                      ajouterEtudiant();
                    }}
                  >
                    Créer
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default RegisterUser;
