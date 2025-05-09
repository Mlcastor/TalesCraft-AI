// Homepage component
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Text-Based AI RPG</h1>
      <p className="text-xl mb-8">Embark on an AI-powered adventure</p>
      <Link 
        href="/login" 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Start Your Journey
      </Link>
    </main>
  );
}// Homepage component
