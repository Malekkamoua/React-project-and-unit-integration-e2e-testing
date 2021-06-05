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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Button,
  UncontrolledTooltip
} from "reactstrap";
//actions
import { activePfeAction } from "../../actions/activePfeAction";
// core components
import Header from "components/Headers/Header.js";
import {
  getAllPfe,
  acceptPfe,
  getAllPfeByTeacher
} from "../../services/pfeService";
const Teachers = props => {
  console.log(props);
  const [listPFE, setlistPFE] = useState([]);
  const [mount, setMount] = useState(false);
  let token;
  let userInformation;
  if (localStorage.getItem("user"))
    token = JSON.parse(localStorage.getItem("user")).token;
  userInformation = JSON.parse(localStorage.getItem("user")).userInformation;
  useEffect(async () => {
    const listPfe = await getAllPfeByTeacher(token, userInformation._id);
    setlistPFE(listPfe.listPfeByTeacher);
  }, [mount]);
  // const goToDetail = (pfe) => {};
  const acceptPfeHandler = (idPfe, token) => {
    acceptPfe(idPfe, token);
    setMount(!mount);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Liste des PFE</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Contenu</th>
                    <th scope="col">Status</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listPFE.map(elem => {
                    return (
                      <tr>
                        <td>{elem.title}</td>
                        <td>{elem.content}</td>
                        <td>{elem.status ? "Accepted" : "Pending"}</td>
                        <td>
                          <Link
                            to="detailpfe"
                            className="btn btn-primary btn-sm"
                            onClick={() => props.selectPfe(elem)}
                          >
                            Detail
                          </Link>
                        </td>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPfe: activePfeAction }, dispatch);
}
const mapStateToProps = () => {};
export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
