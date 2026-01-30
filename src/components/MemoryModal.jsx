export default function MemoryModal({ moment, onClose }) {
  if (!moment) return null;

  const { title, story } = moment;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#faf7f2] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sm opacity-70 hover:opacity-100"
        >
          ✕
        </button>

        <h2 className="text-2xl mb-6">{title}</h2>

        {story?.text &&
          story.text.map((para, index) => (
            <p key={index} className="mb-4 leading-relaxed opacity-90">
              {para}
            </p>
          ))}

        {story?.images &&
          story.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-full rounded-md my-4"
            />
          ))}
      </div>
    </div>
  );
}
