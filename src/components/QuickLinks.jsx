import Nav from "react-bootstrap/Nav";

const QuickLinks = ({ links }) => {
  const content = links?.map(({ title, tag }) => {
    return (
      <Nav key={tag} className="d-flex flex-column text-center">
        <Nav.Item as="li">
          <Nav.Link className="pl-0" href={`#${tag}`}>
            {title}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  });

  return <div className="d-flex py-2">{content}</div>;
};

export default QuickLinks;
