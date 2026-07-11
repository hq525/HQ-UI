import { PropsWithChildren } from "react";
import styled from "styled-components";

import { BREAKPOINTS } from "../../tokens";

// Import the GridItem component
import GridItem from "./Components/GridItem";

// Settings that should be available for every breakpoint
interface ContainerSettings {
  cols?: number;
  gapX?: string | number;
  gapY?: string | number;
}

// General settings and breakpoint-specific settings
interface GridContainerProps {
  xs?: ContainerSettings;
  md?: ContainerSettings;
  lg?: ContainerSettings;
  xl?: ContainerSettings;
  xxl?: ContainerSettings;
  cols?: number;
  gap?: string | number;
  gapX?: string | number;
  gapY?: string | number;
}

// Transient ($-prefixed) props so styled-components does not
// forward them to the underlying DOM element
interface StyledGridContainerProps {
  $xs?: ContainerSettings;
  $md?: ContainerSettings;
  $lg?: ContainerSettings;
  $xl?: ContainerSettings;
  $xxl?: ContainerSettings;
  $cols?: number;
  $gap?: string | number;
  $gapX?: string | number;
  $gapY?: string | number;
}

// Numbers are treated as px so that e.g. gapX={10} produces valid CSS
const gapValue = (gap: string | number) =>
  typeof gap === "number" ? `${gap}px` : gap;

/**
Using styled components to implement conditional styling.
For every breakpoint we check if the necessary prop is available and if yes,
we apply the grid styling. If no breakpoint-specific values are applied,
apply the fallback, if available.
**/
const GridContainer = styled.div<StyledGridContainerProps>`
  display: grid;
  height: 100%;

  // Fallback if no breakpoint-specific values have been set
  ${({ $cols }) => $cols && `grid-template-columns: repeat(${$cols}, 1fr);`}
  ${({ $gap }) => $gap && `gap: ${gapValue($gap)};`}
  ${({ $gapX }) => $gapX && `column-gap: ${gapValue($gapX)};`}
  ${({ $gapY }) => $gapY && `row-gap: ${gapValue($gapY)};`}

  // Mobile
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${({ $xs }) =>
      $xs?.cols && `grid-template-columns: repeat(${$xs.cols}, 1fr);`};
    ${({ $xs }) => $xs?.gapX && `column-gap: ${gapValue($xs.gapX)};`};
    ${({ $xs }) => $xs?.gapY && `row-gap: ${gapValue($xs.gapY)};`};
  }

  // Portrait Tablets
  @media (min-width: ${BREAKPOINTS.md}px) {
    ${({ $md }) =>
      $md?.cols && `grid-template-columns: repeat(${$md.cols}, 1fr);`};
    ${({ $md }) => $md?.gapX && `column-gap: ${gapValue($md.gapX)};`};
    ${({ $md }) => $md?.gapY && `row-gap: ${gapValue($md.gapY)};`};
  }

  // Landscape Tablets
  @media (min-width: ${BREAKPOINTS.lg}px) {
    ${({ $lg }) =>
      $lg?.cols && `grid-template-columns: repeat(${$lg.cols}, 1fr);`};
    ${({ $lg }) => $lg?.gapX && `column-gap: ${gapValue($lg.gapX)};`};
    ${({ $lg }) => $lg?.gapY && `row-gap: ${gapValue($lg.gapY)};`};
  }

  // Laptops
  @media (min-width: ${BREAKPOINTS.xl}px) {
    ${({ $xl }) =>
      $xl?.cols && `grid-template-columns: repeat(${$xl.cols}, 1fr);`};
    ${({ $xl }) => $xl?.gapX && `column-gap: ${gapValue($xl.gapX)};`};
    ${({ $xl }) => $xl?.gapY && `row-gap: ${gapValue($xl.gapY)};`};
  }

  // Desktops
  @media (min-width: ${BREAKPOINTS.xxl}px) {
    ${({ $xxl }) =>
      $xxl?.cols && `grid-template-columns: repeat(${$xxl.cols}, 1fr);`};
    ${({ $xxl }) => $xxl?.gapX && `column-gap: ${gapValue($xxl.gapX)};`};
    ${({ $xxl }) => $xxl?.gapY && `row-gap: ${gapValue($xxl.gapY)};`};
  }
`;

/**
Define the Grid component which accepts children and puts
them inside of the GridContainer
**/
function Grid({
  xs,
  md,
  lg,
  xl,
  xxl,
  cols,
  gap,
  gapX,
  gapY,
  children,
}: PropsWithChildren<GridContainerProps>) {
  return (
    <GridContainer
      $xs={xs}
      $md={md}
      $lg={lg}
      $xl={xl}
      $xxl={xxl}
      $cols={cols}
      $gap={gap}
      $gapX={gapX}
      $gapY={gapY}
    >
      {children}
    </GridContainer>
  );
}

/**
Create a component composition to make GridItem available
as Grid.Item under the grid component
**/
Grid.Item = GridItem;

// Export for usage of the component in the application
export default Grid;
