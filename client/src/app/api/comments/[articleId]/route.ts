import { proxyServerApi } from '@/lib/serverApiProxy';

export async function GET(request: Request, { params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params;
  return proxyServerApi(request, `comments/${encodeURIComponent(articleId)}`);
}

export async function PUT(request: Request, { params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params;
  return proxyServerApi(request, `comments/${encodeURIComponent(articleId)}`);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ articleId: string }> }
) {
  const { articleId } = await params;
  return proxyServerApi(request, `comments/${encodeURIComponent(articleId)}`);
}
