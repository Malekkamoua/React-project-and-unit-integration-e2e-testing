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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [endDate, setEndDate] = useState();
  let token;
  if (localStorage.getItem("user"))
    token = JSON.parse(localStorage.getItem("user")).token;
  const ajouterEtudiant = async () => {
    if (new Date(startDate).getTime() >= new Date(endDate).getTime()) {
      setMessage("La date début doit être inferieur à la date fin");
      return null;
    }

    setLoading(true);

    const res = await addYear({ title, startDate, endDate }, token);
    setTitle("");
    setStartDate("");
    setEndDate("");
    setLoading(false);

    console.log(res);
  };
  console.log(startDate);
  console.log(endDate);
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
                      <p style={{ color: "red" }}>{message}</p>
                      <div className='text-center'>
                        <Button
                          disabled={loading}
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
