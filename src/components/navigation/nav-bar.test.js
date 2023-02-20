import { React } from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { NavBar } from "./nav-bar";

test("Check that div is rendering", () => {
	const { container } = render(<NavBar />);
	const element = container.querySelector(".nav-bar__container");
	expect(element).toBeTruthy();
});

test("Check that div is rendering", () => {
	const { container } = render(<NavBar />);
	const element = container.querySelector(".nav-bar");
	expect(element).toBeTruthy();
});
