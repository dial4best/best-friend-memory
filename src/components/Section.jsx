export default function Section({
  children,
  className = "",
  showDivider = true,
}) {
  return (
    <section
      className={`min-h-screen px-6 md:px-12 flex flex-col ${className}`}
    >
      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          {children}
        </div>
      </div>

      {/* Divider at true end of section */}
      {showDivider && (
        <div className="py-10 flex justify-center">
          <div className="w-64 h-px bg-[#352300]" />
        </div>
      )}
    </section>
  )
}
