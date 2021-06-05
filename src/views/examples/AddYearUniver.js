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
  let token;
  if (localStorage.getItem("user"))
    token = JSON.parse(localStorage.getItem("user")).token;
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
      {/* Page content */}
      <Container className='mt--7'>
        {/* Table */}
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <h3 className='mb-0'>Ajouter une année universitaire</h3>
              </CardHeader>
              <close>
                <Card className='bg-secondary shadow border-0'>
                  <CardBody className='px-lg-5 py-lg-5'>
                    <Form role='form'>
                      <CustomInput
                        placeholder={"titre année"}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <CustomInput
                        placeholder={"Date Début"}
                        type='date'
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                      <CustomInput
                        placeholder={"Date Fin"}
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
              </close>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  );
};

export default RegisterUser;
