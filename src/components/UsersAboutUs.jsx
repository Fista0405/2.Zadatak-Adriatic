const UsersAboutUs = ({ sectionTitle, text, user }) => {
  return (
    <>
      <h2 className="mt-4">{sectionTitle}</h2>
      <div className="d-flex flex-column justify-content-between mx-0 px-2 py-3 bg-warning rounded">
        <p className="text-justify">{text}</p>
        <span className="align-self-end">{user}</span>
      </div>
    </>
  );
};

export default UsersAboutUs;
