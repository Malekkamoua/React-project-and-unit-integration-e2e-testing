import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPfe } from "../../services/pfeService";
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button,
  CardText,
} from "reactstrap";
import Header from "components/Headers/Header.js";
const EtatPfeEtudiant = (props) => {
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
      {loading ? (
        <Container className='mt--15' fluid>
          <Card
            style={{
              width: "30rem",
              marginLeft: 350,
              marginTop: 200,
              backgroundColor: currentPfe[0]
                ? currentPfe[0].status
                  ? "lightgreen"
                  : "lightyellow"
                : "grey",
            }}
          >
            <CardBody>
              <CardTitle>
                titre:{currentPfe[0] ? currentPfe[0].title : ""}
              </CardTitle>
              <CardText>
                contenu:{currentPfe[0] ? currentPfe[0].content : ""}{" "}
              </CardText>
              <CardText>
                état:{" "}
                {currentPfe[0]
                  ? currentPfe[0].status
                    ? "est pris"
                    : "en attente"
                  : "NaN"}
              </CardText>
              {currentPfe[0].tutor ? (
                <CardText>
                  accepter par:
                  {currentPfe[0].tutor ? currentPfe[0].tutor.name : ""}{" "}
                </CardText>
              ) : (
                ""
              )}
              <CardText>
                Année:{currentPfe[0] ? currentPfe[0].year.title : ""}
              </CardText>
            </CardBody>
          </Card>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};
export default EtatPfeEtudiant;
