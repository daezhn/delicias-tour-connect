import { lazy, Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const MiniMapInner = lazy(() => import("./MiniMapInner"));

export const MiniMap = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="h-[360px] w-full rounded-3xl" />;
  }

  return (
    <Suspense fallback={<Skeleton className="h-[360px] w-full rounded-3xl" />}>
      <MiniMapInner />
    </Suspense>
  );
};
