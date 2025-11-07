import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TourMapInner = lazy(() => import("./TourMapInner"));

interface TourMapProps {
  position: { lat: number; lng: number };
  label: string;
}

export const TourMap = ({ position, label }: TourMapProps) => (
  <Suspense fallback={<Skeleton className="h-64 w-full rounded-2xl" />}>
    <TourMapInner position={position} label={label} />
  </Suspense>
);
