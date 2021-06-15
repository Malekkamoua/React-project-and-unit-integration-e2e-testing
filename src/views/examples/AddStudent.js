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
import { addStudent } from "../../services/authService";
import { validateEmail } from "../../utils/validateEmail";

const RegisterUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("user")).token;

  const addStudentHandler = async () => {
    if (password !== confirmPassword) {
      setMessage({ msg: "wrong password confirmation", type: "error" });
      return null;
    }
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !age ||
      !confirmPassword
    ) {
      setMessage({ msg: "vous devez remplir tous les champs", type: "error" });
      return null;
    }
    if (validateEmail(email) === false) {
      setMessage({ msg: "verifier votre email", type: "error" });
      return null;
    }

    setLoading(true);
    const res = await addStudent(
      { firstName, lastName, age, email, password },
      token
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAge("");
    setMessage({ msg: "Etudiant ajouté", type: "success" });
    setLoading(false);
    console.log(res);
  };

  return (
    <>
      <Header />
      <Container className='mt--7'>
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <h3 className='mb-0'>Ajouter un étudiant</h3>
              </CardHeader>
              <Col>
                <Card className='bg-secondary shadow border-0'>
                  <CardBody className='px-lg-5 py-lg-5'>
                    <Form role='form'>
                      <CustomInput
                        aria_label='nomEtudiant'
                        placeholder={"Nom etudiant"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <CustomInput
                        aria_label='prenomEtudiant'
                        placeholder={"Prenom etudiant"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <CustomInput
                        aria_label='age'
                        placeholder={"Age"}
                        type='number'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                      <CustomInput
                        aria_label='email'
                        placeholder={"email"}
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <CustomInput
                        aria_label='password'
                        placeholder={"password"}
                        type='password'
                        value={password}
                        valid={password === confirmPassword ? true : false}
                        feedback='password must be equal to confirm password'
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <CustomInput
                        aria_label='confirm password'
                        placeholder={"confirm password"}
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <p
                        style={{
                          color: message.type === "error" ? "red" : "green",
                        }}
                      >
                        {message ? message.msg : ""}
                      </p>
                      <div className='text-center'>
                        <Button
                          disabled={loading}
                          data-testid='submit'
                          className='mt-4'
                          color='primary'
                          type='button'
                          onClick={() => {
                            addStudentHandler();
                          }}
                        >
                          Ajouter
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default RegisterUser;
