type TimelineItem = {
  title: string;
  company: string;
  date: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      {/* Línea vertical en el centro */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-950 z-0" />

      <div className="flex flex-col gap-12 z-10">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center z-10 ${
                isLeft ? "md:flex-row-reverse text-left" : "text-right"
              }`}
            >
              <div className=" px-4">
                <div className="bg-black p-4 rounded-lg shadow-md border w-[340px] border-gray-200 ">
                  <h3 className="text-lg text-red-900 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white">{item.company}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                  <p className="mt-2 text-sm text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Puntero en el centro */}
              <div className="hidden md:flex items-center justify-center w-10 relative z-10">
                <div className="w-2 h-2 bg-red-950 rounded-full  shadow-md" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
