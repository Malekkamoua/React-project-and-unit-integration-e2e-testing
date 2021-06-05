import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Students from "../views/examples/Students";

describe("test liste etudiants", () => {
  beforeAll(() => {
    let user = {
      token: "12555466222",
      userInformation: {}
    };

    localStorage.setItem("user", user.token);
  });
  test("should run without crashing", () => {
    const { debug } = render(<Students />);
  });
});
