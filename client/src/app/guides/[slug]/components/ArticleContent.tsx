'use client';

import { ArticleSection } from '@/data/articles';

interface ArticleContentProps {
  sections: ArticleSection[];
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

          <div
            className="prose prose-lg md:prose-xl prose-neutral max-w-none text-gray-700 leading-8 prose-headings:scroll-mt-28 prose-p:my-5 prose-li:my-2 prose-ul:list-disc prose-ol:list-decimal prose-a:text-blue-600 hover:prose-a:underline prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleContent;
