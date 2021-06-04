import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Students from "../views/examples/Students";

describe("test liste etudiants", () => {
  test("throw error", () => {
    Storage.prototype.setItem = jest.fn(() => {
      console.log(" called "); // <-- was called
      throw new Error("ERROR");
    });

    utility.setItem("123", "value");
  });
});
