const TxtSection = ({ sectionTitle, children, tag }) => {
  return (
    <section>
      <h2 className="mb-3" id={tag}>
        {sectionTitle}
      </h2>
      {children}
    </section>
  );
};

export default TxtSection;
