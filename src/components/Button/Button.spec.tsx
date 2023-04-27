import { screen, render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders a button with the given text", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });
  it("runs the given function when clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    screen.getByRole("button").click();

    expect(onClick).toHaveBeenCalled();
  });
});
