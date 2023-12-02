import { cn } from "@/lib/utils";
import React, { Children } from "react";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn("mx-auto w-full px-2.5 max-w-screen-xl md:px-2", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
