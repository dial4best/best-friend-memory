export default function MomentCard({ moment, onOpen }) {
  const { title, coverImage, caption, hasStory } = moment;

  return (
    <div
      onClick={hasStory ? () => onOpen(moment) : undefined}
      className={`
    rounded-lg p-5 bg-[#f0ebe1] transition-all duration-300
    shadow-sm
    ${
      hasStory
        ? "cursor-pointer hover:shadow-lg hover:-translate-y-1"
        : "opacity-90"
    }
  `}
    >
      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <h3 className="text-lg font-medium">{title}</h3>

      <p className="text-sm mt-2 opacity-80">{caption}</p>

      {hasStory && (
        <p className="text-xs mt-4 uppercase tracking-wide opacity-60">
          Tap to read more
        </p>
      )}
    </div>
  );
}
