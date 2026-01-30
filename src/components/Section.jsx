export default function Section({
  children,
  className = "",
  showDivider = true,
}) {
  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-12 ${className}`}
    >
      <div className="max-w-4xl w-full text-center">
        {children}
      </div>

      {showDivider && (
        <div className="mt-16 w-64 h-px bg-[#c4b59a]" />
      )}
    </section>
  )
}
