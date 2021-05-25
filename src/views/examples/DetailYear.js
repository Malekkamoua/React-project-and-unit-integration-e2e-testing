import React, { useState } from "react";
import { connect } from "react-redux";
import { updateYear } from "../../services/univ_yearService";
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  CardHeader,
  Button,
  CardText,
  Col,
  Input,
  FormGroup
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { Link } from "react-router-dom";
const DetailPfe = props => {
  console.log(props.activeYear._id);
  const token = JSON.parse(localStorage.getItem("user")).token;
  const [title, setTitle] = useState(props.activeYear.title);
  const [startDate, setStartDate] = useState(
    props.activeYear.startDate.split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    props.activeYear.endDate.split("T")[0]
  );
  return (
    <>
      <Header />
      <Container
        className="mt--15"
        fluid
        style={{ position: "relative", top: "-100px" }}
      >
        <Card className="shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0">Détails année universitaire</h3>
          </CardHeader>
          <CardBody>
            <Col>
              <FormGroup>
                Titre{" "}
                <Input value={title} onChange={e => setTitle(e.target.value)} />
                <br />
                Date Début
                <Input
                  value={startDate}
                  max={endDate}
                  type="date"
                  onChange={e => setStartDate(e.target.value)}
                />
                <br />
                Date Fin
                <Input
                  type="date"
                  value={endDate}
                  Value
                  onChange={e => setEndDate(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Link to="listYear">
              <Button
                style={{ position: "relative", left: "86%" }}
                color="danger"
                onClick={async () =>
                  await updateYear(token, props.activeYear._id, {
                    title,
                    startDate,
                    endDate
                  })
                }
              >
                Enregistrer
              </Button>
            </Link>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
const mapStateToProps = state => {
  return { activeYear: state.activeYear };
};
export default connect(mapStateToProps)(DetailPfe);
