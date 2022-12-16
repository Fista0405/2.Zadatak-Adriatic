import ListGroup from "react-bootstrap/ListGroup";

function SideBar({ title, items }) {
  const content = items?.map(({ title, url }) => {
    return (
      <ListGroup key={title}>
        <ListGroup.Item action href={url}>
          {title}
        </ListGroup.Item>
      </ListGroup>
    );
  });
  return (
    <>
      <h4 className="mt-1 mb-0 py-2 px-3 border border-primary rounded-top bg-primary ">
        {title}
      </h4>
      {content}
    </>
  );
}

export default SideBar;
