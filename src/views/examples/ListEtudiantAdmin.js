import React, { PureComponent, useState, useEffect } from "react";
import { Container, Row, Card, CardHeader, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { activeStudentAction } from "../../actions/activeStudentAction";
import Header from "../../components/Headers/Header";
import CustomModal from "../../components/CustomModal/CustomModal";
import {
  getAllEtudiant,
  deleteEtudiant,
  banEtudiant,
  unBanEtudiant
} from "../../services/studentService";
import ClipLoader from "react-spinners/ClipLoader";

const ListEtudiantAdmin = props => {
  const [listStudent, setListStudent] = useState([]);
  const token = JSON.parse(localStorage.getItem("user")).token;
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalBan, setModalBan] = useState(false);
  const [modalUnBan, setModalUnBan] = useState(false);
  const [idEtudiant, setIdEtudiant] = useState();
<<<<<<< Updated upstream
  const [resetTable, setResetTable] = useState(false);
  // console.log(props);
=======
  console.log(props);

>>>>>>> Stashed changes
  useEffect(async () => {
    console.log("first reset and the scecond must be done");
    setLoading(true);
    const students = await getAllEtudiant(token);
    setLoading(false);
    console.log(students);
    setListStudent(students);
<<<<<<< Updated upstream
  }, [resetTable]);
=======
  }, []);

  console.log(idEtudiant);
  console.log("hello from the page");
>>>>>>> Stashed changes

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7">
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Liste des Etudiants</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Email</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th colSpan="3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <div style={{ position: "relative", left: "240%" }}>
                      {" "}
                      <ClipLoader loading={loading} />
                    </div>
                  ) : (
                    listStudent.map(elem => {
                      return (
                        <tr>
                          <td>{elem.name ? elem.name.split(" ")[1] : ""}</td>
                          <td>{elem.name ? elem.name.split(" ")[0] : ""}</td>
                          <td>{elem.email}</td>
                          <td></td>
                          <td></td>
                          <td></td>

                          <td style={{ display: "flex" }}>
                            <Link
                              to="detailEtudiant"
                              className="btn btn-primary btn-sm"
                              onClick={() => props.selectStudent(elem)}
                            >
                              Details
                            </Link>

                            <CustomModal
                              setEtudiant={() => setIdEtudiant(elem._id)}
                              buttonLabel="Supprimer"
                              modal={modal}
                              question="Voulez-vous vraiment supprimer cet étudiant"
                              toggle={() => setModal(!modal)}
                              apiFunction={() => {
                                deleteEtudiant(token, idEtudiant);
                                setListStudent(
                                  listStudent.filter(
                                    elem => elem._id !== idEtudiant
                                  )
                                );
                              }}
                            />
                            {elem.isBanned === false ? (
                              <CustomModal
                                setEtudiant={() => setIdEtudiant(elem._id)}
                                buttonLabel="Bloquer"
                                modal={modalBan}
                                question="Voulez vous vraiment bloquer cet étudiant?"
                                toggle={() => setModalBan(!modalBan)}
                                apiFunction={async () => {
                                  await banEtudiant(
                                    token,
                                    { ...elem, isBanned: true },
                                    idEtudiant
                                  );
                                  setResetTable(!resetTable);
                                }}
                              />
                            ) : (
                              <CustomModal
                                setEtudiant={() => setIdEtudiant(elem._id)}
                                buttonLabel="Débloquer"
                                modal={modalUnBan}
                                question="Voulez vous vraiment débloquer cet étudiant?"
                                toggle={() => setModalUnBan(!modalUnBan)}
                                apiFunction={async () => {
<<<<<<< Updated upstream
                                  //   console.log(idEtudiant);
                                  //in case deleteEtudiant doesn't work we need to block set list
                                  let data = await banEtudiant(
=======
                                  //   Console.log(idEtudiant);
                                  //In case deleteEtudiant doesn't work we need to block set list
                                  let data = await unBanEtudiant(
>>>>>>> Stashed changes
                                    token,
                                    { ...elem, isBanned: false },
                                    idEtudiant
                                  );
                                  setResetTable(!resetTable);
                                }}
                              />
                            )}
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
  return bindActionCreators({ selectStudent: activeStudentAction }, dispatch);
}
function mapStateToProps(state) {}
export default connect(mapStateToProps, mapDispatchToProps)(ListEtudiantAdmin);
