import Section from "../components/Section"

export default function Letter() {
  return (
    <Section>
      <div className="flex justify-center">
        <div className="max-w-2xl w-full bg-[#f6f1e8] p-8 md:p-12 rounded-md text-left space-y-6
                        shadow-lg border border-[#e2d6c3]">
          
          {/* Salutation */}
          <p className="text-lg leading-relaxed">
            Dear <span className="italic">Her Name</span>,
          </p>

          <p className="text-lg leading-relaxed">
            I’ve rewritten this part many times in my head.
          </p>

          <p className="text-lg leading-relaxed">
            Not because I didn’t know what to say,
            but because some things matter enough
            to be said carefully.
          </p>

          <p className="text-lg leading-relaxed">
            This isn’t about a day I missed,
            or a timeline that slipped.
            It’s about you,
            and what your presence has quietly meant.
          </p>

          <p className="text-lg leading-relaxed">
            I wanted this to exist
            the way our conversations often do —
            unforced, honest,
            and real.
          </p>

          {/* Signature */}
          <p className="text-sm opacity-70 pt-6">
            — your name
          </p>

        </div>
      </div>
    </Section>
  )
}
