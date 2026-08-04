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
      <h2 className="font-display text-xl md:text-2xl text-secondary text-center mt-2 max-w-3xl mx-auto leading-snug">
        {title}
      </h2>
    </div>
  );
}
