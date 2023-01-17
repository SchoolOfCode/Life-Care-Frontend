import { React } from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { NavBarButtons } from "./nav-bar-buttons";

test("Check that div is rendering", () => {
  const { container } = render(<NavBarButtons />);
  const element = container.querySelector("div");
  expect(element).toBeInTheDocument();
  screen.debug();
});

test("Check the class name", () => {
  const { container } = render(<NavBarButtons />);
  const element = container.querySelector(".nav-bar__buttons");
  expect(element).toBeInTheDocument();
  screen.debug();
});
