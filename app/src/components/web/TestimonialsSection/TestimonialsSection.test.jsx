import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialsSection from "./TestimonialsSection";

test("renders TestimonialsSection component", () => {
  render(<TestimonialsSection />);
  expect(screen.getByText("TestimonialsSection")).toBeInTheDocument();
});
