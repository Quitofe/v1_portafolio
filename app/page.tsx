'use client';
import NavigationButton from '@/components/botton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16 bg-gradient-to-br from-black via-black to-red-700 text-white">
      <h1 className="text-5xl font-bold">Mi Portafolio</h1>

      <NavigationButton to="/description" label="Ir a Descripción" />

      <div>
        Pruebas
      </div>
    </div>
  );
}
