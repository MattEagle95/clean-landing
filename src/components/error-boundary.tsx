import { AlertProps } from '@chakra-ui/react';
import React, { Component, ErrorInfo, ReactNode } from 'react';

import { StatusAlert } from './status-alert';

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
      return (
        <StatusAlert
          status={'error'}
          description={this.state.message}
          {...this.props.statusAlertProps}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
