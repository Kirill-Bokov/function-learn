import { ErrorBoundary } from 'react-error-boundary'
import { ReactNode } from 'react'
import { ErrorFallback } from './ErrorFallback'

interface AppErrorBoundaryProps {
  children: ReactNode
}

export const AppErrorBoundary = ({ children }: AppErrorBoundaryProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload()
      }}
    >
      {children}
    </ErrorBoundary>
  )
}
