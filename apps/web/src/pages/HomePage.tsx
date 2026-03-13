import { useQuery } from "@tanstack/react-query";
import { fetchHealth } from "@/api/health";

export default function HomePage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["health"],
    queryFn: fetchHealth,
    retry: 1,
  });

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-2">PrepAI</h1>
        <p className="text-gray-400 text-lg">
          Intelligent Interview Practice Platform
        </p>
      </div>

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          API Status
        </h2>

        {isLoading && (
          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
            <span>Connecting to API...</span>
          </div>
        )}

        {isError && (
          <div className="flex items-center gap-2 text-red-400">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span>{error?.message ?? "API unreachable"}</span>
          </div>
        )}

        {data && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="font-medium">API is online</span>
            </div>
            <div className="border-t border-gray-800 pt-3 space-y-2 text-sm">
              <Row label="Status" value={data.status} />
              <Row label="Environment" value={data.environment} />
              <Row label="Version" value={data.version} />
              <Row
                label="Timestamp"
                value={new Date(data.timestamp).toLocaleTimeString()}
              />
            </div>
          </div>
        )}
      </div>

      <p className="text-gray-600 text-sm">Phase 1 — Foundation</p>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-200 font-mono">{value}</span>
    </div>
  );
}
