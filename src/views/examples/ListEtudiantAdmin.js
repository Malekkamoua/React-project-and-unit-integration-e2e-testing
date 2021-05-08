import React, { PureComponent, useState, useEffect } from "react";
import { Container, Row, Card, CardHeader, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { activeStudentAction } from "../../actions/activeStudentAction";
import Header from "../../components/Headers/Header";
import CustomModal from "../../components/CustomModal/CustomModal";
import { getEdudiant, deleteEtudiant } from "../../services/studentService";

const ListEtudiantAdmin = (props) => {
  const [listStudent, setListStudent] = useState([]);
  const token = JSON.parse(localStorage.getItem("user")).token;
  const [modal, setModal] = useState(false);
  const [idEtudiant, setIdEtudiant] = useState();
  console.log(props);
  useEffect(async () => {
    const students = await getEdudiant(token);
    console.log(students);
    setListStudent(students);
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
                <h3 className='mb-0'>Liste des Etudiant</h3>
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
                  {listStudent.map((elem) => {
                    return (
                      <tr>
                        <td>{elem.name ? elem.name.split(" ")[1] : ""}</td>
                        <td>{elem.name ? elem.name.split(" ")[0] : ""}</td>
                        <td>{elem.email}</td>

                        <td>
                          <Link
                            to='detailEtudiant'
                            className='btn btn-primary'
                            onClick={() => props.selectStudent(elem)}
                          >
                            Detail
                          </Link>
                        </td>
                        <td>
                          <CustomModal
                            setEtudiant={() => setIdEtudiant(elem._id)}
                            buttonLabel='Delete'
                            modal={modal}
                            question='Voulez-vous vraiment supprimer cet étudiant'
                            toggle={() => setModal(!modal)}
                            apiFunction={() => {
                              //   console.log(idEtudiant);
                              //in case deleteEtudiant doesn't work we need to block set list
                              deleteEtudiant(token, idEtudiant);
                              setListStudent(
                                listStudent.filter(
                                  (elem) => elem._id !== idEtudiant
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
  return bindActionCreators({ selectStudent: activeStudentAction }, dispatch);
}
function mapStateToProps(state) {}
export default connect(mapStateToProps, mapDispatchToProps)(ListEtudiantAdmin);
