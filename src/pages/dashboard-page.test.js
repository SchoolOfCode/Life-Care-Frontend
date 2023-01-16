import { React } from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Dashboard from "./dashboard-page";

test("Check that div is rendering", () => {
  const { container } = render(<Dashboard />);
  const element = container.querySelector("div");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Dashboard");
  screen.debug();
});

test("Check class name", () => {
  const { container } = render(<Dashboard />);
  const element = container.querySelector(".patient-details");
  expect(element).toBeInTheDocument();
  screen.debug();
});

test("Check class name", () => {
    const { container } = render(<Dashboard />);
    const element = container.querySelector("div");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Carer Info:");
    screen.debug();
  });