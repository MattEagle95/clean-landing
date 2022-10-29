import { Warning } from 'phosphor-react';
import React, { Component, ErrorInfo, ReactNode } from 'react';

import { config } from '../../config/config';
import { Alert, AlertProps } from './alert';
import { Box } from './box';
import { Text } from './text';

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
        <Box
          className={'flex flex-grow justify-center items-center text-center'}
        >
          <Box
            className={
              'flex flex-col flex-grow justify-center items-center text-center'
            }
          >
            <Warning size={42} />

            {this.state.message && (
              <Text className={'text-neutral-600 dark:text-neutral-400'}>
                {this.state.message}
              </Text>
            )}
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
