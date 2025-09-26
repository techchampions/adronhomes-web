// components/ErrorBoundary.tsx
"use client";

import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: React.ComponentType<FallbackProps>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface FallbackProps {
  error: Error | null;
  resetError: () => void;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Next.js Error caught by boundary:", error, errorInfo);

    // Log to your error reporting service
    this.logErrorToService(error);
  }

  logErrorToService = (error: Error): void => {
    if (process.env.NODE_ENV === "production") {
      // Example: Sentry, LogRocket, etc.
      console.log("Error reported to service:", error);
    }
  };

  resetError = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      const { fallback: FallbackComponent } = this.props;

      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={this.state.error}
            resetError={this.resetError}
          />
        );
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try again.
            </p>
            <div className="space-y-3">
              <button
                onClick={this.resetError}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-200"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
