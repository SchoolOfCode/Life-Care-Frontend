/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { React } from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { MobileNavBar } from "./mobile-nav-bar";

test("Check that div is rendering", () => {
  const { container } = render(<MobileNavBar />);
  const element = container.querySelector(".mobile-nav-bar__container");
  expect(element).toBeTruthy();
});

// eslint-disable-next-line jest/no-identical-title
test("Check that div is rendering", () => {
  const { container } = render(<MobileNavBar />);
  const element = container.querySelector(".nav-bar");
  expect(element).toBeTruthy();
});