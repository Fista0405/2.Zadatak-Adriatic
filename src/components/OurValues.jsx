import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const OurValues = ({ sectionTitle, tag, items }) => {
  const content = items?.map(({ title, image, alt }) => {
    return (
      <Col
        key={title}
        sm={12}
        md={4}
        className="d-flex align-items-center justify-content-center flex-column"
      >
        <img src={image} alt={alt} />
        <span>{title}</span>
      </Col>
    );
  });

  return (
    <>
      <h2 className="mt-4" id={tag}>
        {sectionTitle}
      </h2>
      <Row>{content}</Row>
    </>
  );
};

export default OurValues;
