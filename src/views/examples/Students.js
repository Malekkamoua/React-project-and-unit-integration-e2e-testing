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
import { Card, CardHeader, Table, Container, Row } from "reactstrap";
import api from "../../api";
// core components
import Header from "components/Headers/Header.js";

const Students = () => {
  const [listPFE, setlistPFE] = useState([]);

  useEffect(async () => {
    let data = await api.get("teachers/all", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNWUzNzI1Nzc2MDA3MjYwNDdjZDhlMCIsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNjE5MDUxMTYwLCJleHAiOjE2MjY4MjcxNjB9.j66VifIAjjFGUFF_icm8uohaYyWT1t8KCwt2YZ-BFJs",
      },
    });
    setlistPFE(data.data);
    console.log(data.data);
  }, []);

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
      </Container>
    </>
  );
};

export default Students;
