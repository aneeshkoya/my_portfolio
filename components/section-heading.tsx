type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-heading mt-3">{title}</h2>
      {description ? <p className="lead mt-5 max-w-3xl">{description}</p> : null}
    </div>
  );
}
