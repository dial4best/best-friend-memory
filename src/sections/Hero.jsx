import Section from "../components/Section"

export default function Hero() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left: Photo */}
        <div className="flex justify-center">
          <div className="p-2 border border-[#c4b59a] rounded-md">
            <img
              src="/her-photo.jpg"
              alt="Her"
              className="w-60 h-72 md:w-72 md:h-96 object-cover rounded-sm"
              onError={(e) => {
                e.target.style.display = "none"
              }}
            />
            <div className="w-60 h-72 md:w-72 md:h-96 bg-[#e6dfd3] flex items-center justify-center text-sm italic opacity-70">
              her photo
            </div>
          </div>
        </div>

        {/* Right: Message */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl leading-relaxed tracking-wide">
            Happy Birthday,
            <br />
            <span className="italic">Hiral</span>
          </h1>

          <p className="text-lg md:text-xl mt-8 opacity-85">
            I hope today feels a little lighter,
            <br />
            a little kinder,
            <br />
            and very you.
          </p>

          <p className="text-xs mt-10 tracking-wide opacity-60">
            — Dhruvaa
          </p>
        </div>

      </div>
    </Section>
  )
}
