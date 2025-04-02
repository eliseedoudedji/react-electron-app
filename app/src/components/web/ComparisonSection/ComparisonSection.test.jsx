import React from "react";
import { render, screen } from "@testing-library/react";
import ComparisonSection from "./ComparisonSection";

test("renders ComparisonSection component", () => {
  render(<ComparisonSection />);
  expect(screen.getByText("ComparisonSection")).toBeInTheDocument();
});
