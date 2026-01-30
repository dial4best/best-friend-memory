export function Timeline({ items }) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Center vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-[#c4b59a] -translate-x-1/2" />

      <div className="space-y-20">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0

          return (
            <div key={index} className="relative flex items-start">
              {/* Left side */}
              <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : ""}`}>
                {isLeft && <TimelineContent {...item} />}
              </div>

              {/* Center dot */}
              <div className="relative z-10 flex justify-center3">
                <div className="w-3 h-3 bg-[#a89675] rounded-full mt-2" />
              </div>

              {/* Right side */}
              <div className={`w-1/2 ${!isLeft ? "pl-12 text-left" : ""}`}>
                {!isLeft && <TimelineContent {...item} />}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function TimelineContent({ time, title, description }) {
  return (
    <div>
      <p className="text-sm uppercase tracking-wider opacity-60">
        {time}
      </p>

      <h3 className="text-lg md:text-xl mt-1">
        {title}
      </h3>

      <p className="text-sm md:text-base mt-3 opacity-80 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
