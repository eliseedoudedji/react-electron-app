import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

test("renders NavBar component", () => {
  render(<NavBar />);
  expect(screen.getByText("NavBar")).toBeInTheDocument();
});
