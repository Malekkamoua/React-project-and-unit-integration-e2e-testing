import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { waitFor } from "@testing-library/dom"
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom";

import Login from "../../views/examples/Login";

test("successful login", async () => {
    jest
      .spyOn(window, "fetch")
      .mockResolvedValue({ json: () => ({ token: "123" }) });
  
      const history = createMemoryHistory();

    const { getByLabelText, getByTestId } = render(<Router history={history}>
      <Login />
    </Router>);

    const emailField = getByLabelText("email");
    const passwordField = getByLabelText("password");
    const button = getByTestId("submit");
  
    // fill out and submit form
    fireEvent.change(emailField, { target: { value: "malekkamoua50@gmail.com" } });
    fireEvent.change(passwordField, { target: { value: "etudiant" } });
    fireEvent.click(button);
  
    await waitFor(() => { 
      // it hides form elements
      expect(button).not.toBeInTheDocument();

      // renders new content
      const prenomField = getByTestId("prenom");
      expect(prenomField).toBeTruthy();
      expect(prenomField).toHaveAttribute("type", "text");

      const nomField = getByTestId("nom");
      expect(nomField).toBeTruthy();
      expect(nomField).toHaveAttribute("type", "text");

    });
  });