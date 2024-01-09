export default function PageWrapper({ children }) {
  return (
    <main className="flex flex-1 items-center justify-start min-h-screen">
      <div className="w-full bg-gray-400 p-6">
        <div className="bg-white ">{children}</div>
      </div>
    </main>
  );
}
