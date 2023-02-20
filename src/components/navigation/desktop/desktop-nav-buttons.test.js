import { React } from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { DesktopNavButtons } from "./desktop-nav-buttons";

test("Check that div is rendering", () => {
	const { container } = render(<DesktopNavButtons />);
	const element = container.querySelector("div");
	expect(element).toBeInTheDocument();
	screen.debug();
});

test("Check the class name", () => {
	const { container } = render(<DesktopNavButtons />);
	const element = container.querySelector(".nav-bar__buttons");
	expect(element).toBeInTheDocument();
	screen.debug();
});
