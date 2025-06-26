import { FallbackProps } from 'react-error-boundary'

const statusMap: Record<number, { message: string; image: string }> = {
  400: { message: 'Некорректный запрос (400)', image: '/img/400.png' },
  403: { message: 'Доступ запрещён (403)', image: '/img/403.png' },
  404: { message: 'Ресурс не найден (404)', image: '/img/404.png' },
  418: { message: 'Я - чайник (418)', image: '/img/418.png' },
  500: { message: 'Внутренняя ошибка сервера (500)', image: '/img/500.png' },
  504: { message: 'Шлюз не ответил вовремя (504)', image: '/img/504.png' }
}

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const status = (error as any)?.status ?? null

  const fallback = statusMap[status as number]
  const message = fallback?.message || error?.message || 'Неизвестная ошибка'
  const image = fallback?.image

  return (
    <div>
      <h2>Произошла ошибка</h2>
      <p>{message}</p>
      {image && <img src={image} />}
      <button onClick={resetErrorBoundary}>Попробовать снова</button>
    </div>
  )
}
