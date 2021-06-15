import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { waitFor } from "@testing-library/dom"

import Login from "../../views/examples/Login";

test("successful login", async () => {
    jest
      .spyOn(window, "fetch")
      .mockResolvedValue({ json: () => ({ token: "123" }) });
  
    const { getByLabelText, getByTestId } = render(<Login />);

    const emailField = getByLabelText("email");
    const passwordField = getByLabelText("password");
    const button = getByTestId("submit");
  
    // fill out and submit form
    fireEvent.change(emailField, { target: { value: "student@gmail.com" } });
    fireEvent.change(passwordField, { target: { value: "student" } });
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