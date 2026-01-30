import { useState } from "react"
import Section from "../components/Section"
import MomentCard from "../components/MomentCard"
import MemoryModal from "../components/MemoryModal"
import { momentsData } from "../utility/momentsData"

export default function Moments() {
  const [activeMoment, setActiveMoment] = useState(null)

  return (
    <Section>
      <div className="space-y-20">
        
        <h2 className="text-3xl md:text-4xl leading-relaxed text-center">
          Moments that stayed
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {momentsData.map(moment => (
            <MomentCard
              key={moment.id}
              moment={moment}
              onOpen={setActiveMoment}
            />
          ))}
        </div>

        <MemoryModal
          moment={activeMoment}
          onClose={() => setActiveMoment(null)}
        />
      </div>
    </Section>
  )
}
