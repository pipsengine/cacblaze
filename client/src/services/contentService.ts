type ContentRecord = {
  slug: string;
  title: string;
  body: React.ReactNode;
  excerpt?: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
};

export async function getContentBySlug(slug: string): Promise<ContentRecord | null> {
  return null;
}
