import { React } from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { AuthenticationGuard } from "./authentication-guard";

test("Check that div is rendering", () => {
  const { container } = render(<AuthenticationGuard />);
  const element = container.querySelector("div");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Loading...");
  screen.debug();
});

test("Check class name", () => {
  const { container } = render(<AuthenticationGuard />);
  const element = container.querySelector(".page-layout");
  expect(element).toBeInTheDocument();
  screen.debug();
});
