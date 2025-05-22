"use client";

import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-200 bg-gray-50",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
