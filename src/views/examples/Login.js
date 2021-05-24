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
import { Redirect } from "react-router";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import api from "../../api";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [logged, setlogged] = useState(false);
  const [role, setrole] = useState("");
  const [message, setMessage] = useState("");
  console.log("email", email, "password:", password);
  let result;
  const login = async (e) => {
    e.preventDefault();
    setloading(true);
    console.log(email, password);

    result = await api.post("/login", {
      email: email,
      password: password,
    });

    if (result.data.status === 401) {
      setMessage(result.data.message);
      setloading(false);
    } else {
      if (result.data.status === 200) {
        setlogged(true);
        setloading(false);
        localStorage.setItem("user", JSON.stringify(result.data));
        console.log("the result ", result);
        setrole(result.data.userInformation.role);
      }
    }
  };
  if (logged) {
    console.log(role);
    if (role === "teacher") {
      return <Redirect to='/teacher/teacher-profile' />;
    }
    if (role === "admin") {
      return <Redirect to='/admin/students' />;
    }
    if (role === "student") {
      return <Redirect to='/student/student-profile' />;
    }
  }
  return (
    <>
      <Col lg='5' md='7'>
        <Card className='bg-secondary shadow border-0'>
          <CardHeader className='bg-transparent pb-5'>
            <div className='text-muted text-center mt-2 mb-3'>
              <small>LOGO</small>
            </div>
            <div className='btn-wrapper text-center'>
              <Button
                className='btn-neutral btn-icon'
                color='default'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
              >
                <span className='btn-inner--icon'>
                  <img
                    alt='...'
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className='btn-inner--text'>Github</span>
              </Button>
              <Button
                className='btn-neutral btn-icon'
                color='default'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
              >
                <span className='btn-inner--icon'>
                  <img
                    alt='...'
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className='btn-inner--text'>Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className='px-lg-5 py-lg-5'>
            <Form role='form'>
              <FormGroup className='mb-3'>
                <InputGroup className='input-group-alternative'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='ni ni-email-83' />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='Email'
                    type='email'
                    autoComplete='new-email'
                    onChange={(e) => setemail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className='input-group-alternative'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='ni ni-lock-circle-open' />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='Password'
                    type='password'
                    autoComplete='new-password'
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className='text-center'>
                <Button
                  className='my-4'
                  color='primary'
                  type='button'
                  onClick={login}
                  disabled={loading}
                >
                  Sign in
                </Button>
                <p style={{ color: "red" }}>{message}</p>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
