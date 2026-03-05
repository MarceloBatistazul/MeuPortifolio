import { Skeleton } from "@/components/ui/skeleton";

const InitialLoader = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-6 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-border/70 bg-card/40 px-6 py-4">
        <Skeleton className="h-8 w-36 bg-muted/80" />
        <div className="hidden items-center gap-4 md:flex">
          <Skeleton className="h-4 w-16 bg-muted/80" />
          <Skeleton className="h-4 w-20 bg-muted/80" />
          <Skeleton className="h-4 w-14 bg-muted/80" />
          <Skeleton className="h-9 w-28 rounded-full bg-muted/80" />
        </div>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-7xl gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <Skeleton className="h-5 w-24 bg-muted/70" />
          <Skeleton className="h-14 w-full bg-muted/80" />
          <Skeleton className="h-14 w-11/12 bg-muted/80" />
          <Skeleton className="h-5 w-10/12 bg-muted/70" />
          <div className="flex gap-4 pt-2">
            <Skeleton className="h-11 w-36 rounded-full bg-muted/80" />
            <Skeleton className="h-11 w-36 rounded-full bg-muted/80" />
          </div>
        </div>
        <Skeleton className="h-72 w-full rounded-3xl bg-muted/80 md:h-96" />
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-7xl gap-6 md:grid-cols-3">
        <Skeleton className="h-36 rounded-2xl bg-muted/70" />
        <Skeleton className="h-36 rounded-2xl bg-muted/70" />
        <Skeleton className="h-36 rounded-2xl bg-muted/70" />
      </div>
    </div>
  );
};

export default InitialLoader;
