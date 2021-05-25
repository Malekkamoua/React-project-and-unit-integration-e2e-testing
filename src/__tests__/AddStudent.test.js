import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import RegisterUser from "../views/examples/AddStudent";
import CustomInput from "../components/CustomInput/index";
import user from "@testing-library/user-event";

describe("test adding a student", () => {
  test("should run without crashing", () => {
    const { debug } = render(<RegisterUser />);
  });

  test("should contain nom, prenom, age, email, mot de passe, confirmation mot de passe et un bouton", () => {
    const { debug, getByLabelText, getByTestId, getByText } = render(
      <RegisterUser />
    );

    const nomEtudiant = getByLabelText(/Nom etudiant/i);
    expect(nomEtudiant).toBeTruthy();
    expect(nomEtudiant).toHaveAttribute("type", "text");

    const prenomEtudiant = getByLabelText(/prenom/i);
    expect(prenomEtudiant).toBeTruthy();
    expect(prenomEtudiant).toHaveAttribute("type", "text");

    const emailEtudiant = getByLabelText(/email/i);
    expect(emailEtudiant).toBeTruthy();
    expect(emailEtudiant).toHaveAttribute("type", "email");

    const ageEtudiant = getByLabelText(/age/i);
    expect(ageEtudiant).toBeTruthy();
    expect(ageEtudiant).toHaveAttribute("type", "number");

    const passwordEtudiant = getByLabelText(/insert password/);
    expect(passwordEtudiant).toBeTruthy();
    expect(passwordEtudiant).toHaveAttribute("type", "password");

    const confPasswordEtudiant = getByLabelText(/confirm password/);
    expect(confPasswordEtudiant).toBeTruthy();
    expect(confPasswordEtudiant).toHaveAttribute("type", "password");

    expect(getByTestId("submit")).toBeTruthy();
  });

  test("should fire events", () => {
    const { debug, getByLabelText, getByTestId, getByText } = render(
      <RegisterUser />
    );
    const mockAjouterEtudiant = jest.fn();

    const nomEtudiant = getByLabelText(/Nom etudiant/i);
    const valNomEtudiant = "Malek kamoua";

    fireEvent.change(nomEtudiant, { target: { value: valNomEtudiant } });
    expect(nomEtudiant.value).toContain(valNomEtudiant);

    // const submitBtn = getByTestId("submit");
    // fireEvent.click(submitBtn);

    // expect(mockAjouterEtudiant).toHaveBeenCalled();
    // expect(mockAjouterEtudiant).toHaveBeenCalledtimes(1);
  });
});
