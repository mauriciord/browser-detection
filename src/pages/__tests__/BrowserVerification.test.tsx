import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BrowserVerification from "../BrowserVerification";

describe("Browser Verification Pagee", () => {
  test("renders the texts messages", () => {
    const { getByText } = render(<BrowserVerification />, {
      wrapper: MemoryRouter,
    });

    const titleElement = getByText(/Unsupported browser/i);
    const experienceParagraph = getByText(
      /For your best experience, try one of the browsers below on your/i
    );
    const dunderDesktop = getByText(/desktop/i);
    const actionText = getByText(
      /Here's the link to the game, copy it and open on the new browser/i
    );

    expect(titleElement).toBeInTheDocument();
    expect(experienceParagraph).toBeInTheDocument();
    expect(dunderDesktop).toBeInTheDocument();
    expect(actionText).toBeInTheDocument();
  });
});
