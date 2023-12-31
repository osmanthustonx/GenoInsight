import React from "react";
import { cva } from "class-variance-authority";

function Button({ size, intent, disabled, children, onClick, type }) {
  const classes = button({ size, intent: disabled ? "disabled" : intent });
  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
const button = cva(
  ["w-full", "flex", "justify-center", "items-center", "border", "whitespace-nowrap"],
  {
    variants: {
      intent: {
        default: [
          "bg-primary-main",
          "text-white",
          "border-transparent",
          "hover:bg-primary-subtle",
          "hover:text-primary-main",
          "active:bg-primary-lighter",
          "active:text-white",
        ],
        outline: [
          "border-primary-main",
          "text-primary-main",
          "hover:bg-primary-subtle",
          "hover:text-primary-main",
          "hover:border-primary-main",
          "active:bg-[#64B5F6]",
          "active:text-primary-main",
          "active:border-[#54a7f5]",
        ],
        disabled: [
          "cursor-not-allowed",
          "intent" === "default"
            ? "bg-dark-4 text-white"
            : "bg-white text-dark-4 border-dark-4",
        ],
      },
      size: {
        small: ["h-[48px]", "rounded-[28px]", "px-6 py-[14px]", "text-bs"],
        normal: [
          "h-[55px]",
          "rounded-[38px]",
          "px-9 py-4",
          "text-bm",
          ,
          "text-bn",
        ],
        medium: [
          "h-[62px]",
          "rounded-[38px]",
          "py-[18px] px-[64px]",
          "text-bm",
        ],
        large: ["h-[68px]", "rounded-[48px]", "px-20 py-5", "text-h3"],
      },
    },
    defaultVariants: {
      intent: "default",
      size: "normal",
    },
  }
);

export default Button;
