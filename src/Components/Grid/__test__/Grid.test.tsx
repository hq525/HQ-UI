import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Grid from "../Grid";

// Collect all CSS injected by styled-components, whether it was
// inserted as text or through the CSSOM.
const getStyleText = () =>
  Array.from(document.querySelectorAll("style"))
    .map((tag) => {
      const rules = tag.sheet ? Array.from(tag.sheet.cssRules) : [];
      return rules.length > 0
        ? rules.map((rule) => rule.cssText).join("\n")
        : (tag.textContent ?? "");
    })
    .join("\n");

describe("Grid component", () => {
  it("applies grid-row-end for the xxl breakpoint", () => {
    render(
      <Grid xxl={{ cols: 8 }}>
        <Grid.Item xxl={{ rowEnd: 4 }}>content</Grid.Item>
      </Grid>,
    );
    const css = getStyleText();
    expect(css).toMatch(/grid-row-end:\s*4/);
    expect(css).not.toMatch(/xxll/);
  });

  it("applies row-gap for a breakpoint-specific gapY", () => {
    render(<Grid md={{ cols: 3, gapY: "12px" }}>content</Grid>);
    expect(getStyleText()).toMatch(/row-gap:\s*12px/);
  });

  it("converts numeric gap values to px", () => {
    render(
      <Grid cols={2} gapX={10} gapY={8} md={{ cols: 2, gapX: 4 }}>
        content
      </Grid>,
    );
    const css = getStyleText();
    expect(css).toMatch(/column-gap:\s*10px/);
    expect(css).toMatch(/row-gap:\s*8px/);
    expect(css).toMatch(/column-gap:\s*4px/);
  });

  it("does not leak breakpoint props to the DOM", () => {
    const { container } = render(
      <Grid xs={{ cols: 1 }} md={{ cols: 3 }}>
        <Grid.Item xs={{ colSpan: 1 }} md={{ colSpan: 2 }}>
          content
        </Grid.Item>
      </Grid>,
    );
    const gridEl = container.firstElementChild as HTMLElement;
    const itemEl = gridEl.firstElementChild as HTMLElement;
    expect(gridEl.hasAttribute("xs")).toBe(false);
    expect(gridEl.hasAttribute("md")).toBe(false);
    expect(itemEl.hasAttribute("xs")).toBe(false);
    expect(itemEl.hasAttribute("md")).toBe(false);
  });

  it("applies top-level GridItem props as fallback styling", () => {
    render(
      <Grid.Item
        colSpan={5}
        rowSpan={6}
        colStart={7}
        colEnd={8}
        rowStart={9}
        rowEnd={10}
      >
        content
      </Grid.Item>,
    );
    const css = getStyleText();
    expect(css).toMatch(/grid-column:\s*span 5/);
    expect(css).toMatch(/grid-row:\s*span 6/);
    expect(css).toMatch(/grid-column-start:\s*7/);
    expect(css).toMatch(/grid-column-end:\s*8/);
    expect(css).toMatch(/grid-row-start:\s*9/);
    expect(css).toMatch(/grid-row-end:\s*10/);
  });
});
