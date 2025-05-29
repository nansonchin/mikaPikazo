import React from 'react'
import type { ReactNode, ErrorInfo } from 'react';
interface Props{
    children: ReactNode;
}

interface State{
    hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_:Error):State {
    return { hasError: true };
  }

  componentDidCatch(error:Error, info:ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-50">
          <h1 className="text-2xl font-bold text-red-600">Something went wrong.</h1>
          <p className="mt-2 text-red-500">Please try refreshing or come back later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}