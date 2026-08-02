export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xl md:text-2xl text-primary text-center font-south-catalonia font-medium">
        {eyebrow}
      </p>
      <h2 className="text-2xl md:text-3xl text-secondary text-center font-extrabold mt-2 uppercase">
        {title}
      </h2>
    </div>
  );
}
