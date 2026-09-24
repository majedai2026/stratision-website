import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[Stratision Uncaught Error]:", error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080A10] text-slate-100 flex items-center justify-center p-6">
          <div className="max-w-md w-full p-8 rounded-2xl bg-[#0D1220] border border-white/[0.08] shadow-2xl space-y-6 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mx-auto flex items-center justify-center text-xl font-bold font-mono">
              !
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                System Interface Refresh
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                An unexpected interface state occurred. Please click below to refresh the Stratision session.
              </p>
            </div>
            {this.state.error?.message && (
              <div className="p-3 rounded-lg bg-black/40 text-xs font-mono text-slate-400 text-left overflow-auto max-h-32">
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.href = "/";
              }}
              className="w-full py-3.5 px-6 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Reload Stratision
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
