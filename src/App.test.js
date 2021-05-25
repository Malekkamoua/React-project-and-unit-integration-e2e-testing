import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDom from "react-dom";
import App from "./index";

describe("unit testing ", () => {
  test("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<App />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});
