import React, { Component, ErrorInfo, ReactNode } from 'react';

import { Alert, AlertProps } from './alert';

interface Props {
  statusAlertProps?: AlertProps;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  message?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    message: undefined,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true, message: _.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <Alert>{this.state.message}</Alert>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
