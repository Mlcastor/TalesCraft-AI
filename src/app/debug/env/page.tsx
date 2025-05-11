"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface EnvVariable {
  exists: boolean;
  length?: number;
}

interface EnvInfo {
  NODE_ENV: string;
  envVariables: {
    GROQ_API_KEY?: EnvVariable;
    OPENAI_API_KEY?: EnvVariable;
    NEXT_PUBLIC_GROQ_API_KEY?: EnvVariable;
    NEXT_PUBLIC_OPENAI_API_KEY?: EnvVariable;
    DATABASE_URL?: EnvVariable;
    [key: string]: EnvVariable | undefined;
  };
  runtimeInfo: {
    isServerComponent: boolean;
    timestamp: string;
  };
}

export default function EnvironmentDebugPage() {
  const [serverEnvInfo, setServerEnvInfo] = useState<EnvInfo | null>(null);
  const [clientEnvInfo, setClientEnvInfo] = useState<
    Record<string, EnvVariable>
  >({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check client-side environment variables
  useEffect(() => {
    // Check for client-side accessible env vars
    const clientInfo: Record<string, EnvVariable> = {};

    // Next.js client-side accessible env vars must be prefixed with NEXT_PUBLIC_
    clientInfo.NEXT_PUBLIC_GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY
      ? { exists: true, length: process.env.NEXT_PUBLIC_GROQ_API_KEY.length }
      : { exists: false };

    clientInfo.NEXT_PUBLIC_OPENAI_API_KEY = process.env
      .NEXT_PUBLIC_OPENAI_API_KEY
      ? { exists: true, length: process.env.NEXT_PUBLIC_OPENAI_API_KEY.length }
      : { exists: false };

    // NODE_ENV is always available client-side
    clientInfo.NODE_ENV = {
      exists: true,
      length: process.env.NODE_ENV?.length,
    };

    setClientEnvInfo(clientInfo);
  }, []);

  // Fetch server-side environment variables info
  useEffect(() => {
    async function fetchEnvInfo() {
      try {
        setLoading(true);
        const response = await fetch("/api/debug/env");

        if (!response.ok) {
          throw new Error(
            `Server responded with ${response.status}: ${response.statusText}`
          );
        }

        const data = await response.json();
        setServerEnvInfo(data);
      } catch (err) {
        console.error("Failed to fetch environment info:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchEnvInfo();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Environment Variable Debug</h1>
        <div className="animate-pulse">
          <div className="bg-gray-700 h-10 rounded-md mb-4"></div>
          <div className="bg-gray-700 h-64 rounded-md"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Environment Variable Debug</h1>
        <div className="bg-red-900 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-white mb-2">Error</h2>
          <p className="text-gray-300">{error}</p>
        </div>
        <p className="mb-4">
          Make sure you are running in development mode and the server is
          running.
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-md font-semibold"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Environment Variable Debug</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-amber-400 mb-4">
            Server Environment
          </h2>
          {serverEnvInfo && (
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-2">
                <p className="text-gray-400">
                  NODE_ENV:{" "}
                  <span className="text-white font-mono">
                    {serverEnvInfo.NODE_ENV}
                  </span>
                </p>
                <p className="text-gray-400 text-sm">
                  Timestamp:{" "}
                  <span className="text-gray-300">
                    {serverEnvInfo.runtimeInfo.timestamp}
                  </span>
                </p>
              </div>

              <div>
                <h3 className="text-lg text-amber-300 mb-2">
                  Environment Variables
                </h3>
                <ul className="space-y-2">
                  {Object.entries(serverEnvInfo.envVariables).map(
                    ([key, value]) => (
                      <li key={key} className="flex items-start">
                        <span
                          className={`inline-block w-3 h-3 mt-1 mr-2 rounded-full ${
                            value?.exists ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></span>
                        <div>
                          <code className="text-white font-mono">{key}</code>
                          <p className="text-sm text-gray-400">
                            {value?.exists
                              ? `Exists (length: ${value.length || "unknown"})`
                              : "Not found"}
                          </p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-amber-400 mb-4">
            Client Environment
          </h2>
          <div className="space-y-4">
            <div className="border-b border-gray-700 pb-2">
              <p className="text-gray-400">
                NODE_ENV:{" "}
                <span className="text-white font-mono">
                  {process.env.NODE_ENV}
                </span>
              </p>
              <p className="text-gray-400 text-sm">
                Browser:{" "}
                <span className="text-gray-300">
                  {typeof window !== "undefined"
                    ? window.navigator.userAgent
                    : "SSR"}
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-lg text-amber-300 mb-2">
                Client-side Environment Variables
              </h3>
              <ul className="space-y-2">
                {Object.entries(clientEnvInfo).map(([key, value]) => (
                  <li key={key} className="flex items-start">
                    <span
                      className={`inline-block w-3 h-3 mt-1 mr-2 rounded-full ${
                        value?.exists ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    <div>
                      <code className="text-white font-mono">{key}</code>
                      <p className="text-sm text-gray-400">
                        {value?.exists
                          ? `Exists (length: ${value.length || "unknown"})`
                          : "Not found"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-900/30 border border-amber-700 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-amber-400 mb-2">
          How to Fix Missing Environment Variables
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>
            Create a{" "}
            <code className="bg-gray-700 px-1 rounded text-amber-300">
              .env.local
            </code>{" "}
            file in the project root
          </li>
          <li>
            Add your environment variables (e.g.,{" "}
            <code className="bg-gray-700 px-1 rounded text-amber-300">
              GROQ_API_KEY=your_key_here
            </code>
            )
          </li>
          <li>
            For client-side access, prefix with{" "}
            <code className="bg-gray-700 px-1 rounded text-amber-300">
              NEXT_PUBLIC_
            </code>
          </li>
          <li>Restart your Next.js development server</li>
          <li>
            For production, set environment variables in your hosting platform
          </li>
        </ol>
      </div>

      <div className="flex justify-between">
        <Link
          href="/"
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-md font-semibold"
        >
          Back to Home
        </Link>

        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
        >
          Refresh Data
        </button>
      </div>
    </div>
  );
}
