import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse [animation-duration:4s] [animation-timing-function:cubic-bezier(0.4,0,0.2,1)] rounded-md bg-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
