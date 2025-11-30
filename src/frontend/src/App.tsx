import { useMetadata } from "./contexts/MetadataContext";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const { data, isLoading, error } = useMetadata();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Loading Game Data...
          </h2>
          <p className="text-slate-400">Fetching Units, Traits, and Items</p>
        </div>
      </div>
    );
  }

  // Show error screen if metadata fetch failed
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-900 to-slate-900">
        <div className="text-center max-w-md p-8 bg-slate-800/50 rounded-lg backdrop-blur">
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Failed to Load Game Data
          </h2>
          <p className="text-slate-300 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <AppRouter />
    </>
  );
}

export default App;
