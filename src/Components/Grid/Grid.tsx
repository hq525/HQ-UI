import { PropsWithChildren } from "react";
import styled from "styled-components";

// Import the GridItem component
import GridItem from "./Components/GridItem";

// Settings that should be available for every breakpoint
interface ContainerSettings {
  cols?: number;
  gapX?: string;
  gapY?: string;
}

// General settings and breakpoint-specific settings
interface GridContainerProps {
  xs?: ContainerSettings;
  md?: ContainerSettings;
  lg?: ContainerSettings;
  xl?: ContainerSettings;
  xxl?: ContainerSettings;
  cols?: number;
  gap?: string;
  gapX?: string;
  gapY?: string;
}

/**
Using styled components to implement conditional styling.
For every breakpoint we check if the necessary prop is available and if yes,
we apply the grid styling. If no breakpoint-specific values are applied,
apply the fallback, if available.
**/
const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  height: 100%;

  // Fallback if no breakpoint-specific values have been set
  ${({ cols }) => cols && `grid-template-columns: repeat(${cols}, 1fr);`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ gapX }) => gapX && `column-gap: ${gapX};`}
  ${({ gapY }) => gapY && `row-gap: ${gapY};`}

  // Mobile
  @media (max-width: 600px) {
    ${({ xs }) =>
      xs?.cols && `grid-template-columns: repeat(${xs.cols}, 1fr);`};
    ${({ xs }) => xs?.gapX && `column-gap: ${xs.gapX};`};
  }

  // Portrait Tablets
  @media (min-width: 600px) {
    ${({ md }) =>
      md?.cols && `grid-template-columns: repeat(${md.cols}, 1fr);`};
    ${({ md }) => md?.gapX && `column-gap: ${md.gapX};`};
  }

  // Landscape Tablets
  @media (min-width: 768px) {
    ${({ lg }) =>
      lg?.cols && `grid-template-columns: repeat(${lg.cols}, 1fr);`};
    ${({ lg }) => lg?.gapX && `column-gap: ${lg.gapX};`};
  }

  // Laptops
  @media (min-width: 992px) {
    ${({ xl }) =>
      xl?.cols && `grid-template-columns: repeat(${xl.cols}, 1fr);`};
    ${({ xl }) => xl?.gapX && `column-gap: ${xl.gapX};`};
  }

  // Desktops
  @media (min-width: 1200px) {
    ${({ xxl }) =>
      xxl?.cols && `grid-template-columns: repeat(${xxl.cols}, 1fr);`};
    ${({ xxl }) => xxl?.gapX && `column-gap: ${xxl.gapX};`};
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
      xs={xs}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      cols={cols}
      gap={gap}
      gapX={gapX}
      gapY={gapY}
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