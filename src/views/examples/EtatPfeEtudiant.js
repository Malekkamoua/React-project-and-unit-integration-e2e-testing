import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPfe } from "../../services/pfeService";
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button,
  CardText
} from "reactstrap";
import Header from "components/Headers/Header.js";
const EtatPfeEtudiant = props => {
  let token;
  let userInformation;
  if (localStorage.getItem("user"))
    token = JSON.parse(localStorage.getItem("user")).token;
  userInformation = JSON.parse(localStorage.getItem("user")).userInformation;
  const [currentPfe, setCurrentPfe] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    const res = await getPfe(token, userInformation.pfe);

    setCurrentPfe(res);
    setloading(true);
  }, []);
  return (
    <>
      <Header />
      <Container
        className="mt--15"
        fluid
        style={{ position: "relative", top: "-100px" }}
      >
        <Card className="shadow">
          <CardBody>
            <CardTitle>
              <b> Titre </b>: {currentPfe[0] ? currentPfe[0].title : ""}
            </CardTitle>
            <CardText>
              <b>Contenu</b>: {currentPfe[0] ? currentPfe[0].content : ""}{" "}
            </CardText>
            <CardText>
              <b>Etat</b>:{" "}
              {currentPfe[0]
                ? currentPfe[0].status
                  ? "est pris"
                  : "en attente"
                : "NaN"}
            </CardText>
            {currentPfe[0].tutor ? (
              <CardText>
                <b>Mon encadrant</b>:
                {currentPfe[0].tutor ? currentPfe[0].tutor.name : ""}{" "}
              </CardText>
            ) : (
              ""
            )}
            <CardText>
              <b>Année</b>: {currentPfe[0] ? currentPfe[0].year.title : ""}
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default EtatPfeEtudiant;
