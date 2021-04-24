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

const Students = () => {
  const [listPFE, setlistPFE] = useState([]);
  const [nomPfe, setnomPfe] = useState("");
  const [contentPfe, setcontentPfe] = useState("");
  useEffect(async () => {
    let data = await api.get("teachers/all", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjM2MzBlNTVlZGViM2Y4MDU3N2VkMyIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjE5MjExMDEzLCJleHAiOjE2MjY5ODcwMTN9.Yfnj-zUkL-x9-zcUTZtgsXWrqarBZIS9BUgK1lvwm7E",
      },
    });
    setlistPFE(data.data);
    console.log(data.data);
  }, []);

  const ajouterPfe = async () => {
    console.log("button clicked");
    await api.post(
      "students/pfe",
      {
        title: nomPfe,
        content: contentPfe,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjM2MzBlNTVlZGViM2Y4MDU3N2VkMyIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjE5MjExMDEzLCJleHAiOjE2MjY5ODcwMTN9.Yfnj-zUkL-x9-zcUTZtgsXWrqarBZIS9BUgK1lvwm7E",
        },
      }
    );
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className='mt--7' fluid>
        {/* Table */}
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <h3 className='mb-0'>List des PFE</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Project</th>
                    <th scope='col'>Contenu</th>
                    <th scope='col'>Status</th>

                    <th scope='col' />
                  </tr>
                </thead>
                <tbody>
                  {listPFE.map((elem) => {
                    return (
                      <tr>
                        <td>{elem.title}</td>
                        <td>{elem.content}</td>
                        <td>{elem.status ? "Accepted" : "Pending"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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
                      onChange={(e) => {
                        setcontentPfe(e.target.value);
                      }}
                    />
                  </InputGroup>
                </FormGroup>

                <div className='text-center'>
                  <Button
                    className='mt-4'
                    color='primary'
                    type='button'
                    onClick={async () => await ajouterPfe()}
                  >
                    Ajouter PFE
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

export default Students;
