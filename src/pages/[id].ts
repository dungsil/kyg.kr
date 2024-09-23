import type { APIRoute } from 'astro'
import redirects, { type Redirects } from '~/redirects'

type Params = { id: keyof Redirects }

// 컴파일 힌트
export function getStaticPaths () {
  return Object.keys(redirects).map(id => ({ params: { id } }))
}

// 실제 라우팅 처리
export const GET: APIRoute<{}, Params> = ({ params, redirect }) => {
  return redirect(redirects[params.id]?.href ?? '/')
}
