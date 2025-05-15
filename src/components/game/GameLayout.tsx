export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-svh">
      <div className="flex-1 relative overflow-hidden">{children}</div>
    </div>
  );
}
