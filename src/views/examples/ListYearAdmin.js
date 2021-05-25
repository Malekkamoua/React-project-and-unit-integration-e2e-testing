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
import { Card, CardHeader, Table, Container, Row, Button } from "reactstrap";
//actions

import { activeYearAction } from "../../actions/activeYearAction";
// core components
import Header from "components/Headers/Header.js";
import { getAllYear } from "../../services/univ_yearService";

const ListYearAdmin = props => {
  console.log(props);

  const [listYear, setListYear] = useState([]);
  const [mount, setMount] = useState(false);
  let token = JSON.parse(localStorage.getItem("user")).token;
  useEffect(async () => {
    try {
      const years = await getAllYear(token);
      setListYear(years);
      console.log(years);
    } catch (err) {
      console.log(err);
    }
  }, [mount]);
  // const goToDetail = (pfe) => {};
  console.log(listYear);
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
                <h3 className="mb-0">Années universitaires</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">titre</th>
                    <th scope="col">Date Début</th>
                    <th scope="col">Date Fin</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th colSpan="3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listYear.map(elem => {
                    return (
                      <tr>
                        <td>{elem.title}</td>
                        <td>{elem.startDate.split("T")[0]}</td>
                        <td>{elem.endDate.split("T")[0]}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Link
                            to="detailYear"
                            className="btn btn-primary btn-sm"
                            onClick={() => props.selectYear(elem)}
                          >
                            Details
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
  return bindActionCreators({ selectYear: activeYearAction }, dispatch);
}
const mapStateToProps = () => {};
export default connect(mapStateToProps, mapDispatchToProps)(ListYearAdmin);
