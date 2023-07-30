interface Props {
  header: string;
  items: string[];
  link: string;
}

const ListGroup = ({ header, items, link }: Props) => {
  return (
    <>
      <h1 className="text-xl-start">
        <a href={link}>{header}</a>
      </h1>
      <ul className="list-group p-2">
        {items.map((item) => (
          <li className="text-start">{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
