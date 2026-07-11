import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("does not leak styling props to the DOM", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(<Button text="Click" primary size="small" />);
    const button = screen.getByRole("button");
    expect(button.hasAttribute("size")).toBe(false);
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});
