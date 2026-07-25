interface PageHeroProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  bgFrom?: string;
  bgTo?: string;
}

export default function PageHero({
  tag,
  title,
  highlight,
  subtitle,
  bgFrom = "from-blue-900",
  bgTo = "to-indigo-950",
}: PageHeroProps) {
  return (
    <section className={`bg-gradient-to-b ${bgFrom} ${bgTo} text-white py-20 md:py-28`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        {tag && (
          <span className="inline-block bg-[#61CE70]/20 text-[#61CE70] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 font-lato">
            {tag}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-bold font-nouvelr leading-tight mb-6">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-[#61CE70]">{highlight}</span>
            </>
          )}
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-lato max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
