import { render } from "@testing-library/react";
import React from "react";
import { WelcomingButton } from "./WelcomingButton";

describe("WelcomingButton", () => {
  test("no name", () => {
    const { container } = render(<WelcomingButton />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="css-1yx6h60"
          type="button"
        >
          <span
            class="css-j8fq0c"
          >
            <span
              class="css-t5emrf"
            >
              Hello, 
              World
              !
            </span>
          </span>
        </button>
      </div>
    `);
  });

  test("with name", () => {
    const { container } = render(<WelcomingButton name="React Sydney" />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="css-1yx6h60"
          type="button"
        >
          <span
            class="css-j8fq0c"
          >
            <span
              class="css-t5emrf"
            >
              Hello, 
              React Sydney
              !
            </span>
          </span>
        </button>
      </div>
    `);
  });
});
