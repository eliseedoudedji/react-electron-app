import React from "react";
import { render, screen } from "@testing-library/react";
import Fonctionalities from "./Fonctionalities";

test("renders Fonctionalities component", () => {
  render(<Fonctionalities />);
  expect(screen.getByText("Fonctionalities")).toBeInTheDocument();
});
