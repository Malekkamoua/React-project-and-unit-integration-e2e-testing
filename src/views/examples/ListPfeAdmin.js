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
  UncontrolledTooltip,
} from "reactstrap";
//actions
import { activePfeAction } from "../../actions/activePfeAction";
import ClipLoader from "react-spinners/ClipLoader";
import {} from "react-spinners";
import { css } from "@emotion/react";

// core components
import Header from "components/Headers/Header.js";
import { getAllPfe, acceptPfe } from "../../services/pfeService";
const ListPfeTeacher = (props) => {
  console.log(props);
  const [loading, setLoading] = useState(false);
  const [listPFE, setlistPFE] = useState([]);
  const [mount, setMount] = useState(false);
  let token;
  let userInformation;
  if (localStorage.getItem("user"))
    token = JSON.parse(localStorage.getItem("user")).token;
  userInformation = JSON.parse(localStorage.getItem("user")).userInformation;
  console.log(token);
  useEffect(async () => {
    try {
      setLoading(true);
      const listPfe = await getAllPfe(token);
      setLoading(false);
      setlistPFE(listPfe);
      console.log(listPfe);
    } catch (err) {
      console.log(err);
    }
  }, [mount]);
  // const goToDetail = (pfe) => {};
  const acceptPfeHandler = (idPfe, id_tutor, token) => {
    acceptPfe(idPfe, id_tutor, token);
    setMount(!mount);
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
                <h3 className='mb-0'>Liste des PFE</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Project</th>
                    <th scope='col'>Contenu</th>
                    <th scope='col'>Status</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th colSpan='3'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <div style={{ position: "relative", left: "240%" }}>
                      {" "}
                      <ClipLoader loading={loading} />
                    </div>
                  ) : (
                    listPFE.map((elem) => {
                      return (
                        <tr>
                          <td>{elem.title}</td>
                          <td>{elem.content}</td>
                          <td>{elem.status ? "Accepted" : "Pending"}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          {userInformation.role === "teacher" ? (
                            <td>
                              {elem.status ? (
                                <Button className='btn btn-danger'>
                                  Annuler
                                </Button>
                              ) : (
                                <Button
                                  className='btn btn-success'
                                  onClick={() =>
                                    acceptPfeHandler(
                                      elem._id,
                                      userInformation._id,
                                      token
                                    )
                                  }
                                >
                                  Accepter
                                </Button>
                              )}
                            </td>
                          ) : (
                            ""
                          )}
                          <td>
                            <Link
                              to='detailpfe'
                              className='btn btn-primary btn-sm'
                              onClick={() => props.selectPfe(elem)}
                            >
                              Details
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  )}
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
export default connect(mapStateToProps, mapDispatchToProps)(ListPfeTeacher);
