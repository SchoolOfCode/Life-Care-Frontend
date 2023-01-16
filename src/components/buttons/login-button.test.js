import React from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { LoginButton } from "./login-button";

test("Login button renders", () => {
  render(<LoginButton buttonText="Log In" />);
  const button = screen.getByText("Log In");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Log In");
  screen.debug();
});

test("Login button renders", () => {
  render(<LoginButton buttonText="Log In" />);
  const button = screen.getByText("Log In");
  expect(button).toBeTruthy();
  expect(button).toHaveTextContent("Log In");
  screen.debug();
});