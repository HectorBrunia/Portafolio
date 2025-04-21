type TimelineItem = {
  title: string;
  company: string;
  date: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function HorizontalTimeline({ items }: TimelineProps) {
  return (
    <div className="w-full py-12 px-4">
      <div className="relative flex flex-col items-center gap-12 before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:-translate-x-1/2 before:bg-red-950">
        {items.map((item, index) => (
          <div key={index} className="relative z-10 w-full max-w-2xl">
            {/* Punto */}
            <div className="absolute left-1/2 top-0 w-3 h-3 bg-white rounded-full border-4 border-red-950 shadow-md -translate-x-1/2" />

            {/* Tarjeta */}
            <div className="mt-6  bg-black text-white p-4 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-lg font-semibold text-red-900 text-resaltado">
                {item.title}
              </h3>
              <p className="text-sm ">{item.company}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="mt-1 text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
