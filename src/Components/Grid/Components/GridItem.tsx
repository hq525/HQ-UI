import styled from "styled-components";
import { PropsWithChildren } from "react";

import { BREAKPOINTS } from "../../../tokens";

// Settings that should be available for every breakpoint
interface GridItemSettings {
  colSpan?: number;
  rowSpan?: number;
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number;
}

// General settings and breakpoint-specific settings
interface GridItemProps {
  xs?: GridItemSettings;
  md?: GridItemSettings;
  lg?: GridItemSettings;
  xl?: GridItemSettings;
  xxl?: GridItemSettings;
  colSpan?: number;
  rowSpan?: number;
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number;
}

// Transient ($-prefixed) props so styled-components does not
// forward them to the underlying DOM element
interface GridItemContainerProps {
  $xs?: GridItemSettings;
  $md?: GridItemSettings;
  $lg?: GridItemSettings;
  $xl?: GridItemSettings;
  $xxl?: GridItemSettings;
  $colSpan?: number;
  $rowSpan?: number;
  $colStart?: number;
  $colEnd?: number;
  $rowStart?: number;
  $rowEnd?: number;
}

/**
Using Styled Components to implement conditional styling.
For every breakpoint we check if the necessary prop is available and if yes,
we apply the grid styling.
**/
const GridItemContainer = styled.div<GridItemContainerProps>`
  // Fallback if no breakpoint-specific values have been set
  ${({ $colSpan }) => $colSpan && `grid-column: span ${$colSpan};`}
  ${({ $rowSpan }) => $rowSpan && `grid-row: span ${$rowSpan};`}
  ${({ $colStart }) => $colStart && `grid-column-start: ${$colStart};`}
  ${({ $colEnd }) => $colEnd && `grid-column-end: ${$colEnd};`}
  ${({ $rowStart }) => $rowStart && `grid-row-start: ${$rowStart};`}
  ${({ $rowEnd }) => $rowEnd && `grid-row-end: ${$rowEnd};`}

  // Mobile
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${({ $xs }) => $xs?.colSpan && `grid-column: span ${$xs.colSpan}`};
    ${({ $xs }) => $xs?.rowSpan && `grid-row: span ${$xs.rowSpan}`};
    ${({ $xs }) => $xs?.colStart && `grid-column-start: ${$xs.colStart}`};
    ${({ $xs }) => $xs?.colEnd && `grid-column-end: ${$xs.colEnd}`};
    ${({ $xs }) => $xs?.rowStart && `grid-row-start: ${$xs.rowStart}`};
    ${({ $xs }) => $xs?.rowEnd && `grid-row-end: ${$xs.rowEnd}`};
  }

  // Portrait Tablets
  @media (min-width: ${BREAKPOINTS.md}px) {
    ${({ $md }) => $md?.colSpan && `grid-column: span ${$md.colSpan}`};
    ${({ $md }) => $md?.rowSpan && `grid-row: span ${$md.rowSpan}`};
    ${({ $md }) => $md?.colStart && `grid-column-start: ${$md.colStart}`};
    ${({ $md }) => $md?.colEnd && `grid-column-end: ${$md.colEnd}`};
    ${({ $md }) => $md?.rowStart && `grid-row-start: ${$md.rowStart}`};
    ${({ $md }) => $md?.rowEnd && `grid-row-end: ${$md.rowEnd}`};
  }

  // Landscape Tablets
  @media (min-width: ${BREAKPOINTS.lg}px) {
    ${({ $lg }) => $lg?.colSpan && `grid-column: span ${$lg.colSpan}`};
    ${({ $lg }) => $lg?.rowSpan && `grid-row: span ${$lg.rowSpan}`};
    ${({ $lg }) => $lg?.colStart && `grid-column-start: ${$lg.colStart}`};
    ${({ $lg }) => $lg?.colEnd && `grid-column-end: ${$lg.colEnd}`};
    ${({ $lg }) => $lg?.rowStart && `grid-row-start: ${$lg.rowStart}`};
    ${({ $lg }) => $lg?.rowEnd && `grid-row-end: ${$lg.rowEnd}`};
  }

  // Laptops
  @media (min-width: ${BREAKPOINTS.xl}px) {
    ${({ $xl }) => $xl?.colSpan && `grid-column: span ${$xl.colSpan}`};
    ${({ $xl }) => $xl?.rowSpan && `grid-row: span ${$xl.rowSpan}`};
    ${({ $xl }) => $xl?.colStart && `grid-column-start: ${$xl.colStart}`};
    ${({ $xl }) => $xl?.colEnd && `grid-column-end: ${$xl.colEnd}`};
    ${({ $xl }) => $xl?.rowStart && `grid-row-start: ${$xl.rowStart}`};
    ${({ $xl }) => $xl?.rowEnd && `grid-row-end: ${$xl.rowEnd}`};
  }

  // Desktops
  @media (min-width: ${BREAKPOINTS.xxl}px) {
    ${({ $xxl }) => $xxl?.colSpan && `grid-column: span ${$xxl.colSpan}`};
    ${({ $xxl }) => $xxl?.rowSpan && `grid-row: span ${$xxl.rowSpan}`};
    ${({ $xxl }) => $xxl?.colStart && `grid-column-start: ${$xxl.colStart}`};
    ${({ $xxl }) => $xxl?.colEnd && `grid-column-end: ${$xxl.colEnd}`};
    ${({ $xxl }) => $xxl?.rowStart && `grid-row-start: ${$xxl.rowStart}`};
    ${({ $xxl }) => $xxl?.rowEnd && `grid-row-end: ${$xxl.rowEnd}`};
  }
`;

/**
Define the GridItem component which accepts children and puts
them inside of the GridItemContainer
**/
function GridItem({
  xs,
  md,
  lg,
  xl,
  xxl,
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  children,
}: PropsWithChildren<GridItemProps>) {
  return (
    <GridItemContainer
      $xs={xs}
      $md={md}
      $lg={lg}
      $xl={xl}
      $xxl={xxl}
      $colSpan={colSpan}
      $rowSpan={rowSpan}
      $colStart={colStart}
      $colEnd={colEnd}
      $rowStart={rowStart}
      $rowEnd={rowEnd}
    >
      {children}
    </GridItemContainer>
  );
}

// Export for use in the Grid component
export default GridItem;
