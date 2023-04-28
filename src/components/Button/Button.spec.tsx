import React from "react";

import { screen, render, fireEvent } from "@testing-library/react";
import Button from "./Button";

// TDD - Test Driven Development

describe("Button component", () => {
  it("should render a button", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should render a button containing the text 'Button'", () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Button");
  });
  it("should call the onClick function passed as prop", () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Button</Button>);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onClick).toBeCalled();
  });
  it("should be capable to render as an anchor", () => {
    render(
      <Button as="a" href="http://google.com">
        Button
      </Button>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
