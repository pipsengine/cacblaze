import { proxyServerApi } from '@/lib/serverApiProxy';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ articleId: string }> }
) {
  const { articleId } = await params;
  return proxyServerApi(request, `comments/${encodeURIComponent(articleId)}/reaction`);
}
