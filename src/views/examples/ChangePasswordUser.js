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
import { changePassword } from "../../services/authService";
const RegisterUser = () => {
  const [oldPassword, setOldPassowrd] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [messageData, setMessageData] = useState();

  const { token, userInformation } = JSON.parse(localStorage.getItem("user"));
  const changePasswordHandler = async () => {
    if (newPassword === newConfirmPassword) {
      const res = await changePassword(
        token,
        { oldPassword, newPassword },
        userInformation.role,
        userInformation._id
      );
      setMessageData(res.data);
    } else {
      console.log("those password are not matching :P");
    }
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
                <h3 className='mb-0'>Change Password</h3>
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
                  placeholder={"old"}
                  type='password'
                  value={oldPassword}
                  onChange={(e) => setOldPassowrd(e.target.value)}
                />
                <CustomInput
                  placeholder={"new"}
                  type='password'
                  value={newPassword}
                  valid={newPassword === newConfirmPassword ? true : false}
                  feedback='password must be equal to confirm password'
                  onChange={(e) => setNewPassword(e.target.value)}
                />

                <CustomInput
                  placeholder={"confirm new pass"}
                  value={newConfirmPassword}
                  onChange={(e) => setNewConfirmPassword(e.target.value)}
                />

                <div className='text-center'>
                  {messageData && (
                    <p
                      style={{
                        color:
                          messageData.status == 404 || messageData.status == 401
                            ? "red"
                            : "green",
                      }}
                    >
                      {messageData ? messageData.message : ""}
                    </p>
                  )}
                  <Button
                    className='mt-4'
                    color='primary'
                    type='button'
                    onClick={async () => await changePasswordHandler()}
                  >
                    Changer
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
