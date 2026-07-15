'use client';

import { ArticleSection } from '@/data/articles';

interface ArticleContentProps {
  sections: ArticleSection[];
}

function htmlToSafeText(value: string) {
  return value
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/<\s*\/p\s*>/gi, '\n\n')
    .replace(/<\s*li(?:\s[^>]*)?>/gi, '• ')
    .replace(/<\s*\/li\s*>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .trim();
}

const ArticleContent = ({ sections }: ArticleContentProps) => {
  return (
    <div className="space-y-8">
      {(sections || []).map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 scroll-mt-28 transition-shadow hover:shadow-md"
        >
          {section.level === 2 && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left">
              {section.title}
            </h2>
          )}
          {section.level === 3 && (
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">
              {section.title}
            </h3>
          )}
          {section.level === 4 && (
            <h4 className="text-xl font-bold text-gray-900 mb-3 text-left">{section.title}</h4>
          )}

          <div className="whitespace-pre-wrap text-lg leading-8 text-gray-700 md:text-xl">
            {htmlToSafeText(section.content)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleContent;
