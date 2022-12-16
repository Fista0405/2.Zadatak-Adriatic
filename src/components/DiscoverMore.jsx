import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DiscoverMore = ({ sectionTitle, tag, items }) => {
  const content = items?.map(({ title, image, url, urlText, alt }) => {
    return (
      <Col key={title} sm={12} md={6}>
        <Card className="my-3">
          <Card.Img src={image} alt={alt} />
          <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
            <Card.Title>{title}</Card.Title>
            <Button href={url} variant="warning">
              {urlText}
            </Button>
          </div>
        </Card>
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

export default DiscoverMore;
