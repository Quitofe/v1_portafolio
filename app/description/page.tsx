import { getMarkdownContent } from '@/lib/markdown';

export default async function descripcion() {
  const { contentHtml } = await getMarkdownContent('descripcion.md');

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Descripción</h2>
      <div className="prose prose-lg">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}
