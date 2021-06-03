import React, { PureComponent, useState, useEffect } from "react";
import { Container, Row, Card, CardHeader, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { activeTeacherAction } from "../../actions/activeTeacherAction";
import Header from "../../components/Headers/Header";
import CustomModal from "../../components/CustomModal/CustomModal";
import { getAllTeacher, deleteTeacher } from "../../services/teacherService";
import ClipLoader from "react-spinners/ClipLoader";

const ListTeacherAdmin = (props) => {
  const [loading, setLoading] = useState(false);
  const [listTeacher, setListTeacher] = useState([]);
  const token = JSON.parse(localStorage.getItem("user")).token;
  const [modal, setModal] = useState(false);
  const [idTeacher, setIdTeacher] = useState();
  console.log(props);
  useEffect(async () => {
    setLoading(true);
    const teacher = await getAllTeacher(token);
    setLoading(false);
    console.log(teacher);
    setListTeacher(teacher);
  }, []);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className='mt--7'>
        {/* Table */}
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <h3 className='mb-0'>Liste des Professeur</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Nom et Prenom</th>
                    <th scope='col'>Email</th>
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
                    listTeacher.map((elem) => {
                      if (elem.role !== "admin")
                        return (
                          <tr>
                            <td>{elem.name}</td>

                            <td>{elem.email}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ display: "flex" }}>
                              <Link
                                to='detailTeacher'
                                className='btn btn-primary btn-sm'
                                onClick={() => props.selectTeacher(elem)}
                              >
                                Details
                              </Link>

                              <CustomModal
                                setEtudiant={() => setIdTeacher(elem._id)}
                                buttonLabel='Delete'
                                modal={modal}
                                question='Voulez-vous vraiment supprimer cet étudiant'
                                toggle={() => setModal(!modal)}
                                apiFunction={() => {
                                  //   console.log(idEtudiant);
                                  //in case deleteEtudiant doesn't work we need to block set list
                                  deleteTeacher(token, idTeacher);
                                  setListTeacher(
                                    listTeacher.filter(
                                      (elem) => elem._id !== idTeacher
                                    )
                                  );
                                }}
                              />
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
  return bindActionCreators({ selectTeacher: activeTeacherAction }, dispatch);
}
function mapStateToProps(state) {}
export default connect(mapStateToProps, mapDispatchToProps)(ListTeacherAdmin);
