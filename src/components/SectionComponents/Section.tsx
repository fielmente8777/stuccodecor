interface SectionProps {
  className?: string;
  lgpy?: string;
  py?: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  className = "",
  lgpy,
  py,
  id,
  children,
}) => {
  return (
    <section
      className={`max-screen ${lgpy ? `lg:py-${lgpy}` : "lg:py-12"} ${py ? `py-${py}` : "py-5"} ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
