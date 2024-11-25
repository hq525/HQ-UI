import { PropsWithChildren } from "react";
import { useMediaQuery } from "@hq525/hq-react-hooks";
import { MOBILE, PORTRAIT_TABLET, LANDSCAPE_TABLET, LAPTOP, DESKTOP } from "../../../constants/breakpoints"
import classNames from "classnames";
import "../../../index.css"

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
}

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
    children,
  }: PropsWithChildren<GridItemProps>) {

    const classes: string[] = ['grid', 'grid-cols-subgrid']

    const isMobile = useMediaQuery(false, MOBILE);
    const isPortraitTablet = useMediaQuery(true, PORTRAIT_TABLET);
    const isLandscapeTablet = useMediaQuery(true, LANDSCAPE_TABLET);
    const isLaptop = useMediaQuery(true, LAPTOP);
    const isDesktop = useMediaQuery(true, DESKTOP);

    if (isMobile) {
      if (xs?.colSpan) {
        classes.push(`col-span-${xs.colSpan}`)
      }
      if (xs?.rowSpan) {
        classes.push(`row-span-${xs.colSpan}`)
      }
      if (xs?.colStart) {
        classes.push(`col-start-${xs.colStart}`)
      }
      if (xs?.colEnd) {
        classes.push(`col-end-${xs.colEnd}`)
      }
      if (xs?.rowStart) {
        classes.push(`row-start-${xs.rowStart}`)
      }
      if (xs?.rowEnd) {
        classes.push(`row-end-${xs.rowEnd}`)
      }
    } else if (isDesktop) {
      if (xxl?.colSpan) {
        classes.push(`col-span-${xxl.colSpan}`)
      }
      if (xxl?.rowSpan) {
        classes.push(`row-span-${xxl.colSpan}`)
      }
      if (xxl?.colStart) {
        classes.push(`col-start-${xxl.colStart}`)
      }
      if (xxl?.colEnd) {
        classes.push(`col-end-${xxl.colEnd}`)
      }
      if (xxl?.rowStart) {
        classes.push(`row-start-${xxl.rowStart}`)
      }
      if (xxl?.rowEnd) {
        classes.push(`row-end-${xxl.rowEnd}`)
      }
    } else if (isLaptop) {
      if (xl?.colSpan) {
        classes.push(`col-span-${xl.colSpan}`)
      }
      if (xl?.rowSpan) {
        classes.push(`row-span-${xl.colSpan}`)
      }
      if (xl?.colStart) {
        classes.push(`col-start-${xl.colStart}`)
      }
      if (xl?.colEnd) {
        classes.push(`col-end-${xl.colEnd}`)
      }
      if (xl?.rowStart) {
        classes.push(`row-start-${xl.rowStart}`)
      }
      if (xl?.rowEnd) {
        classes.push(`row-end-${xl.rowEnd}`)
      }
    } else if (isLandscapeTablet) {
      if (lg?.colSpan) {
        classes.push(`col-span-${lg.colSpan}`)
      }
      if (lg?.rowSpan) {
        classes.push(`row-span-${lg.colSpan}`)
      }
      if (lg?.colStart) {
        classes.push(`col-start-${lg.colStart}`)
      }
      if (lg?.colEnd) {
        classes.push(`col-end-${lg.colEnd}`)
      }
      if (lg?.rowStart) {
        classes.push(`row-start-${lg.rowStart}`)
      }
      if (lg?.rowEnd) {
        classes.push(`row-end-${lg.rowEnd}`)
      }
    } else if (isPortraitTablet) {
      if (md?.colSpan) {
        classes.push(`col-span-${md.colSpan}`)
      }
      if (md?.rowSpan) {
        classes.push(`row-span-${md.colSpan}`)
      }
      if (md?.colStart) {
        classes.push(`col-start-${md.colStart}`)
      }
      if (md?.colEnd) {
        classes.push(`col-end-${md.colEnd}`)
      }
      if (md?.rowStart) {
        classes.push(`row-start-${md.rowStart}`)
      }
      if (md?.rowEnd) {
        classes.push(`row-end-${md.rowEnd}`)
      }
    }

    return (
      <div className={classNames(classes)}>
        {children}
      </div>
    );
  }
  
  // Export for use in the Grid component
  export default GridItem;