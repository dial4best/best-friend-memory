import Section from "../components/Section"
import { Timeline } from "../components/Timeline"
import { beginningTimeline } from "../utility/beginningTimeline"

export default function Beginning() {
  return (
    <Section>
      <div className="space-y-20">
        <h2 className="text-3xl md:text-4xl leading-relaxed text-center">
          How this began
        </h2>

        <Timeline items={beginningTimeline} />
      </div>
    </Section>
  )
}
