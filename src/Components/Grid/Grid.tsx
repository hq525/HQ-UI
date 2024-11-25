import { PropsWithChildren } from "react";
import { useMediaQuery } from "@hq525/hq-react-hooks";
import { MOBILE, PORTRAIT_TABLET, LANDSCAPE_TABLET, LAPTOP, DESKTOP } from "../../constants/breakpoints"
import classNames from "classnames";

// Import the GridItem component that we just created
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

    const classes: string[] = ['grid'];

    const isMobile = useMediaQuery(false, MOBILE);
    const isPortraitTablet = useMediaQuery(true, PORTRAIT_TABLET);
    const isLandscapeTablet = useMediaQuery(true, LANDSCAPE_TABLET);
    const isLaptop = useMediaQuery(true, LAPTOP);
    const isDesktop = useMediaQuery(true, DESKTOP);

    if (isMobile) {
        if (xs?.cols) {
            classes.push(`grid-cols-${xs.cols}`)
        }
        if (xs?.gapX) {
            classes.push(`gap-x-${xs.gapX}`)
        }
        if (xs?.gapY) {
            classes.push(`gap-y-${xs.gapY}`)
        }
    } else if (isDesktop) {
        if (xxl?.cols) {
            classes.push(`grid-cols-${xxl.cols}`)
        }
        if (xxl?.gapX) {
            classes.push(`gap-x-${xxl.gapX}`)
        }
        if (xxl?.gapY) {
            classes.push(`gap-y-${xxl.gapY}`)
        }
    } else if (isLaptop) {
        if (xl?.cols) {
            classes.push(`grid-cols-${xl.cols}`)
        }
        if (xl?.gapX) {
            classes.push(`gap-x-${xl.gapX}`)
        }
        if (xl?.gapY) {
            classes.push(`gap-y-${xl.gapY}`)
        }
    } else if (isLandscapeTablet) {
        if (lg?.cols) {
            classes.push(`grid-cols-${lg.cols}`)
        }
        if (lg?.gapX) {
            classes.push(`gap-x-${lg.gapX}`)
        }
        if (lg?.gapY) {
            classes.push(`gap-y-${lg.gapY}`)
        }
    } else if (isPortraitTablet) {
        if (md?.cols) {
            classes.push(`grid-cols-${md.cols}`)
        }
        if (md?.gapX) {
            classes.push(`gap-x-${md.gapX}`)
        }
        if (md?.gapY) {
            classes.push(`gap-y-${md.gapY}`)
        }
    }

    // Fallback if no breakpoint-specific values have been set
    if (cols && ((!xs?.cols && isMobile) || (!md?.cols && isPortraitTablet) || (!lg?.cols && isLandscapeTablet) || (!xl?.cols && isLaptop) || (!xxl?.cols && isDesktop))) {
        classes.push(`grid-cols-${cols}`)
    }
    if (gap) {
        classes.push(`gap-${gap}`)
    }
    if (gapX && ((!xs?.gapX && isMobile) || (!md?.gapX && isPortraitTablet) || (!lg?.gapX && isLandscapeTablet) || (!xl?.gapX && isLaptop) || (!xxl?.gapX && isDesktop))) {
        classes.push(`gap-x-${gapX}`)
    }
    if (gapY && ((!xs?.gapY && isMobile) || (!md?.gapY && isPortraitTablet) || (!lg?.gapY && isLandscapeTablet) || (!xl?.gapY && isLaptop) || (!xxl?.gapY && isDesktop))) {
        classes.push(`gap-y-${gapY}`)
    }

    return (
      <div className={classNames(classes)}>
        {children}
      </div>
    );
  }
  
  /** 
  Create a component composition to make GridItem available
  as Grid.Item under the grid component
  **/
  Grid.Item = GridItem;
  
  // Export for usage of the component in the application
  export default Grid;