import React from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { TasksNotes } from "./tasks-notes-button";

test("Tasks button renders", () => {
  render(<TasksNotes buttonText="Log In" />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Tasks & Notes");
  screen.debug();
});
