export default function Section({
  children,
  className = "",
  showDivider = true,
}) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center px-6 md:px-12 ${className}`}
    >
      {/* Content */}
      <div className="max-w-4xl w-full text-center">
        {children}
      </div>

      {/* Divider pinned to bottom */}
      {showDivider && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-px bg-[#352300]" />
      )}
    </section>
  )
}
