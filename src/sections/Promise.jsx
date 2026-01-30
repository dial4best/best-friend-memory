import Section from "../components/Section"

export default function Promise() {
  return (
    <Section showDivider={false}>
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        
        <p className="text-xl md:text-2xl leading-relaxed">
          This page isn’t meant to stay still.
        </p>

        <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-xl">
          Just like us,
          it can grow,
          change,
          and hold more moments over time.
        </p>

        <p className="text-sm opacity-60 mt-6">
          Always here.
        </p>

      </div>
    </Section>
  )
}
