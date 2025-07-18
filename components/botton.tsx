'use client';

import { useRouter } from 'next/navigation';

type NavigationButtonProps = {
  to: string;
  label: string;
};

export default function NavigationButton({ to, label }: NavigationButtonProps) {
  const router = useRouter();

  function handleClick() {
    router.push(to);
  }

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
}
