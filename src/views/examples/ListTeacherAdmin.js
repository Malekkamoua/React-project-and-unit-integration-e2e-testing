import React, { PureComponent, useState, useEffect } from "react";
import { Container, Row, Card, CardHeader, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { activeTeacherAction } from "../../actions/activeTeacherAction";
import Header from "../../components/Headers/Header";
import CustomModal from "../../components/CustomModal/CustomModal";
import { getAllTeacher, deleteTeacher } from "../../services/teacherService";

const ListTeacherAdmin = (props) => {
  const [listTeacher, setListTeacher] = useState([]);
  const token = JSON.parse(localStorage.getItem("user")).token;
  const [modal, setModal] = useState(false);
  const [idTeacher, setIdTeacher] = useState();
  console.log(props);
  useEffect(async () => {
    const teachers = await getAllTeacher(token);
    console.log(teachers);
    setListTeacher(teachers);
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
                <h3 className='mb-0'>Liste des professeurs</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Nom</th>
                    <th scope='col'>Prenom</th>
                    <th scope='col'>Email</th>
                    <th colSpan='2'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listTeacher.map((elem) => {
                    if (elem.role === "teacher")
                      return (
                        <tr>
                          <td>{elem.name ? elem.name.split(" ")[1] : ""}</td>
                          <td>{elem.name ? elem.name.split(" ")[0] : ""}</td>
                          <td>{elem.email}</td>

                          <td>
                            <Link
                              to='detailTeacher'
                              className='btn btn-primary'
                              onClick={() => props.selectTeacher(elem)}
                            >
                              Detail
                            </Link>
                          </td>
                          <td>
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
  return bindActionCreators({ selectTeacher: activeTeacherAction }, dispatch);
}
function mapStateToProps(state) {}
export default connect(mapStateToProps, mapDispatchToProps)(ListTeacherAdmin);
