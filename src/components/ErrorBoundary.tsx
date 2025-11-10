import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can wire this to a logging service if needed
    console.error("ErrorBoundary caught an error:", error, info);
  }

  handleReload = () => {
    // Full reload to try to recover from transient errors
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return <>{this.props.fallback}</>;
      return (
        <div className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
          <div className="max-w-md space-y-4 text-center">
            <h2 className="text-2xl font-semibold">Algo salió mal</h2>
            <p className="text-sm text-muted-foreground">
              Ocurrió un error al cargar esta sección. Puedes intentar recargar la página.
            </p>
            <div className="flex justify-center gap-3">
              <button
                className="rounded-full bg-primary px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white"
                onClick={this.handleReload}
              >
                Recargar
              </button>
              <a
                href="/"
                className="rounded-full border border-black/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em]"
              >
                Ir al inicio
              </a>
            </div>
            {process.env.NODE_ENV !== "production" && this.state.error && (
              <pre className="mt-4 max-h-48 overflow-auto rounded bg-muted p-3 text-left text-xs text-muted-foreground">
                {this.state.error.message}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children as React.ReactElement;
  }
}
