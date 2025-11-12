import { useRef } from "react";
import { cn } from "@/lib/utils";
import { usePointerPrecision } from "@/hooks/use-pointer-precision";

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  strength?: number;
  children: React.ReactNode;
}

export const MagneticButton = ({ strength = 0.35, className, children, ...rest }: MagneticButtonProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const { isFine } = usePointerPrecision();

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isFine) return;
    if (!wrapperRef.current || !innerRef.current) return;
    const bounds = wrapperRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
    const moveX = relativeX * strength * bounds.width;
    const moveY = relativeY * strength * bounds.height;
    innerRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  };

  const reset = () => {
    if (!innerRef.current) return;
    innerRef.current.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div
      ref={wrapperRef}
      className={cn("magnetic-wrapper inline-flex", className)}
      onPointerMove={isFine ? handlePointerMove : undefined}
      onPointerLeave={isFine ? reset : undefined}
      onPointerCancel={isFine ? reset : undefined}
      {...rest}
    >
      <div ref={innerRef} className="magnetic-inner inline-flex">
        {children}
      </div>
    </div>
  );
};
