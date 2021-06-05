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
// core components
import Header from "components/Headers/Header.js";
import {
  getPfeNonTaken,
  acceptPfe,
  getAllPfeByTeacher,
  undoPfe,
} from "../../services/pfeService";
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
      const res = await getPfeNonTaken(token);
      const otherRes = await getAllPfeByTeacher(token, userInformation._id);
      setlistPFE(otherRes.listPfeByTeacher.concat(res.data));
      setLoading(false);
      console.log(listPFE);
    } catch (err) {
      console.log(err);
    }
  }, [mount]);
  console.log(userInformation);
  // const goToDetail = (pfe) => {};
  const acceptPfeHandler = (idPfe, id_tutor, token) => {
    acceptPfe(idPfe, id_tutor, token);
    setMount(!mount);
  };
  const undoPfeHandler = (idPfe, id_tutor, token) => {
    undoPfe(idPfe, id_tutor, token);
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
                    <th scope='col'>Tatus</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th colSpan='3'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <div style={{ flex: 1, position: 50 }}>
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
                              <Link
                                to='detailpfe'
                                className='btn btn-primary btn-sm'
                                onClick={() => props.selectPfe(elem)}
                              >
                                Details
                              </Link>
                              {elem.status ? (
                                <Button
                                  className='btn btn-danger'
                                  onClick={async () => {
                                    await undoPfeHandler(
                                      elem._id,
                                      userInformation._id,
                                      token
                                    );
                                  }}
                                >
                                  Annuler
                                </Button>
                              ) : (
                                <Button
                                  className='btn btn-success btn-sm'
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
