import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ListEtudiantAdmin from "../views/examples/ListEtudiantAdmin";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

describe("Testing a list ", () => {
  beforeAll(() => {
    let user = {
      token: "12555466222",
      userInformation: {}
    };

    localStorage.setItem("user", user.token);
  });
  test("should run without crashing", () => {
    const { debug } = render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <ListEtudiantAdmin />
      </Provider>
    );
  });
  test("should render table correctly", () => {
    const { debug, getByLabelText, getByTestId } = render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <ListEtudiantAdmin />
      </Provider>
    );

    // const table = getByTestId("table");
    // const row = getByLabelText("tr");

    // expect(table).toHaveLength(1);
    // expect(row).toHaveLength(10);
    // expect(node).toHaveLength(10);
  });
});
