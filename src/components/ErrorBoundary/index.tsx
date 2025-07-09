import React from 'react';
import Button from 'components/Button';
import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch() {
    // You can log error info here or send to a service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles['error-boundary-root']}>
          <h1>Something went wrong.</h1>
          <pre className={styles['error-boundary-message']}>
            {this.state.error?.message}
          </pre>
          <Button
            className={styles['error-boundary-reload-btn']}
            onClick={() => window.location.reload()}
          >
            Reload Page
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
