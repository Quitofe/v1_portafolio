"use client";
import { useRouter } from 'next/navigation';  // Next.js 13 app router

export default function Home() {
  const router = useRouter();

  function handleClick() {
    router.push('/description');  // Navigate to the description page
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <h1 className="text-5xl font-bold">Mi Portafolio</h1>

      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Ir a Descripcion
      </button>
    </div>
  );
}
