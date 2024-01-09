export default function PageWrapper({ children }) {
  return (
    <main className="flex flex-1 justify-start">
      <div className="w-full bg-gray-400 py-6 px-6">
        <div className="bg-white">{children}</div>
      </div>
    </main>
  );
}
