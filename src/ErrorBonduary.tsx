import { FallbackProps, ErrorBoundary } from 'react-error-boundary'
import { ReactNode } from 'react'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const status = (error as any)?.status || null

  let message: string
  let image: string | undefined

  switch (status) {
    case 400:
      message = 'Некорректный запрос (400)'
      image = '/img/400.png'
      break
    case 403:
      message = 'Доступ запрещён (403)'
      image = '/img/403.png'
      break
    case 404:
      message = 'Ресурс не найден (404)'
      image = '/img/404.png'
      break
    case 418:
      message = 'Я - чайник (418)'
      image = '/img/418.png'
      break
    case 500:
      message = 'Внутренняя ошибка сервера (500)'
      image = '/img/500.png'
      break
    case 504:
      message = 'Шлюз не ответил вовремя (504)'
      image = '/img/504.png'
      break
    default:
      message = error?.message || 'Неизвестная ошибка'
  }

  return (
    <div >
      <h2>Произошла ошибка</h2>
      <p>{message}</p>
      {image && <img src={image}/>}
      <button onClick={resetErrorBoundary}>Попробовать снова</button>
    </div>
  )
}

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
