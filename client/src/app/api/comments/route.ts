import { proxyServerApi } from '@/lib/serverApiProxy';

export async function POST(request: Request) {
  return proxyServerApi(request, 'comments');
}
