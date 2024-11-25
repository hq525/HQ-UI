import React, { MouseEventHandler } from "react";
import classNames from "classnames";
import "../../index.css"

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };

const Button: React.FC<ButtonProps> = ({
    size,
    primary,
    disabled,
    text,
    onClick
  }) => {

    var classes = ["text-white", "text-center", "font-bold", "rounded"]

    if (primary) {
        classes = classes.concat(["bg-blue-500"])
    } else {
        classes = classes.concat(["bg-red-500"])
    }

    if (disabled) {
        classes = classes.concat(["opacity-50", "cursor-not-allowed"])
    } else {
        classes = classes.concat([primary ? "hover:bg-blue-700" : "hover:bg-red-700"])
    }

    switch (size) {
        case "small":
            classes = classes.concat(["px-3", "py-2", "text-sm"])
            break;
        case "medium":
            classes = classes.concat(["px-5", "py-2.5", "text-sm"])
            break;
        case "large":
            classes = classes.concat(["px-5", "py-3", "text-base"])
            break;
        default:
            // Default to small
            classes = classes.concat(["px-3", "py-2", "text-sm"])
            break;
    }
    
    return (
        <button type="button" className={classNames(classes)} onClick={onClick}>
            {text}
        </button>
    );
  };
  
  export default Button;