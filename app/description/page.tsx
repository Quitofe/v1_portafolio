import { getMarkdownContent } from '@/lib/markdown';

export default async function descripcion() {
  const { contentHtml } = await getMarkdownContent('sobre-mi.md');

  return (
    <div className="prose mx-auto p-6">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
