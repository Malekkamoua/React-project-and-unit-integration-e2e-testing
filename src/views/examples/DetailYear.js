import React, { useState } from "react";
import { connect } from "react-redux";
import { updateYear } from "../../services/univ_yearService";
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button,
  CardText,
  Col,
  Input,
  FormGroup,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { Link } from "react-router-dom";
const DetailPfe = (props) => {
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
      <Container className='mt--15' fluid>
        <Card style={{ width: "30rem", marginLeft: 350, marginTop: 200 }}>
          <CardBody>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            <Col>
              <FormGroup>
                <br />

                <Input
                  value={startDate}
                  type='date'
                  onChange={(e) => setStartDate(e.target.value)}
                />

                <br />
                <Input
                  type='date'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Link to='listYear'>
              <Button
                color='danger'
                onClick={async () =>
                  await updateYear(token, props.activeYear._id, {
                    title,
                    startDate,
                    endDate,
                  })
                }
              >
                Accept
              </Button>
            </Link>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return { activeYear: state.activeYear };
};
export default connect(mapStateToProps)(DetailPfe);
