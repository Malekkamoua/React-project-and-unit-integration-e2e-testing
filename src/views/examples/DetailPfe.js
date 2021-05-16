import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button,
  CardText,
} from "reactstrap";
import Header from "components/Headers/Header.js";
const DetailPfe = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      <Container className='mt--15' fluid>
        <Card style={{ width: "30rem", marginLeft: 350, marginTop: 200 }}>
          <CardBody>
            <CardTitle>titre: {props.activePfe.title}</CardTitle>
            <CardText>contenu: {props.activePfe.content}</CardText>
            <CardText>
              Nom et prenom d'etudiant:{" "}
              {props.activePfe.student ? props.activePfe.student.name : ""}
            </CardText>
            <CardText>
              Année: {props.activePfe.year ? props.activePfe.year.title : ""}
            </CardText>

            <Button
              color='success'
              href='#pablo'
              onClick={(e) => e.preventDefault()}
            >
              Accept
            </Button>
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
