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
  const [loading, setLoading] = useState(false);
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [messageData, setMessageData] = useState();
  let token;
  let userInformation;
  if (localStorage.getItem("user"))
    token = JSON.parse(localStorage.getItem("user")).token;
  userInformation = JSON.parse(localStorage.getItem("user")).userInformation;
  const changePasswordHandler = async () => {
    if (newPassword === newConfirmPassword) {
      setLoading(true);
      const res = await changePassword(
        token,
        { oldPassword, newPassword },
        userInformation.role,
        userInformation._id
      );
      setMessageData(res.data);
      setOldPassowrd("");
      setNewPassword("");
      setNewConfirmPassword("");
      setLoading(false);
    } else {
      console.log("those password are not matching :P");
    }
  };
  return (
    <>
      <Header />
      <Container
        className='mt--10'
        style={{ position: "relative", top: "-100px" }}
      >
        {/* Table */}
        <Col>
          <Card className='bg-secondary shadow border-0'>
            <CardHeader className='border-0'>
              <h3 className='mb-0'>Changer mot de passe</h3>
            </CardHeader>
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
                  feedback='Les mots de passes doivent être identiques'
                  onChange={(e) => setNewPassword(e.target.value)}
                />

                <CustomInput
                  placeholder={"Confirmer nouveau mot de passe"}
                  value={newConfirmPassword}
                  type='password'
                  onChange={(e) => setNewConfirmPassword(e.target.value)}
                />

                <div
                  className='text-center'
                  style={{ position: "relative", left: "43%" }}
                >
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
                    color='success'
                    className='btn btn-success'
                    href='#pablo'
                    disabled={loading}
                    onClick={async () => await changePasswordHandler()}
                  >
                    Confirmer
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
