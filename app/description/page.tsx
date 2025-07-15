import { getMarkdownContent } from '@/lib/markdown';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

export default async function descripcion() {
  const { contentHtml } = await getMarkdownContent('descripcion.md');
  const Email = "acr.agila@yavirac.edu.ec"; // Replace with actual email or fetch from another source
  const Github = "https://github.com/Quitofe"; // Replace with actual GitHub URL or fetch from another source

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Descripción</h2>
      <div className="prose prose-lg mb-8">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-2">
          <MdEmail className="text-2xl text-blue-600" />
          <span>{Email}</span>
        </div>
        <a
          href={Github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-blue-700"
        >
          <FaGithub className="text-2xl" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}
