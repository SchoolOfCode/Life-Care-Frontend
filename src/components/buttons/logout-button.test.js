import React from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { LogoutButton } from "./logout-button";

test("Logout button renders", () => {
  render(<LogoutButton buttonText="Log Out" />);
  const button = screen.getByText("Log Out");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Log Out");
  screen.debug();
});

test("Logout button renders", () => {
  render(<LogoutButton buttonText="Log Out" />);
  const button = screen.getByText("Log Out");
  expect(button).toBeTruthy();
  expect(button).toHaveTextContent("Log Out");
  screen.debug();
});
