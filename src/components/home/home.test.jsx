import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "./home";
import Buttons from "../button/button";

describe("Testando render", () => {
  it("should add and remove the active class on hover", async () => {
    render(<Home />);

    const foto = await screen.findByTestId("picture");

    fireEvent.mouseEnter(foto);

    await waitFor(() => {
      expect(foto).toHaveClass("active");
    });

    fireEvent.mouseLeave(foto);

    await waitFor(() => {
      expect(foto).not.toHaveClass("active");
    });
  });

  it("should trigger curriculum download on click", async () => {
    render(<Buttons />);

    const curriculumButton = await screen.findByTestId("curriculo");

    fireEvent.click(curriculumButton);

    expect(curriculumButton).toHaveAttribute("href", "/curriculo.pdf");

  });
});
