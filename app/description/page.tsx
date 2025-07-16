import { getMarkdownContent } from '@/lib/markdown';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

export default async function descripcion() {
  const { contentHtml } = await getMarkdownContent('descripcion.md');
  const Email = "acr.agila@yavirac.edu.ec";
  const Github = "https://github.com/Quitofe";

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-black to-red-700 text-white">
      <div className="max-w-2xl w-full p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Descripción</h2>
        <div className="prose prose-lg prose-invert mb-8">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center gap-2">
            <MdEmail className="text-2xl text-blue-400" />
            <span>{Email}</span>
          </div>
          <a
            href={Github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-blue-400"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
