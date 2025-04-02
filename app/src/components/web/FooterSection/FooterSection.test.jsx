import React from "react";
import { render, screen } from "@testing-library/react";
import FooterSection from "./FooterSection";

test("renders FooterSection component", () => {
  render(<FooterSection />);
  expect(screen.getByText("FooterSection")).toBeInTheDocument();
});
