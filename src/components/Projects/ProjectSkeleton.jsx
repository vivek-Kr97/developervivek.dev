// ProjectSkeleton.jsx
export default function ProjectSkeleton() {
    return (
      <div className="border border-gray-700 rounded-xl p-6 shadow-lg bg-gray-800 flex flex-col md:flex-row w-full gap-6 animate-pulse">
        <div className="w-full md:w-2/5 p-4 flex flex-col">
          <div className="h-6 bg-gray-600 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-700 rounded w-full mb-4" />
          <div className="h-4 bg-gray-700 rounded w-5/6 mb-4" />
          <div className="flex flex-wrap gap-3">
            <div className="h-8 w-24 bg-gray-700 rounded-lg" />
            <div className="h-8 w-32 bg-gray-700 rounded-lg" />
            <div className="h-8 w-32 bg-gray-700 rounded-lg" />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden bg-gray-700" />
        </div>
      </div>
    );
  }
  