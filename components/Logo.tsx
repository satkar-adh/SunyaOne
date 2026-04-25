export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 font-mono text-sm font-bold text-white shadow-sm"
      >
        01
      </span>
      <span className="text-lg font-semibold tracking-tight text-ink-900">
        SunyaOne
      </span>
    </div>
  );
}
