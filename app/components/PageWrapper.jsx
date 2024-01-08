export default function PageWrapper({ children }) {
  return (
    <main className="flex flex-1 min-h-screen items-center justify-start">
      <div className="w-full h-screen bg-gray-400 p-6">
        <div className="bg-white h-full">{children}</div>
      </div>
    </main>
  );
}
