import type { ReactNode } from 'react';

type ContentRecord = {
  slug: string;
  title: string;
  body: ReactNode;
  excerpt?: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
};

export async function getContentBySlug(slug: string): Promise<ContentRecord | null> {
  const { educationHubData } = await import('@/data/education-hub');
  const React = await import('react');
  const { menuData } = await import('@/data/menuData');

  const category = (educationHubData as any)[slug];

  if (category) {
    const body = React.createElement(
      'div',
      { className: 'space-y-8' },
      React.createElement('p', { className: 'text-slate-700 text-lg' }, category.description),
      React.createElement(
        'div',
        { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' },
        ...category.resources.map((r: any) =>
          React.createElement(
            'a',
            {
              key: r.slug,
              href: `/${r.slug}`,
              className:
                'block bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition',
            },
            React.createElement('h2', { className: 'text-lg font-bold text-slate-900 mb-2' }, r.name),
            React.createElement('p', { className: 'text-slate-600 text-sm' }, r.description)
          )
        )
      )
    );

    return {
      slug,
      title: category.title,
      body,
      excerpt: category.description,
      seoTitle: `${category.title} - CACBLAZE`,
      seoDescription: category.description,
    };
  }

  type EducationCategory = { title: string; description: string; resources: any[] };
  const hub = educationHubData as Record<string, EducationCategory>;

  for (const cat of Object.values(hub)) {
    const resource = cat.resources.find((r: any) => r.slug === slug);
    if (resource) {
      const sections = resource.content.map((item: any, idx: number) => {
        const isStructured = item && typeof item === 'object' && 'title' in item;
        return React.createElement(
          'div',
          { key: idx },
          isStructured
            ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'h2',
                  { className: 'text-xl font-bold text-slate-900 mb-2' },
                  item.title
                ),
                React.createElement('div', { className: 'text-slate-700 leading-relaxed' }, item.body)
              )
            : React.createElement('p', { className: 'text-slate-700 leading-relaxed' }, item)
        );
      });

      const tips =
        resource.tips && resource.tips.length > 0
          ? React.createElement(
              'div',
              { className: 'rounded-2xl p-6 bg-blue-50 border border-blue-100' },
              React.createElement(
                'h3',
                { className: 'text-lg font-bold text-blue-900 mb-4' },
                'Expert Tips'
              ),
              React.createElement(
                'div',
                { className: 'space-y-4' },
                ...resource.tips.map((t: any, i: number) =>
                  React.createElement(
                    'div',
                    { key: i },
                    React.createElement('div', { className: 'font-semibold text-blue-900' }, t.title),
                    React.createElement('div', { className: 'text-blue-800' }, t.content)
                  )
                )
              )
            )
          : null;

      const body = React.createElement(
        'div',
        { className: 'space-y-8' },
        React.createElement('p', { className: 'text-slate-700 text-lg' }, resource.description),
        React.createElement('div', { className: 'space-y-8' }, ...sections),
        tips
      );

      return {
        slug,
        title: resource.name,
        body,
        excerpt: resource.description,
        seoTitle: `${resource.name} - ${cat.title} - CACBLAZE`,
        seoDescription: resource.description,
        publishedAt: resource.publishDate,
      };
    }
  }

  // Fallback: Build content from menuData for non-education slugs (Technology, Lifestyle, etc.)
  const findMenuItemBySlug = (): { label: string; description?: string } | null => {
    const main = (menuData as any).mainMenu ?? [];
    for (const m of main) {
      const categories = m.categories ?? [];
      for (const cat of categories) {
        const items = cat.items ?? [];
        for (const it of items) {
          if (typeof it.href === 'string') {
            const hrefSlug = it.href.split('/').filter(Boolean).pop();
            if (hrefSlug === slug) {
              return { label: it.label, description: it.description };
            }
          }
        }
      }
    }
    return null;
  };

  const menuHit = findMenuItemBySlug();
  if (menuHit) {
    const body = React.createElement(
      'div',
      { className: 'space-y-8' },
      React.createElement(
        'p',
        { className: 'text-slate-700 text-lg' },
        menuHit.description ||
          'This guide uses our secure canonical routing. Detailed content will load here.'
      ),
      React.createElement(
        'div',
        { className: 'rounded-2xl border border-slate-200 p-6 bg-white' },
        React.createElement(
          'ul',
          { className: 'list-disc pl-6 space-y-2 text-slate-700' },
          React.createElement('li', null, 'Overview and best practices'),
          React.createElement('li', null, 'Step-by-step instructions'),
          React.createElement('li', null, 'Troubleshooting and escalation'),
          React.createElement('li', null, 'Security and privacy notes')
        )
      )
    );

    return {
      slug,
      title: menuHit.label,
      body,
      excerpt: menuHit.description,
      seoTitle: `${menuHit.label} - CACBLAZE`,
      seoDescription: menuHit.description,
    };
  }

  return null;
}
