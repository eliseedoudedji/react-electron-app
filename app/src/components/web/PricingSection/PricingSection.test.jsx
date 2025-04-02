import React from "react";
import { render, screen } from "@testing-library/react";
import PricingSection from "./PricingSection";

test("renders PricingSection component", () => {
  render(<PricingSection />);
  expect(screen.getByText("PricingSection")).toBeInTheDocument();
});
