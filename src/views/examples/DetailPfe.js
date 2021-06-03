import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  CardHeader,
  Col,
  Button,
  CardText,
} from "reactstrap";
import Header from "components/Headers/Header.js";
const DetailPfe = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      <Container
        className='mt--15'
        fluid
        style={{ position: "relative", top: "-100px" }}
      >
        <Card className='shadow'>
          <CardHeader className='border-0' style={{ display: "flex" }}>
            <h3 className='mb-0'>
              Détails PFE :{" "}
              {props.activePfe.student ? props.activePfe.student.name : ""}
            </h3>
            <CardText style={{ position: "relative", left: "57%" }}>
              Année: {props.activePfe.year ? props.activePfe.year.title : ""}
            </CardText>
          </CardHeader>
          <CardBody>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <h3 className='mb-0'>Détails année universitaire</h3>
              </CardHeader>
              <CardBody>
                <Col>
                  <CardTitle>titre: {props.activePfe.title}</CardTitle>
                  <CardText>contenu: {props.activePfe.content}</CardText>
                </Col>
              </CardBody>
            </Card>
            <br></br>
            <br></br>
            {!props.activePfe.status ? (
              <Button
                style={{ position: "relative", left: "92%" }}
                color='success'
                className='btn btn-success btn-sm'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
              >
                Accepter
              </Button>
            ) : (
              <Button
                style={{ position: "relative", left: "92%" }}
                color='danger'
                className='btn btn-success btn-sm'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
              >
                Undo
              </Button>
            )}
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return { activePfe: state.activePfe };
};
export default connect(mapStateToProps)(DetailPfe);
